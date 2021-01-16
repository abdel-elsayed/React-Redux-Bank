import React, { Component } from 'react'
import { connect } from 'react-redux';
import {DEBIT} from '../actions'

let customAmount = 0;

const Debits = ({balance, debit}) => {


    

    const handleChange = (e) => {
        customAmount = e.target.value;
        console.log("am being called yaaay: ", customAmount)
    }

    return (
        <div>
            <h1>DEBITS</h1>
            <h2>Balance: ${balance}</h2>
            
                <label>Debit Amount: </label><br />
                <input type="text" name="debitAmount" onChange={handleChange} placeholder="Enter Amount..." ></input>
                <button type="submit" onClick={() => debit({type: DEBIT})}>Submit</button>
        </div>
    )
}


const mapStateToProps = state => ({
    balance: state.balance 
  });

const mapDispatchToProps = (dispatch) => {
    // the prop that you want this component to have access to
    return {
      debit: () => dispatch({ type:DEBIT, payload:{customAmount}}),
      }
  }
  
export default connect (mapStateToProps,mapDispatchToProps)(Debits);