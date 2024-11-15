import React from 'react'
import { useSelector } from 'react-redux'
import Box from './Box'

function Home() {
    const products=useSelector(function(state){
        return state.products
    })
  
if(products.loading){
  return <h1>loading</h1>
}
if(products.error){
  return <h1>error</h1>
}
else   return <div className='d-flex flex-wrap gap-4 justify-content-center '>
{products.products.map((product)=>  <Box product={product} key={product.id}/> )}

</div>
}

export default Home