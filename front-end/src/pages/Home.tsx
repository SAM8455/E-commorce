import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {

  const addToCartHandler = () => {}

  return (

    <div className='home'>
      <section></section>


      <h1>latest product
        <Link to={'/search'} className='findmore'>
        More</Link>
      </h1>


      <main>
        <ProductCard productId='1' name='mac' price={50000} stock={34} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg'/>
        
        <ProductCard productId='2' name='camera' price={50000} stock={34} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/713xBPyXC-L._SL1500_.jpg'/>

      </main>
      
    </div>
  )
}

export default Home
