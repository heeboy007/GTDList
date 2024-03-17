import { result } from "lodash";
import { EmailVerificationToken  } from "../database";
import wrapWithErrorHandler from "../util/errorHandler";
import { tokenGen } from "../util/token";
import { add } from "date-fns";

async function generateVerifyToken(req, res){
    const user_id_number = req.body.user_id;

    try {
        await EmailVerificationToken.create({
            user_id_number: user_id_number,
            token: tokenGen(),
            expiration_date: add(new Date(), { days: 1 }),
            used: false
        });
    } catch (e) {
        res.status(500).json({ error: 'error while generation token' });
    }

    res.status(201).json({ result: 'token generated' });
}

async function verifiy(req, res) {
    const user_id_number = req.body.user_id;

    try {
        await EmailVerificationToken.findOne({ where: { user_id_number } });
    } catch (e) {
        res.status(500).json({ error: 'error while generation token' });
    }
}

export default wrapWithErrorHandler({
    generateVerifyToken
})