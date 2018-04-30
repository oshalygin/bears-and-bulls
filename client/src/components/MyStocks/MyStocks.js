import React from "react"
import * as stocksActionCreators from "../../actions/stocksActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MyStocks = (props) => {
    return (
        <div>
            <h1>My Stocks</h1>
            <ul>
            {props.stocks.map(stock => (
                <li> {stock.symbol}, {stock.paid}, {stock.quantity}</li>
            ))}
            </ul>
            
        </div>
    )
}


function mapStateToProps(state) {
    return {
      stocks: state.stocks,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      stocksActions: bindActionCreators(stocksActionCreators, dispatch),
      
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyStocks);
  