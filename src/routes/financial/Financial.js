import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import './Financial.scss';

import Img_Tether from '../../assets/img/extra/tether.png';

class Financial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            tabs:[
                "Dashboard",
                "Statistics",
                "Financial",
            ],
            tabId: 2,
        }
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            if (this.state.isShow)
                this.setState({
                    isShow: false,
                })
        }
    }
    
    renderPanel() {
        return (
            <div className="panel-mobile">
                <div className="tab" 
                onClick={() => {
                    this.setState({isShow: true})
                }}>{this.state.tabs[this.state.tabId]}</div>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                {this.state.isShow?
                    <div className="dropdown" ref={this.wrapperRef}>
                        {this.state.tabs.map((tab, index) => {
                            return (
                                <div className="text" key={index} onClick={() => {
                                    if (index === 0) {
                                        this.props.history.push('/dashboard')
                                    }
                                    this.setState({
                                        tabId: index,
                                        isShow: false,
                                    })
                                }}>
                                    {tab}
                                </div>
                            )
                        })}
                    </div>:(null)}
            </div>
        )
    }
    render() {
        return (
            <div className="Financial">
                {this.renderPanel()}
                <div className="back">
                    <div className="balance-detail">
                        <div className="b-text">Balance</div>
                        <div className="balance">
                            <img src={Img_Tether} className="tether" alt=""/>
                            <div className="value">
                                0.0000000
                                <div className="a-text">Available Balance</div>
                            </div>
                            <div className="usdt">USDT</div>
                        </div>
                        <i className="fas fa-wallet"></i>
                    </div>
                </div>
                <div className="main-body">
                    <div className="content">
                        <div className="cal-block">
                            <i className="fas fa-calendar-alt"></i>
                            <div className="payment-day">
                                <div className="text">NEXT PAYMENT DAY</div>
                                <div className="date">16 - SEPTEMBER</div>
                            </div>
                        </div>
                        <div className="funds">
                            <div className="f-left">
                                <div className="title">Retirada de fundos</div>
                                <div className="dis">1 retiradas gratuitas restantes até o final do mês</div>
                                <div className="usdt-row">
                                    <img src={Img_Tether} alt=""/>
                                    <div className="usdt">USDT</div>
                                     <i className="fa fa-angle-down"></i>
                                    <div className="available">Available USDT</div>
                                    <div className="value">0.0000000</div>
                                </div>
                                <div className="dis">BTC Address</div>
                                <div className="input-row">
                                     <i className="fa fa-wallet"></i>
                                </div>
                                <div className="dis">BTC Address</div>
                                <div className="input-row">
                                     <i className="fa fa-usd"></i>
                                     <i className="fa fa-caret-down"></i>
                                </div>
                                <div className="dis">BTC Address</div>
                                <div className="input-row">
                                     <i className="fa fa-key"></i>
                                </div>
                                <div className="dis">
                                    Available Balance 
                                    <div className="bold">0 BTC</div>
                                </div>
                                <div className="dis">Transaction Fee - BTC</div>
                                <div className="dis">Amount to be sent - BTC</div>
                                <div className="widthdraw">Withdraw</div>
                            </div>
                            <div className="f-right">
                                <div className="status">
                                    <div className="subtitle">PAYMENT STATUS</div>
                                    <div className="v">V</div>
                                </div>
                                <div className="description">
                                    <div className="dis">To activate payments you must</div>
                                    <div className="texts">
                                        <div className="circle"/>
                                        <div className="t-list">
                                            <div className="text">Activate e-mail address</div>
                                            <div className="text grey">After registration, you were sent an activation e-mail.</div>
                                            <div className="text oragne">Send again</div>
                                        </div>
                                    </div>
                                    <div className="texts">
                                        <div className="circle"/>
                                        <div className="t-list">
                                            <div className="text">Have at least $10 on the balance</div>
                                            <div className="text grey">Your balance: 0.00</div>
                                        </div>
                                    </div>
                                    <div className="texts">
                                        <div className="circle"/>
                                        <div className="t-list">
                                            <div className="text oragne">Verify identity (KYC)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-history">
                            <div className="p-title">Payment History</div>
                            <div className="dropdown-row">
                                <div className="item">
                                    <div className="text">Period</div>
                                    <div className="dropdown">
                                        <div className="">17.08.2020 - 15.09.2020</div>
                                        <i className="fa fa-caret-down"/>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="text">Status</div>
                                    <div className="dropdown">
                                        <div className="">All</div>
                                        <i className="fa fa-caret-down"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table">
                            <div className="t-header">
                                <div className="cell">Coin</div>
                                <div className="cell">Date</div>
                                <div className="cell address">Address</div>
                                <div className="cell">Fee</div>
                                <div className="cell">Amount</div>
                                <div className="cell">TX</div>
                                <div className="cell">Status</div>
                            </div>
                            <div className="t-row">
                                <div className="cell">Coin</div>
                                <div className="cell">15.09.2020</div>
                                <div className="cell address">2319475788werqerASB324134</div>
                                <div className="cell">0.01</div>
                                <div className="cell">0</div>
                                <div className="cell">
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                </div>
                                <div className="cell green">Completed</div>
                            </div>
                            <div className="t-row">
                                <div className="cell">Coin</div>
                                <div className="cell">15.09.2020</div>
                                <div className="cell address">2319475788werqerASB324134</div>
                                <div className="cell">0.01</div>
                                <div className="cell">0</div>
                                <div className="cell">
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                </div>
                                <div className="cell red">Canceled</div>
                            </div>
                            <div className="t-row">
                                <div className="cell">Coin</div>
                                <div className="cell">15.09.2020</div>
                                <div className="cell address">2319475788werqerASB324134</div>
                                <div className="cell">0.01</div>
                                <div className="cell">0</div>
                                <div className="cell">
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                </div>
                                <div className="cell orange">Pending</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Financial);