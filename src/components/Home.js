import React, { Component } from 'react';
import { connect } from "react-redux"
import {CLEAR_CART, GET_BALANCE, GET_TOTALS} from "../actions"



const Home = ({ transactions = [], balance , dispatch}) => {
    React.useEffect(() => {
        dispatch({type: GET_BALANCE})
      })
    
    // if (transactions.length === 0) {
    //     return (
    //       <section className="cart">
    //         {/* cart header */}
    //         <header>
    //           <h2>NO TRANSACTION TO DISPLAY!!!</h2>
    //         </header>
    //       </section>
    //     );
    //   }
   
    return (
        <div>
            <h1>Balance: $ {balance}</h1>
        </div>
    )
}


const mapStateToProps = state => {
    // the prop that you want this component to have access to
    return {
      transactions : state.transactions, 
      balance: state.balance
    }
  }
export default connect (mapStateToProps)(Home);