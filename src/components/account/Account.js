import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INFO } from '../../constants/actions';
// import { Button } from 'react-bootstrap/Button';
import getAccountInfo from './../../API/getAccountInfo';


class AccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: "",
            name: "",
            stocks: ""
        }
        this.handleInfo = this.handleInfo.bind(this);
    }

    componentDidMount() {
        this.props.getAccountInfo();
      }

  render() {

    return ( 
     <React.Fragment>
        {/* <button onClick={this.handleInfo}>
        Получить данные
        </button> */}
        <ul>
            <li>
                Акция: 
            </li>
            <li>
                Цена:
            </li>
            <li>
                Количество:
            </li>
        </ul>
   

    </React.Fragment>
      
    );
  }
}
const mapStateToProps = state => ({
    balance: state.info.balance,
    name: state.info.name,
    stocks: state.info.stocks
});


export default connect(
    mapStateToProps,
    dispatch => ({
        getAccountInfo: data => dispatch({type: INFO , payload: data})
      })
)(AccountInfo);



















