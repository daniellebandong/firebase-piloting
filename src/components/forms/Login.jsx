import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { useNavigate } from "react-router-dom";
import AuthContext from '../../auth/AuthContext'
const LoginForm = () => {
    const navigate = useNavigate();

    return ( 
        <div>
            <h1>Firebase Authentication App</h1>
            <form action="">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" />
                </div>
                <p>Don't have an account, click here to register for one now!</p>
                {/* import button after creating one */}
            </form>
        </div>
     );
}
 
export default LoginForm;