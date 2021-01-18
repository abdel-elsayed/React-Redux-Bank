import React from 'react'
import { connect } from 'react-redux';
import {DEBIT} from '../actions'
import '../App.css'

let customAmount = 0;

const Debits = ({transactions, balance, debit}) => {

    const handleChange = (e) => {
        customAmount = e.target.value;
        console.log("transaction type: ", transactions.type)
    }

    return (
        <>
            <h1 className="header">DEBITS</h1>
            <div className="card">
                <h2 className="balance">Balance: ${balance}</h2>
                    <input type="text" name="debitAmount" onChange={handleChange} placeholder="Enter Debit Amount..." ></input>
                    <button type="submit" className="button1" onClick={() => debit({type: DEBIT})}>Debit</button>
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
                            transaction.type === "Deposit" ?
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
                </table> :  <div className="not-found">No Debit transactions were found.</div>
              }
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    balance: state.balance,
    transactions : state.transactions, 
  });

const mapDispatchToProps = (dispatch) => { 
   return {
      debit: () => dispatch({ type:DEBIT, payload:{customAmount}}),
      }
  }
  
export default connect (mapStateToProps,mapDispatchToProps)(Debits);