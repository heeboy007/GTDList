import { User } from '../database/index.js';
import { add } from 'date-fns';
import Joi from 'joi';
import bcrypt from 'bcrypt';

const saltRounds = 10 // 해싱 횟수

//유저 정보 확인
function validate(body) {
    const schema = Joi.object().keys({
        email: Joi.string()
        .min(3)
        .max(50)
        .email()
        .required()
        .messages({
            'string.min': '이메일은 3자보다 적을 수 없습니다.',
            'string.max': '이메일은 50자를 넘을 수 없습니다.',
            'string.email': '이메일을 입력해주세요.',
            'any.required': '이메일을 입력해주세요.'
        }),
        password: Joi.string()
        .min(6)
        .max(20)
        .regex(/^[!@#$%^&*a-zA-Z0-9]{3,30}$/)
        .regex(/[a-z]/, '비밀번호는 영어 소문자를 포함해야합니다.')
        .regex(/[A-Z]/, '비밀번호는 영어 대문자를 포함해야합니다.')
        .regex(/[0-9]/, '비밀번호는 숫자를 포함해야합니다.')
        .regex(/[!@#$%^&*]/, '비밀번호는 특수문자를 포함해야합니다.')
        .required()
        .messages({
            'string.min': '비밀번호는 6자 이상이어야합니다.',
            'string.max': '비밀번호는 20자를 넘을 수 없습니다.',
            'string.pattern.base': '비밀번호는 영문자 대/소, 숫자, 일부 특수문자(!@#$%^&*)만 사용하실 수 있습니다.',
            'any.required': '비밀번호를 입력해주세요.'
        }),
    });
    const result = schema.validate(body);
    if (result.error){
        //regex를 여러 개 적용할 때는 messages를 이용한 타입 감별만으로는 커스텀 메시지를 만들 수 없음.
        //따라서 name 필드를 메시지로 이용, name => message로 포팅해서 front-end에 메시지를 전달.
        console.log("API : user.controller.js : validation error");
        if(result.error.details[0].type === 'string.pattern.name'){
            result.error.details[0].message = result.error.details[0].context.name;
        }
    }
    return result;
}

// 유저 전체 조회
async function getAll(req, res) {
    console.log("API : user.controller.js : getAll");
    const result = await User.findAll();
    return res.status(200).json({ result });
}

// 회원가입, 일반 이메일 주소
async function register(req, res) {
    console.log("API : user.controller.js : register");
    
    //passed validation
    const result = validate(req.body);
    if(result.error) {
        return res.status(400).json({ result: result });
    } else {
        console.log("API : custom validation clear");
    }

    //여기서 부터 body의 값을 언패킹합니다.
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const after_3_months = add(new Date(),  { days: 90 });

    const newUser = await User.create({
        email,
        password: hashedPassword,
        account_login_method: "normal",
        password_invalidate: after_3_months
    });

    return res.status(201).json({ result: 'user creation success' });
}

async function login(req, res) {
    console.log("API : user.controller.js : login");
    const result = validate(req.body);
    if(result.error) {
        return res.status(401).json({ result: 'authentication failed' });
    }
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email }});
    if(!user) {
        return res.status(401).json({ result: 'authentication failed' });
    }

    const match = await bcrypt.compare(password, user.password);
    if(match) {
        return res.status(200).json({ result: 'login successful' });
    } else {
        return res.status(401).json({ result: 'authentication failed' });
    }
}

async function update(req, res) {
    console.log("API : user.controller.js : update");
    const { email } = req.body;
    if(!email) {
        console.log("API : user.controller.js : bad request(update) : " + email);
        return res.status(400).json({ error: 'bad request : email are required' });
    }

    const count = await User.count({ where: { email }});
    if(count === 0){
        return res.status(401).json({ error: 'bad request : user does not exist' });
    } else {
        await User.update(req.body, { where: { email }});
    }

    return res.status(200).json({ result:'success' });
}

async function remove(req, res){
    console.log("API : user.controller.js : remove");
    const result = validate(req.body);
    if(result.error) {
        return res.status(401).json({ result: 'authentication failed' });
    }
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400).json({ error: 'bad request : email/password are required' });
        console.log("API : user.controller.js : remove/bad request detected " + email);
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await User.destroy({
        where: {
            email, 
            password: hashedPassword 
        }
    });
    return res.status(200).json({ result:'success' });
}

export default {
    getAll,
    register,
    login,
    remove,
    update
};