import { JwtPayload } from "jsonwebtoken";

interface UserInterface {

    login(email: string, password:string): Promise<JwtPayload>;

    logout(): Promise<object>;

}