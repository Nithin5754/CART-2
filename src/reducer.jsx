const reducer=(state,action)=>{
  switch (action.type) {
    case 'FETCHED_DATA':
 return {...state,cart:action.payload,isLoading:false}
      
   case 'INCREASE':
     const updateCart=state.cart.map((carts)=>{
      if(carts.id===action.payload){

    
        return {...carts,amount:carts.amount+1}
      
      }
      return carts
     })
     return {...state,cart:updateCart}
   
    case 'DECREASE':
      const updateCartDecrease=state.cart.map((carts)=>{
     if(carts.id===action.payload){
      return {...carts,amount:carts.amount-1}
     }
     return carts
      }).filter((cart)=>cart.amount !==0)
      return {...state,cart:updateCartDecrease}

     case 'TOTAL_CART':
      let {total,amount}=state.cart.reduce((totalCart,cartItem)=>{
        const {price,amount}=cartItem
        totalCart.amount+=amount
        totalCart.total+=price*amount
        return totalCart
      },{total:0,amount:0})

      total=parseFloat(total.toFixed(2))
       return {...state,total,amount}

      case 'LOADING':
        return {...state,isLoading:true} 
    default:
    return state
  }

}


export{reducer}