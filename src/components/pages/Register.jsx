import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import AuthContext from "../../auth/AuthContext";


//import { PrimaryButton } from "../buttons/Buttons";

//TODO: COME UP WITH REGEX PATTERN FOR PASSWORD AS WELL AS CREATE PASSWORD LENGTH REQUIREMENTS
const RegisterForm = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //const passwordRegex = 
    const isEmailValid = emailRegex.test(email);
    const navigate = useNavigate();

    const onSubmit = async (e) =>{
        e.preventDefault();
        //if an invalid email is entered throw an error
        if(!isEmailValid){
            console.error("Invalid email address")
            //still need to display error message to the user
        }
        //if email address is blank, throw error message
        if(email === " "){
            console.error("Email address is required")
            //also doesnt display error message to the user yet
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential =>{
                const user = userCredential.user
                alert("User account created successfully, redirecting to login page")
                navigate("/login")
                //works! test@test.com was listed as an email address
            })
            .catch(error=>{
                const errorCode = error.code
                const errorMessage = error.message
                console.error(errorCode,errorMessage)
            })
        }
        
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
                    <label htmlFor="" className="mx-1">Password</label>
                    <input type="password" required className="border p-1 rounded w-full" onChange={(e)=> setPassword(e.target.value.trim())}/>
                </div>
                <div className="">
                    <label htmlFor="" className="mx-1">Confirm Password</label>
                    <input type="password" required className="border p-1 rounded w-full"/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-700" onClick={onSubmit}>Register</button>
            </form>
            {/* error message div */}
            <div>
                
            </div>
            <p>Already have an account? Click <Link className="hover:cursor hover:underline" to={"/login"}>here</Link> to sign in!</p>
        </div>
     );
}
 
export default RegisterForm;