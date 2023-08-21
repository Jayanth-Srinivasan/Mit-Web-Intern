import React, { useRef } from 'react';
import './Seller.css';
import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Seller() {

    const formRef = useRef();

  const addProd = (e) =>{
    e.preventDefault();
    var newProd ={
        name: formRef.current[0].value.trim(),
        size: formRef.current[1].value.trim(),
        price : formRef.current[2].value.trim(),
        tag : formRef.current[3].value.trim(),
        img : formRef.current[4].files[0]
    }
    console.log(newProd);

    const storageRef = ref(storage,`img/${newProd.img.name}`);
    const uploadTask = uploadBytesResumable(storageRef,newProd.img)
    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            console.log(error.message);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

                await setDoc(
                    doc(db,`${newProd.tag}`,newProd.name),
                    {
                      name: newProd.name,
                      size: newProd.size,
                      price: newProd.price,
                      tag: newProd.tag,
                        img: downloadURL
                    },
                    {merge: true}
                  ).then(()=>{
                    alert("Product added");
                  }).catch((e)=>console.log(e.message));
                })
            }
        );
            
}
  return (
    <section className='seller-container'>
        <div className='form-container'>
            <form
             className='form-box'
             ref={formRef}
             onSubmit={addProd}
             >
                <div className='input-box'>
                    <label className='label-box'>Product Name</label>
                    <input className='input-style' type='text' placeholder='Shirt' />
                </div>
                <div className='input-box'>
                    <label className='label-box'>Size</label>
                    <select className='input-style'>
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </select>
                </div>
                <div className='input-box'>
                    <label className='label-box'>Price</label>
                    <input className='input-style' type='number' placeholder='₹999' />
                </div>
                <div className='input-box'>
                    <label className='label-box'>Tag</label>
                    <select className='input-style'>
                        <option value='Mens'>Mens</option>
                        <option value='Womens'>Womens</option>
                        <option value='Kids'>Kids</option>
                    </select>
                </div>
                <div className='input-box'>
                    <label className='label-box'>Product Image</label>
                    <input className='input-style file-upload' type='file' />
                </div>
                <div className='input-box'>
                    <button className='add-button' type='submit'>Add Product</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Seller