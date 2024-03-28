import { JwtPayload } from "jsonwebtoken";

interface UserInterface {

    async function login(email: string, password:string): Promise<JwtPayload>;

    async function logout(): Promise<object>;
}

export UserInterface;