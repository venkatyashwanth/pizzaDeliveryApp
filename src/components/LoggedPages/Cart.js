import React, { useContext, useEffect, useState } from 'react';
import { cartCount } from '../../App';
import { getProductById } from '../../config/Myservices';

export default function Cart() {
    const { count, onAdd } = useContext(cartCount);

    const items = JSON.parse(localStorage.getItem('mylocal'));
    const [data, setData] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('myCart')!= undefined){
            let dataItems = JSON.parse(localStorage.getItem('myCart'));
            setData(dataItems);
        }
    }, [])

    const delProduct = (id)=> {
        let array = JSON.parse(localStorage.getItem('myCart'))
        console.log(array)
        array.forEach(element => {
            if(element.id === id){
                
            }
        });
        if(array.id === id){
            let num = array.indexOf(id);
            let arr = JSON.parse(localStorage.getItem('myCart'));
            let newarr = arr.splice(num,1);
            let strarr = JSON.stringify(arr);
            localStorage.setItem("myCart",strarr);
        }
    }

    return (
        <>
            <div className='container'>
                <p>
                    Total Items in cart: {count.length}
                </p>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Pizza</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e,i)=>
                        <tr key={i}>
                            <td>{e.pname}</td>
                            <td>{e.price}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => delProduct(e.id)}>Remove</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
