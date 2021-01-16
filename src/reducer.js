//importing action names 
import { DEBIT, CREDIT, GET_BALANCE, GET_DEBITS, GET_CREDITS, GET_TRANSACTIONS } from './actions'  
import Debits from './components/Debits';


//reducer
function reducer(state, action){
    switch (action.type) {
        case DEBIT:
            return{ ...state, balance: state.balance + parseInt(action.payload.customAmount)};

        case CREDIT:
            return{ ...state, balance: state.balance - parseInt(action.payload.customAmount)};

        case GET_BALANCE:
            console.log("GETTING BALNACE...")
            return{ ...state};

        case GET_DEBITS:
            console.log("GETTING DEBITS...")
            return{ ...state};  

        case GET_CREDITS:
            console.log("GETTING CREDITS...")
            return{ ...state};

        case GET_TRANSACTIONS:
            console.log("GETTING TRANSACTIONS...")
            return{ ...state};

        default:
            break;
    }
    return state;
  }


  export default reducer