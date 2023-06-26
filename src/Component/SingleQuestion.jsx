import React, { useState } from 'react';

import {BsPlusCircleFill} from 'react-icons/bs';
import {AiFillMinusCircle} from 'react-icons/ai';


const SingleQuestion = (props) => {

    const {id, title, info} = props
    const [toggle, setToggle] = useState(false)

   
  return (
    <div key={id} className=' bg-gray-100 p-3 rounded-md shadow-md'>
        <div className=' flex justify-between items-center mb-3'>
        <h2>{title}</h2>
        <button className=' mr-2' onClick={() => setToggle(!toggle)}>
            {toggle ? (<AiFillMinusCircle size={25} />) : (<BsPlusCircleFill size={25} />)}
        </button>
        </div>
        {toggle && (
        <p className=''>{info}</p>
        )}
    </div>
  )
}

export default SingleQuestion