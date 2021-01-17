import React, { Component } from 'react';
import { connect } from "react-redux"

const Home = ({ transactions , balance}) => {
   
    return (
        <>
          <h1 className="header">Bank of React-Redux</h1>
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
                            </tr> ))}
                    </tbody>
                </table> :  <div className="not-found">No transactions were found.</div>
              }
            </div>
      
        </>
    )
}


const mapStateToProps = state => {
    return {
      transactions : state.transactions, 
      balance: state.balance
    }
  }
export default connect (mapStateToProps)(Home);