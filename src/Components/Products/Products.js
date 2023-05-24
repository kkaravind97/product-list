import React, { useState } from 'react';
import {phonesData}   from './productData';
import {Card,Button} from 'react-bootstrap';

function Products() {

  const [items,setItem]=useState(phonesData);

  const decQty=(id)=>{
    const newItem=items.map((item)=>
      item.id===id && item.qty>1?{...item,qty:item.qty-1}:item
    )
    setItem(newItem);
  }

  const incQty=(id)=>{
    const newItem1=items.map((item)=>
      item.id===id?{...item,qty:item.qty+1}:item
    )
    setItem(newItem1);
  }
  return (
    <div>
      <h2 className='bg-primary text-white p-2'>Products</h2>
      {items.map((item)=>(
        <div className=' mt-5 ms-3 d-inline-flex' key={item.id}>
          <Card className='shadow p-3 mb-2 bg-body-tertiary rounded' style={{ width: '13rem'}}>
      <Card.Img variant="top"  src={item.image} className='p-2' style={{ height: '11rem'}}/>
      <Card.Body>
        <Card.Title className='text-primary'>{item.model}</Card.Title>
        <Card.Text>
          {item.desc}
        </Card.Text>
        <h5>₹ {item.price}</h5>
        <div>
          <p>Quantity</p>
          <Button onClick={()=>decQty(item.id)} variant='primary' className='m-1 text-white fw-bold'>-</Button>{item.qty}<Button onClick={()=>incQty(item.id)} className='m-1 text-white fw-bold' variant='primary'>+</Button>
        </div>
        <Button variant="primary" className='text-white fw-bold'>Add to cart</Button>
      </Card.Body>
    </Card>
        </div>
      ))}
    </div>
  )
}

export default Products
