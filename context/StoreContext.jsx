import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext= createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});
    const url="http://localhost:4000"
    const [token,setToken]=useState("");
    const [service_card,setServiceCard]=useState([])

    const addToCart=async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removeFromCart=async(itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
       if (token) {
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
       }
    };
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo=service_card.find((product)=>product._id===item);
                if(itemInfo){
                    totalAmount+=itemInfo.price*cartItems[item];
                }else{
                    console.warn(`Item with id ${item} not found in service_card`);
                }
                
            }
            
        }
        return totalAmount;
    }

    const fetchServiceList= async()=>{
        const response= await axios.get(url+"/api/service/list");
        setServiceCard(response.data.data)
    }

    const loadCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        
        async function loadData() {
            await fetchServiceList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])
    useEffect(()=>{
        console.log('Updated cart items:', cartItems);
        Object.keys(cartItems).forEach(_id => {
            console.log(`id ${_id}: count ${cartItems[_id]}`);
        });  
    }, [cartItems]);
    const contextValue={
        service_card,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;