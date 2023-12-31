import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { app } from "../../firebaseconfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import AuthContext from "../../auth/AuthContext";

//import { PrimaryButton } from "../buttons/Buttons";

//TODO: COME UP WITH REGEX PATTERN FOR PASSWORD AS WELL AS CREATE PASSWORD LENGTH REQUIREMENTS
const RegisterForm = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [confirmPassword, setConfirmPassword] = useState('');
    const isValidPassword = passwordRegex.test(password)
    const isEmailValid = emailRegex.test(email);
    const navigate = useNavigate();
    const [showErrorPassword, setShowErrorPassword] = useState('');
    const [showErrorEmail, setShowErrorEmail] = useState(' ')
    const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.ca", "shaw.ca"];

    const onSubmit = async (e) =>{
        e.preventDefault()
        //email validation, NEED TO ADD VALIDATION FOR ONLY SPECIFIC DOMAINS

        if (!isEmailValid || email === '') {          
            setShowErrorEmail('Invalid email address');
            setEmail('')
        
          } 
        const [, domain] = email.split('@');
        if (!allowedDomains.includes(domain)) {
            
            setShowErrorEmail('Invalid email domain. Allowed domains are: ' + allowedDomains.join(', '));
            setEmail('')        
            return;
        }
        
        //password validation
        if(!isValidPassword){
            setShowErrorEmail('')
            setShowErrorPassword('Invalid password')
            setPassword('')
        }
        if (password !== confirmPassword) {
            setShowErrorEmail('');
            setShowErrorPassword('Passwords do not match!');
            setPassword('');
            setConfirmPassword('');
            return;
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential =>{
                const user = userCredential.user
                alert("User account created successfully, redirecting to login page")
                return navigate("/login")
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
        <div className="flex justify-center">
            <div className="p-2 ">
                <h1 className="text-2xl font-bold p-1">Hockey Players r Us</h1>
                <form action="">
                    <div className="">
                        <label  className="mx-1">Email address</label>
                        <input type="email" required className="border p-1 rounded w-full" onChange={(e) => setEmail(e.target.value.trim())} />
                    </div>
                    <div className="">
                        <label  className="mx-1">Password</label>
                        <input type="password" required className="border p-1 rounded w-full" 
                        onChange={(e) => setPassword(e.target.value.trim())} />
                    </div>
                    <div className="">
                        <label  className="mx-1">Confirm Password</label>
                        <input type="password" required className="border p-1 rounded w-full"/>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded border border-blue-700" onClick={onSubmit}>Register</button>
                </form>
                    <span className="text-red font-bold">{showErrorEmail}</span>
                    <br />
                    <span className="text-red font-bold">{showErrorPassword}</span>
                <p>Already have an account? Click <Link className="font-bold hover:cursor hover:underline" to={"/login"}>here</Link> to sign in!</p>
            </div>
        </div>

     );
}
 
export default RegisterForm;