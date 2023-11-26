import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState={
    data:[],
    status:"idle"
}
    
    

const ProductSlice=createSlice(
    {
    name : 'products',
    initialState,
    reducers : {
    //    fetchProducts(state,action){
    //     state.data=action.payload;
    //    }

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status='loading';
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status="idle"
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status='error';
        })
    }
}
);
export const {fetchProducts}=ProductSlice.actions;
export default ProductSlice.reducer;
// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         const data=await fetch(`https://fakestoreapi.com/products`);
//         const result = await data.json();  
//         dispatch(fetchProducts(result));
//     }

// }
export const getProducts = createAsyncThunk(`products/get`,async()=>{
    const data=await fetch(`https://fakestoreapi.com/products`);
             const result = await data.json();  
             return result;
})
