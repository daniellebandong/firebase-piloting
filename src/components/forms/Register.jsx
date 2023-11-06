const RegisterForm = () => {

    return ( 
        <div>
            <h1 className="text-2xl font-bold p-1 content-center">Very Secure Firebase App</h1>
            <form action="">
                <div>
                    <label htmlFor="" className="mx-1">First Name</label>
                    <input type="text" required className="border p-1 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="mx-1">Last Name</label>
                    <input type="text" required className="border p-1 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="mx-1">Email address</label>
                    <input type="text" required className="border p-1 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="mx-1">Date of Birth</label>
                    <input type="text" required className="border p-1 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="mx-1">Username</label>
                    <input type="text" required className="border p-1 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="mx-1">Password</label>
                    <input type="password" required className="border p-1 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="mx-1">Confirm Password</label>
                    <input type="password" required className="border p-1 rounded"/>
                </div>
            </form>
            <p>Already have an account? Click here to sign in!</p>
        </div>
     );
}
 
export default RegisterForm;