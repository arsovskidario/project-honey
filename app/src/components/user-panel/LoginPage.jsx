import { useContext } from "react";
import LoginForm from "./form/LoginForm";
import LogoutSubmit from "./logout/LogoutSubmit";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage() {
    const {username} = useContext(AuthContext);

    return (
        <main className="h-screen">
            {username.length !== 0 ?
              <LogoutSubmit/>
            : <LoginForm/>
            } 

        </main>
    )
}