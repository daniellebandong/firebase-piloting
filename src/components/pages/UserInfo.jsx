import {useEffect, useState} from 'react'
import { db, app } from '../../firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'



const InfoForm =() =>{
    const [buyerInfo, setBuyerInfo] = useState([])
    useEffect(()=>{
        const fetchBuyerInfo = async ()=>{
            const buyerRef = collection(db, 'buyerinfo')
            const buyerInfoSnapshot = await getDocs(buyerRef)
            const buyerInfoData = buyerInfoSnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }))
            setBuyerInfo(buyerInfoData)
        }
        fetchBuyerInfo();
    }, [])

return(
    <div>
        <h1>Buyer Information</h1>
        <ul>
        {buyerInfo.map((buyer) => (
            <li key={buyer.id}>
            <strong>Name:</strong> {buyer.FirstName}, <strong>Last Name:</strong> {buyer.LastName},<strong>Address</strong>{buyer.Address},<strong>Date of Birth:</strong>{buyer.DOB}, <strong>SIN Number:</strong>{buyer.SINNumber}
            {/* Add more fields as needed */}
            </li>
        ))}
        </ul>
    </div>
)

}

export default InfoForm