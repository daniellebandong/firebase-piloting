import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../../auth/AuthContext";
import firebaseApp from "../../firebaseconfig";

//import { PrimaryButton } from "../buttons/Buttons";


const RegisterForm = () => {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ user, setUser] = useState('');

    const onSubmit = async (e) =>{
        e.preventDefault();
        // console.log(user)
        // console.log(password)
        // console.log(email)
        firebaseApp.auth().createUserWithEmailAndPassword(auth, email,password)
        .then(userCredential=>{
            console.log(userCredential.user)
        })
    }

    return ( 
        <div className="p-2">
            <h1 className="text-2xl font-bold p-1 ">Very Secure Firebase App</h1>
            <form action="">
                <div className="">
                    <label htmlFor="" className="mx-1">Email address</label>
                    <input type="text" required className="border p-1 rounded w-full" onChange={(e)=> setEmail(e.target.value.trim())}/>
                </div>
                <div className="">
                    <label htmlFor="" className="mx-1">Username</label>
                    <input type="text" required className="border p-1 rounded w-full" onChange={(e)=> setUser(e.target.value.trim())}/>
                </div>
                <div className="">
                    <label htmlFor="" className="mx-1">Password</label>
                    <input type="password" required className="border p-1 rounded w-full" onChange={(e)=> setPassword(e.target.value.trim())}/>
                </div>
                <div className="">
                    <label htmlFor="" className="mx-1">Confirm Password</label>
                    <input type="password" required className="border p-1 rounded w-full"/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-700" onClick={onSubmit}>Register</button>
            </form>
            <p>Already have an account? Click <Link className="hover:cursor hover:underline" to={"/login"}>here</Link> to sign in!</p>
        </div>
     );
}
 
export default RegisterForm;