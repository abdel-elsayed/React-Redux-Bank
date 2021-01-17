//importing action names 
import { DEBIT, CREDIT } from './actions'  
import Debits from './components/Debits';


//reducer
function reducer(state, action){
    let today = new Date();

    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let dateTime = date+' '+time;
    switch (action.type) {
        case DEBIT:
            return{ 
                ...state,
                balance: state.balance + parseInt(action.payload.customAmount),
                transactions: [
                    {
                        
                      date: dateTime,
                      type: 'Deposit',
                      amount: parseInt(action.payload.customAmount),
                      balance: state.balance + parseInt(action.payload.customAmount),
                      
                    },
                ...state.transactions,
                ],
            };

        case CREDIT:
            return{ 
                ...state,
                balance: state.balance - parseInt(action.payload.customAmount),
                transactions: [
                    {
                        
                      date: dateTime,
                      type: 'Withdraw',
                      amount: parseInt(action.payload.customAmount),
                      balance: state.balance - parseInt(action.payload.customAmount),
                      
                    },
                ...state.transactions,
                ],
            };

        default:
            return state;
    }
   
  }


  export default reducer