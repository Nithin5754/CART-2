import CartItems from "./CartItems"
import { useGlobalContext } from "./context"

const Cart = () => {
  const {cart,total,isLoading}=useGlobalContext()
if(isLoading){
   return <h1>loading......</h1>
}

  return (
  <main>
      <section className="text-center">
        <h1>cart</h1>

        <div > 
           <ul>
               {
                cart.map((carts)=>{
                   return <CartItems key={carts.id} {...carts}/>
                })
               }
           </ul>
        
        </div>
        
<div>

   <p className="text-4xl">Total: {total}</p>
</div>
        </section>
  </main>
  )
}
export default Cart