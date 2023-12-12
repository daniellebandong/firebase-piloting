import { useEffect, useState } from 'react';
import { db } from '../../firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const InfoForm = () => {
    const [buyerInfo, setBuyerInfo] = useState([]);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const fetchBuyerInfo = async () => {
            // Check if the user is authenticated
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    // Check the user's email
                    if (user.email === 'daniellebandong@gmail.com') {
                        const buyerRef = collection(db, 'buyerinfo');
                        getDocs(buyerRef)
                            .then((buyerInfoSnapshot) => {
                                const buyerInfoData = buyerInfoSnapshot.docs.map((doc) => ({
                                    id: doc.id,
                                    ...doc.data(),
                                }));
                                setBuyerInfo(buyerInfoData);
                            })
                            .catch((error) => {
                                console.error('Error fetching subscriber information', error);
                            });
                    } else {
                        alert('You are not authorized to access this resource');
                        navigate('/login');
                    }
                } else {
                    alert('You are not authenticated to access this resource');
                    navigate('/login');
                }
            });
        };
        fetchBuyerInfo();
    }, [auth, navigate]);

    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-2xl m-2'>Subscriber Information</h1>
                <ul>
                    {buyerInfo.map((buyer) => (
                        <li key={buyer.id}>
                            <strong>First Name:</strong> {buyer.FirstName},{' '}
                            <strong>Last Name:</strong> {buyer.LastName},<strong>Address: </strong>
                            {buyer.Address},<strong>Date of Birth: </strong>
                            {buyer.DOB}
                            {/* Add more fields as needed */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfoForm;
