import {useEffect, useState} from 'react'
import { db, app } from '../../firebaseconfig'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import {getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const InfoForm =() =>{
    const [buyerInfo, setBuyerInfo] = useState([])
    const navigate = useNavigate()
    const auth = getAuth();

    useEffect(()=>{
        const fetchBuyerInfo = async ()=>{
        //Check if the user is authenticated
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                const buyerRef = collection(db, 'buyerinfo')
                getDocs(buyerRef)
                .then((buyerInfoSnapshot)=>{
                    const buyerInfoData = buyerInfoSnapshot.docs.map((doc)=>({
                        id: doc.id,
                        ...doc.data(),
                    }))
                setBuyerInfo(buyerInfoData)
                })
                .catch((error)=>{
                    console.error("Error fetching employee information", error)
                })
            }
            else{
                alert("You are not authenticated to access this resource")
                navigate('/login')
            }
        })
        }
        fetchBuyerInfo();
    }, [auth])

return(
    <div>
        <h1>Employee Information</h1>
        <ul>
        {buyerInfo.map((buyer) => (
            
            <li key={buyer.id}>
            <strong>First Name:</strong> {buyer.FirstName}, <strong>Last Name:</strong> {buyer.LastName},<strong>Address: </strong>{buyer.Address},<strong>Date of Birth: </strong>{buyer.DOB} 
            {/* Add more fields as needed */}
            </li>
        ))}
        </ul>
    </div>
)

}

export default InfoForm