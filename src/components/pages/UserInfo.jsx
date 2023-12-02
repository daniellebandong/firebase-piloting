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
    // const writeBuyer = collection(db, 'buyerinfo')
    // writeBuyer.doc('buyer').set({
    //     FirstName: 'Ada', LastName: 'Loveace', Address: '4954 145ave', DOB: '12/19/2000', SINNumber:765892345
    // })
    // writeBuyer.doc('buyer').set({
    //     FirstName: 'Carmen', LastName: 'Santiago', Address: '4567 89st', DOB: '01/30/1978', SINNumber:465728294
    // })
    // writeBuyer.doc('buyer').set({
    //     FirstName: 'Josh', LastName: 'Hutcherson', Address: '12343 56st', DOB: '11/19/1994', SINNumber:957376523
    // })
    // writeBuyer.doc('buyer').set({
    //     FirstName: 'Katniss', LastName: 'Everclear', Address: '1627 3rd st', DOB: '01/05/1956', SINNumber:958734533
    // })
    // writeBuyer.doc('buyer').set({
    //     FirstName: 'Rue', LastName: 'Perez', Address: '75863 10st', DOB: '04/03/1956', SINNumber:987456312
    // })
    // writeBuyer.doc('buyer').set({
    //     FirstName: 'Loki', LastName: 'Laufessen', Address: '6392 200ave', DOB: '01/01/1000', SINNumber:235689301
    // })
    // writeBuyer.doc('buyer').set({
    //     FirstName: 'Tony', LastName: 'Stark', Address: '6912 65st', DOB: '12/19/1977', SINNumber:305930783
    // })

return(
    <div>
        <h1>Employee Information</h1>
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