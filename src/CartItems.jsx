
import { useGlobalContext } from "./context";



const CartItems = ({title,id,price,img,amount}) => {
  const {increaseQty,decreaseQty}=useGlobalContext()
  console.log("hello");
  console.log(title);
  return (
   <li className="w-[600px] bg-gray-800 flex justify-between p-6 rounded-lg mb-4 m-auto text-white">
  <div>
    <img src={img} alt="" className="w-[100px] h-[100px]" />
  <h4>{title}</h4>
   <button className="bg-red-600 p-3 rounded-xl mt-4">remove</button> 
  </div>
<div className="mt-16">
<h5 className="text-xl">{price}</h5>



<button className="w-16" onClick={()=>increaseQty(id)}>+</button>
<p className="text-3xl">{amount}</p>
<button onClick={()=>decreaseQty(id)}>-</button>

</div>

   </li>


    
  )
}
export default CartItems