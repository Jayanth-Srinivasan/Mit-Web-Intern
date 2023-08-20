import React, { useEffect, useState } from 'react';
import {collection,  onSnapshot } from 'firebase/firestore';
import {db} from '../../firebase';
import '../Mens/Mens.css';
import Shirt from '../../assets/Shirt.jpg'

function Kids() {
    const [kidsProd,setKidsProd] = useState([]);

    useEffect(()=>{
        const unsub = onSnapshot(
            collection(db,"Kids"),
            (collectionRef) =>{
                let arr = [];
                collectionRef.forEach((doc) => {
                    arr.push({...doc.data(),id:doc.id})
                })
                setKidsProd(arr);
            }
        )
            
        return () => unsub();
    },[]);
  return (
    <section className='shop-section'>
        <div className='section-desc'>
            <h1 className='section-title'>Kids</h1>
            <p className='section-para'>Get the latest collection of Kid's Fashion</p>
        </div>
        <div className='cards-container'>
        <div className='cards-box'>
                {
                kidsProd.map((item,idx) =>(

                <div key={idx} className='card'>
                    <img className='card-img' src={Shirt} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: {item.size}</span>
                        <h3 className='card-title'>{item.name}</h3>
                        <p className='card-price'>₹ {item.price}.00</p>
                        <div className='card-button-box'>
                            <button className='card-button'>Add to Cart</button>
                        </div>
                    </div>
                
                </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Kids