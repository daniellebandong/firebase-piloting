import { app } from "../../firebaseconfig";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../../auth/AuthContext'


const LoginForm = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    //login with existing account
    const onSubmit =(e)=>{
        e.preventDefault()
        if(!isValid){
            setIsValid("Incorrect username or password")
        }
        else{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user
                console.log("login successful")
                navigate('/home')
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
            })
        }

    }
    return ( 
        <div className="flex justify-center p-2 md:w-11/12 ">
            <div className="">
            <h1 className="text-2xl font-bold p-1">Welcome to Hockey Player's r Us</h1>
            <form action="" className=" my-1">
                <div>
                    <label htmlFor="username">Email:</label>
                    <input type="text" className="border p-1 rounded w-full" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="border p-1 rounded w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-700 my-1" onClick={onSubmit}>Login</button>
                {/* error message div */}
                {isValid === ' ' && (
                        <div role="alert">
                            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Warning
                            </div>
                            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>{isValid}</p>
                            </div>
                        </div>
                    )}
                <p>Don't have an account, click <Link className="hover:cursor hover:underline" to={"/register"}>here</Link> to register for one now!</p>
                
            </form>
            </div>

        </div>
     );
}
 
export default LoginForm;