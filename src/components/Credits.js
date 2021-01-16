import React, { Component } from 'react'
import { connect } from 'react-redux';
import {CREDIT} from '../actions'

let customAmount = 0;
    
const Credit = ({balance, credit}) => {


    

    const handleChange = (e) => {
        customAmount = e.target.value;
        console.log("BALANCE FROM CREDIT : ", balance)
    }

    return (
        <div>
            <h1>CREDITS</h1>
            <h2>Balance: {balance}</h2>
            
                <label>Credit Amount: </label><br />
                <input type="text" name="debitAmount" onChange={handleChange} placeholder="Enter Amount..." ></input>
                <button type="submit" onClick={() => credit({type: CREDIT})}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => ({
    balance: state.balance 
  });
  
const mapDispatchToProps = (dispatch, ownProps) => {
    const {balance} = ownProps
    // the prop that you want this component to have access to
    return {
      credit: () => dispatch({ type:CREDIT, payload:{customAmount}}),
      }
  }
  
export default connect (mapStateToProps,mapDispatchToProps)(Credit);