import AuthTemplate from "../common/AuthTemplate";
import LoginForm from "../component/LoginForm";

function LoginView() {
    return (
        <AuthTemplate>
            <LoginForm></LoginForm>
        </AuthTemplate>
    );
}

export default LoginView;