import { useEffect, useState } from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { db } from "../../firebaseconfig";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import {v4 as uuidv4} from 'uuid'

const SubscribeForm =()=>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  
      return unsubscribe;
    }, [auth]);
  
    const handleAdminButtonClick = () => {
      navigate('/admin');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Get form data
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const address = e.target.address.value;
        const dob = e.target.dob.value;
    
        // Check if the user is authenticated
        if (!user) {
          alert("You are not authenticated to submit this form");
          return;
        }
    
        // Generate a unique buyer ID 
        const buyerId = uuidv4();
    
        // Reference to the specific buyer document
        const buyerDocRef = doc(db, "buyerinfo", buyerId);
    
        // Set the data for the specific buyer document
        await setDoc(buyerDocRef, {
          FirstName: firstName,
          LastName: lastName,
          Address: address,
          DOB: dob,
        });
    
        // Optional: You can clear the form fields after submission
        e.target.reset();
    
        alert("Form submitted successfully!");
      };
    
    return(
        <body>
            <h1 className="text-2xl font-bold p-1">Hockey Players r Us Home</h1>
            <div className="flex justify-center p-1">
                <section>
                    <h2 className="font-bold">Oilers Cup or Bust Season</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates explicabo quidem dolorum quaerat. Eligendi, accusantium possimus. Laudantium non fugiat iure eligendi nesciunt quod, sint, quia voluptatem iste architecto suscipit.</p>
                </section>
                <section>
                    <h2 className="font-bold text-xl">Is Bouchard the NHL's best defenseman?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dicta ipsa, porro odit nam cum? Magni quae rem tempore quos necessitatibus esse, iure aspernatur voluptates perferendis, dignissimos hic maiores odit.</p>
                </section>
                <section>
                    <h2 className="font-bold text-xl">When will NHL Player Safety step in?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio quas aliquam tempora quisquam, placeat maxime quo, commodi repellat sit nesciunt ad? Tempore debitis possimus laboriosam sint. Quo, quae qui.</p>
                </section>
            </div>
            <footer className="my-20 p-1">
                <aside className="font-bold">Want the first scoop on all the hockey action, sign up for our newsletter today!</aside>    

                <form action="" class="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-600">First Name:</label>
        <input type="text" id="firstName" name="firstName" required
               class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"/>
      </div>

      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-600">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required
               class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"/>
      </div>

      <div>
        <label for="address" class="block text-sm font-medium text-gray-600">Address:</label>
        <textarea id="address" name="address" rows="4" required
                  class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"></textarea>
      </div>
      <div>
        <label for="dob" class="block text-sm font-medium text-gray-600">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required
               class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"/>
      </div>
      <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300" >
        Submit
      </button>
    </form>
            {/* Button for admin page */}
            {user?.email === 'daniellebandong@gmail.com' && (
          <button
            onClick={handleAdminButtonClick}
            className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300"
          >
            Go to Admin Page
          </button>
        )}
            </footer>
        </body>
    )
}
export default SubscribeForm