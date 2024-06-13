import React,{createContext, useState} from "react";
import all_product from '../Components/Assets/all_product'

export const CartContext= createContext(null);


const default_cart=()=>{
  let cart=[];
     for(let i=1;i<=all_product.length;i++)
      {
           cart[i]=0;
      }

      return cart;
}


const CartontextProvider=(props)=>{
    const [items,setter]= useState(default_cart());

    const add_to_cart= async (itemid)=>{
        setter((curr)=>({...curr,[itemid]:curr[itemid]+1}));
        
        
   }

   

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


    const total_price=()=>{
      let  price=0;
        for(const item in items)
            {
                if(items[item]>0)
                    {
                        const data= all_product.filter((product)=>product.id===Number(item));
                        console.log('Filterdata for total price',data);
                        price=price+items[item]*data[0].new_price;
                    }
            }

            console.log(price);
            return price;
    }

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