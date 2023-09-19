import { createSlice ,PayloadAction } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";



export interface IArrBasket {
    id?:number,
    count?:number,
    img:string,
    title:string,
    dougth?:boolean,
    size?:number,
    price:number
}

interface IinitialState{
    stateMenuBtn:boolean,
    stateBasketBtn:boolean,
    stateBasketMiniBtn:boolean,
    ////////////////////
    arrBasket:IArrBasket[],
    totalCount:number,
    totalPrice:number,
    /////////////////////
    stateInputValue:string,
    stateSortValue:string,
    /////////////////////
    //statePizzaPagination:number,
}

const initialState:IinitialState={
    stateMenuBtn:false,
    stateBasketBtn:false,
    stateBasketMiniBtn:false,
    ////////////////////
    arrBasket:[],
    totalCount:0,
    totalPrice:0,
    /////////////
    stateInputValue:'',
    stateSortValue:'найпопулярніші',
    ///////////////////////////
    
}


const menuToolkit = createSlice({
    name:'menuToolkit',

    initialState,
    reducers:{
        changeStateMenuBtn(state){
            state.stateMenuBtn = !state.stateMenuBtn
        },

        changeStateBasketBtn(state){
            state.stateBasketBtn = !state.stateBasketBtn
            console.log(state.stateBasketBtn)
        },
        changeStateBasketMiniBtn(state,action){
            state.stateBasketMiniBtn = action.payload
        },
        addToArrBasket(state,action:PayloadAction<IArrBasket>){

            const findItem = state.arrBasket.find((obj)=>obj.title===action.payload.title 
            && obj.dougth===action.payload.dougth && obj.size === action.payload.size)

            if(findItem){
                if(findItem.count){
                findItem.count++
                }
                state.totalCount++
                state.totalPrice=state.totalPrice+action.payload.price
            }else{
                state.arrBasket.push({...action.payload, count:1})
                state.totalCount++
                state.totalPrice=state.totalPrice+action.payload.price
            }
            
        },
        removeFromBasket(state,action:PayloadAction<IArrBasket>){
            const findItem = state.arrBasket.find((obj)=>obj.id === action.payload.id
            && obj.dougth===action.payload.dougth && obj.size === action.payload.size)
            if(findItem){
                if(findItem.count){
                    findItem.count--
                    }
                state.totalCount--
                state.totalPrice = state.totalPrice - action.payload.price

                if(findItem.count == 0){
                    
                    const index = state.arrBasket.indexOf(action.payload);
                    console.log(index); 
                    state.arrBasket.splice(index, 1);
                    
                }
            }

        },
        clearBasket(state){
            state.arrBasket=[]
            state.totalCount=0
            state.totalPrice=0

        },

        changeStateForSearch(state,action){
            state.stateInputValue=action.payload
            
        },
        changeStateForSort(state,action){
            state.stateSortValue=action.payload
            
        }
        

    }
})

export default menuToolkit.reducer

export const {changeStateMenuBtn,changeStateBasketBtn,
            changeStateBasketMiniBtn,addToArrBasket,
            removeFromBasket,clearBasket,
            changeStateForSearch,changeStateForSort} = menuToolkit.actions