import React,{createContext, useEffect, useState} from "react";
import all_product from '../Components/Assets/all_product'
import axios from 'axios'



export const CartContext= createContext(null);
    

const CartontextProvider=(props)=>{
    
    const [items,setter]= useState({});
    const [recieved,inputer]= useState(localStorage.getItem("cart")?localStorage.getItem("cart"):[]);

  let res;

  const finder= async ()=>{
      if(localStorage.getItem("token"))
        {
            res= await  axios.post('http://localhost:300/add_cart',{
                token:localStorage.getItem('token'),
            }); 
            console.log(res.data.user);
             setter(res.data.user.cartdata);
        }
        else{
             setter({});
        }
    
  }

  useEffect(async ()=>{
    finder();   
    const new_res= await axios.get("http://localhost:300/listproduct");
    localStorage.setItem("cart",new_res.data.items);
  },[]);
 

//  Add to cart function
    const add_to_cart= async (itemid)=>{  
        console.log(items);
        if(localStorage.getItem('token'))
            {
                setter((curr)=>({...curr,[itemid]:curr[itemid]+1}));
                await axios.post("http://localhost:300/add_cart",{
                    object_id:itemid,
                    token:localStorage.getItem("token")
                })
            }
            else{
                 alert("Login First");
                 window.location.replace('/login');
            }
        
        
   }

     
// Total Quantity Function
   const total_quantity=()=>{
      
       let total_item=0;
       for(const item in items)
        {
           if(items[item]>0)
            {
                total_item=total_item+items[item];
            }
        }

        return total_item
      }

//  Total price
    const total_price= ()=>{
      let  price=0;
        for(const item in items)
            {
                if(items[item]>0)
                    {
                        console.log("recieved prior",recieved);
                        const data= recieved.filter((product)=>product._id===(item));
                        // const new_bay= await axios.post("http://localhost:300/finder",{_id:item});

                        console.log('Filterdata for total price',data);
                        price=price+items[item]*data[0].new_price;
                    }
            }  

            console.log(price);
            return price;
    }

    // Total Price

   const remove_from_cart= async (itemid)=>{
        
    setter((curr)=>({...curr,[itemid]:curr[itemid]-1}));
}

    const ContextValue={total_price,setter,items,remove_from_cart,total_quantity,add_to_cart};
    console.log('Printin in Context',items);

    return (
        <CartContext.Provider value={ContextValue}>{props.children}</CartContext.Provider>
    )
}


export default CartontextProvider;