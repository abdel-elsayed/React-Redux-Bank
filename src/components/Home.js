import React, { Component } from 'react';
import { connect } from "react-redux"
import {CLEAR_CART, GET_BALANCE, GET_TOTALS} from "../actions"



const Home = ({ transactions , balance , dispatch}) => {
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
        <>
          <h1 className="header">Bank of React-Redux</h1>
          <img src="logo.png" className="App-logo" alt ="logo" />
            <div className="card">
                <h2 className="balance">Balance: ${balance}</h2>
            </div>
          <div>
              { transactions.length  ? 
                <table className="styled-table" >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.date}>
                                <td>{transaction.date}</td>
                                <td>{transaction.type}</td>
                                <td>
                                    {`${
                                        transaction.type === 'Deposit'
                                        ? `+${transaction.amount.toFixed(2)}`
                                        : transaction.type === 'Withdraw'
                                        ? `-${transaction.amount.toFixed(2)}`
                                        : transaction.amount
                                    }`}
                                </td>
                                <td>
                                    {`${transaction.balance.toFixed(2)}`}
                                </td>
                            </tr>: ""))}
                    </tbody>
                </table> :  <div>No transactions were found.</div>
              }
            </div>
      
        </>
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