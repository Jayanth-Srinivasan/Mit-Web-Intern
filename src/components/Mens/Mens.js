import React, { useEffect, useState } from 'react';
import {collection,  onSnapshot } from 'firebase/firestore';
import {db} from '../../firebase';
import './Mens.css';


function Mens() {
    const [mensProd,setMensProd] = useState([]);

    const addToCart = (item) => {
        let cartItems = [];
        if(localStorage.getItem('cartItems')){
            cartItems = JSON.parse(localStorage.getItem('cartItems'));
        }
        cartItems.push({item});
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
        alert("Item added to cart")
    }
    useEffect(()=>{
        const unsub = onSnapshot(
            collection(db,"Mens"),
            (collectionRef) =>{
                let arr = [];
                collectionRef.forEach((doc) => {
                    arr.push({...doc.data(),id:doc.id})
                })
                setMensProd(arr);
            }
        )
            
        return () => unsub();
    },[]);
    console.log(mensProd)
  return (
    <section className='shop-section'>
        <div className='section-desc'>
            <h1 className='section-title'>Mens</h1>
            <p className='section-para'>Get the latest collection of Men's Fashion</p>
        </div>
        <div className='cards-container'>
            <div className='cards-box'>
                {
                mensProd.map((item,idx) =>(

                <div key={idx} className='card'>
                    <img className='card-img' src={item.img} alt=''/>
                    <div className='card-content'>
                        <span className='card-size'>Size: {item.size}</span>
                        <h3 className='card-title'>{item.name}</h3>
                        <p className='card-price'>₹ {item.price}.00</p>
                        <div className='card-button-box'>
                            <button onClick={() => addToCart(item)} className='card-button'>Add to Cart</button>
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

export default Mens