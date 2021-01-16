import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Debits extends Component {
    render() {
        return (
            <div>
                <form >
                <label>Debit Amount: </label><br />
                <input type="text" name="debitAmount" placeholder="Enter Amount..." ></input>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}



export default Debits