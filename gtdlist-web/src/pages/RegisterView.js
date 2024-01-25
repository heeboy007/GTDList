import AuthTemplate from "../common/AuthTemplate";
import RegisterForm from "../component/register/RegisterForm";

function RegisterView() {
    return (
        <AuthTemplate>
            <RegisterForm></RegisterForm>
        </AuthTemplate>
    );
}

export default RegisterView;