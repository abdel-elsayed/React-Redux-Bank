import React, { Component } from 'react'
import { connect } from 'react-redux';
import {CREDIT} from '../actions'

let customAmount = 0;
    
const Credit = ({transactions, balance, credit}) => {

    const handleChange = (e) => {
        customAmount = e.target.value;
        console.log("BALANCE FROM CREDIT : ", balance)
    }

    return (
        <>
       <h1 className="header">CREDITS</h1>
            <div className="card">
                <h2 className="balance">Balance: ${balance}</h2>
                    <input type="text" name="creditAmount" onChange={handleChange} placeholder="Enter Credit Amount..." ></input>
                    <button type="submit" className="button1" onClick={() => credit({type: CREDIT})}>Credit</button>
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
                      transaction.type === "Withdraw" ?
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
          </table> :  <div className="not-found">No Credit transactions were found.</div>
        }
      </div>
      </>
    )
}

const mapStateToProps = state => ({
    balance: state.balance,
    transactions: state.transactions
  });
  
const mapDispatchToProps = (dispatch) => {
    return {
      credit: () => dispatch({ type:CREDIT, payload:{customAmount}}),
      }
  }
  
export default connect (mapStateToProps,mapDispatchToProps)(Credit);