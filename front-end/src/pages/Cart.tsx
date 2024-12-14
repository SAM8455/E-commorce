import { useEffect, useState } from "react"
import { VscError } from "react-icons/vsc"
import CartItem from "../components/CartItem.tsx";
import { Link } from "react-router-dom";



const CartItems = [
  {
    productId: "uahjfa",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Macbook",
    price:30000,
    quantity: 40,
    stock:20

  }
]
const subtotal = 4000
const tax = Math.round(subtotal * 0.18)
const shippingCharges = 200
const discount = 200
const total = subtotal+tax+shippingCharges



const Cart = () => {

  const [coupenCode , setCoupenCode] = useState('')
  const [isValidCoupenCode , setIsValidCoupenCode] = useState(false)


  useEffect( () => {
    const timeOutId = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCoupenCode(true)
        else setIsValidCoupenCode(false)
    },1000)

    return () => {
      clearTimeout(timeOutId)
      setIsValidCoupenCode(false)
    }
  })


  return (
    <div className="cart">
      
      <main>
        {
          CartItems.length > 0 ? CartItems.map((i,idx)=> (<CartItem key={idx} cartItem={i}/>)) : <h1>No items Added</h1>
        }
      </main>

      <aside>

        <p>Subtotal: ₹{subtotal}</p>
        <p>shipping charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em>
          -  ₹{discount}
          </em>
        </p>
        <p><b>Total: ₹{total}</b></p>

        <input type="text" placeholder="coupen code" value={coupenCode} onChange={(e)=>setCoupenCode(e.target.value)}/>

        {
          coupenCode && (isValidCoupenCode? ( <span className="green">{discount} off using the <code>{coupenCode}</code></span> ) : ( <span className="red">Invalid Coupen code <VscError /></span> ))
        }

        {
          CartItems.length > 0 &&  <Link to="/shipping">check out</Link>
        }

      </aside>
    </div>
  )
}

export default Cart
