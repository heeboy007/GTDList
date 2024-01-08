const { User } = require('../databaase');
const bcrypt = require('bcrypt');

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
        if(result.error.details[0].type === 'string.pattern.name'){
            result.error.details[0].message = result.error.details[0].context.name;
        }
    }
    return result;
}

// 유저 전체 조회
async function getAll(req, res) {
    const result = await User.findAll();
    res.status(200).json({ result });
    console.log("API : user.controller.js : getAll");
}

// 회원가입, 일반 이메일 주소
async function register(req, res) {
    try {
        const result = validate(req.body);
        if(result.error) {
            res.status(400).json({ result: result });
        }
        //passed validation
        const { email, password } = req.body;
        const saltRounds = 10 // 해싱 횟수

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            account_login_method: "normal",
            email_verfiy_token: "blah"
        });

        res.status(201).json({ result: 'user creation success' });
    } catch (error) {
        res.status(500).json({ result: 'error registering user' });
    }
}

async function login(req, res) {
    try {
        const result = validate(req.body);
        if(result.error) {
            res.status(401).json({ result: 'authentication failed' });
        }
        const { email, password } = req.body;
        
        const user = await User.findOne({ where: { email }});
        if(!user) {
            res.status(401).json({ result: 'authentication failed' });
        }

        const match = await bcrypt.compare(password, user.password);
        if(match) {
            res.status(200).json({ result: 'login successful' });
        } else {
            res.status(401).json({ result: 'authentication failed' });
        }
    } catch (error) {
        res.status(500).json({ result: 'error authenticating user' });
    }
}

async function update(req, res) {
    const { email } = req.body;
    if(!email) {
        res.status(400).json({ error: 'bad request : email are required' });
        console.log("API : user.controller.js : bad request(insertOrUpdate) : " + email);
        return;
    }

    const count = await User.count({ where: { email }});
    if(count === 0){
        res.status(401).json({ error: 'bad request : user does not exist' });
    } else {
        await User.update(req.body, { where: { email }});
    }

    res.status(200).json({ result:'success' });
}

async function remove(req, res){
    const { email } = req.body;
    if(!email) {
        res.status(400).json({ error: 'bad request : email are required' });
        console.log("API : user.controller.js : bad request(remove) : " + email);
    }

    await User.destroy({where: { email }});
}

module.exports = {
    getAll,
    register,
    login,
    remove,
    update
}