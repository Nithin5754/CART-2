import { useGlobalContext } from "./context"


const NavBar = () => {
  const {amount}=useGlobalContext()

  return (
   <div className="w-full h-[50px] bg-blue-400">
    <ul className="flex flex-direction justify-around">
        <li>
           <h4> nithin cart</h4>
        </li>
        <li className="text-3xl"> cart<span className="w-10 h-10 text-3xl bg-yellow-600 rounded-full"> {amount}</span></li>
    </ul>
   </div>
  )
}
export default NavBar