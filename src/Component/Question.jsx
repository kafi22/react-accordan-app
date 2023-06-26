import React from 'react'
import SingleQuestion from './SingleQuestion'

const Question = ({data}) => {

    const getItems = data.map(item => {
    
        return (
           <SingleQuestion key={item.id} {...item} />
        )
    })

  return (
    <div className=' bg-slate-200 p-2 grid grid-cols-1 space-y-2 w-[400px]'>
        {getItems}
    </div>
  )
}

export default Question