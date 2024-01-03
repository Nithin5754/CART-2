import React,{ useContext,useEffect,useReducer } from "react";
import { reducer } from "./reducer";

const url = 'https://course-api.com/react-useReducer-cart-project'


const  AppContext=React.createContext();


let initailstate={
  isLoading:false,
  cart:[],
  amount:0,
  total:0
}

const  AppProvider=({children})=>{
const [state,dispatch]=useReducer(reducer,initailstate)


const fetchData=async ()=>{
  dispatch({type:'LOADING'})
  const response=await fetch(url);
  const data=await response.json();
  dispatch({type:'FETCHED_DATA',payload:data})
}


const increaseQty=(id)=>{
  dispatch({type:'INCREASE',payload:id})
}
const decreaseQty=(id)=>{
  dispatch({type:'DECREASE',payload:id})
}


useEffect(()=>{
  fetchData()
},[])

useEffect(()=>{
dispatch({type:'TOTAL_CART'})
},[state.cart])

  return (
    <AppContext.Provider value={{...state,increaseQty,decreaseQty}}>
            {children}   
    </AppContext.Provider>
  )
}




const useGlobalContext=()=>{
  return useContext(AppContext)
}


export {useGlobalContext,AppProvider}