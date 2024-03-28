import jwt from "jsonwebtoken";

class JwtTokenSerivce{

    static secretKey(): string {
        return process.env.JWT_SECRET_KEY!;
    }

    static async createJWT(user: UserData) {
        const token = jwt.sign(
            { _id: user.id },
            this.secretKey(),
        );
        return token;
    }

    static decodeJWT(token: string): jwt.JwtPayload | string | null {
        try {
            const decodedToken = jwt.verify(token, this.secretKey());
            return decodedToken;
        } catch {
            return null;
        }
    }

}

export default JwtTokenSerivce;