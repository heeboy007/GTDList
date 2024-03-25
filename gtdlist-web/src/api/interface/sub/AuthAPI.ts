interface AuthAPI {

    check(): Promise<Response>;

    register(email: string, password: string): Promise<Response>;

    login(email: string, password: string): Promise<Response>;

    logout(): Promise<Response>;

}

export default AuthAPI;