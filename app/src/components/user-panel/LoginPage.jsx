import LoginForm from "./form/LoginForm";
import LogoutSubmit from "./logout/LogoutSubmit";

export default function LoginPage() {
    return (
        <section>
            
            {localStorage.getItem('accessToken') !== null ?
              <LogoutSubmit/>
            : <LoginForm/>
            } 

        </section>
    )
}