import ValidatorRegExp from "../constants/regex/ValidatorRegExp.ts";

function ip(str: string): boolean {
    return !!ValidatorRegExp.ipRegExp.exec(str);
}

function email(str: string): boolean {
    return !!ValidatorRegExp.emailRegExp.exec(str);
}

function password(str: string): boolean {
    return !!ValidatorRegExp.passwordRegExp.exec(str);
}

export default {
    ip,
    email,
    password
}