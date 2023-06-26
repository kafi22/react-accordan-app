import React, { useState } from 'react'

import Data from '../Data'
import Question from './Question'

const Accordian = () => {

   const [data, setData] = useState(Data)

  return (
    <div className=' container mx-auto max-w-2xl grid place-content-center min-h-screen my-4'>
        <Question data={data} />
    </div>
  )
}

export default Accordian