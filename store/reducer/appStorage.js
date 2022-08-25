import { SIGNUP_USER, FORCEUSERIN, COINS,WALLETASSET } from "../action/appStorage";


const initialState = {
    token: "",
    expiresIn: "",
    user: {
        ktc:'',
        BPT:'',
        TX:'',
        RPT:'',
        BVW:'',
        cardStatus:true,
        cardInfo:{

        }
    },
    coins: [],
    watchList: [],
    currentWalletCoin:{
        symbol:'btc',
        name:'bitcoin',
        amount:900
    },
    url:''
}


export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            if (action.payload) {
                
            }
            break;
        case FORCEUSERIN:
            if (action.payload) {
                
            }
            break;

        case COINS:
            if (action.payload) {
                return {
                    ...state,
                    coins:[...action.payload]
                }
            }
            break;
        case WALLETASSET:
            if (action.payload) {
                return {
                    ...state,
                    currentWalletCoin:action.payload
                }
            }
            break;


        default:
            return state
            break;
    }

}
