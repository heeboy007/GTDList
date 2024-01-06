import AuthTemplate from "../common/AuthTemplate";
import RegisterForm from "../component/RegisterForm";

function RegisterView() {
    return (
        <AuthTemplate>
            <RegisterForm></RegisterForm>
        </AuthTemplate>
    );
}

export default RegisterView;