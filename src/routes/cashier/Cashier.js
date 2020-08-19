import React, { Component } from 'react';
import Select from 'react-select';

import Img_Boleto from '../../assets/img/payment/boleto.png';
import Img_Mastercard from '../../assets/img/payment/mastercard.png';
import Img_Visa from '../../assets/img/payment/visa.png';
import Img_Elo from '../../assets/img/payment/elo.png';
import Img_Express from '../../assets/img/payment/american-express.png';
import Img_Hipercard from '../../assets/img/payment/hipercard.png';
import './Cashier.scss';

const options = [
    { value: 'brazil', label: 'Brazil'},
    { value: 'canada', label: 'Canada'},
    { value: 'usa', label: 'United States'},
    { value: 'uk', label: 'United Kingdom'},
]
class Cashier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 0,
            cards: [
                {img: Img_Boleto, text: 'Boleto'},
                {img: Img_Mastercard, text: 'Mastercard'},
                {img: Img_Visa, text: 'Visa'},
                {img: Img_Elo, text: 'Elo'},
                {img: Img_Express, text: 'American Express'},
                {img: Img_Hipercard, text: 'Hipercard'},
            ]
        }
    }
    renderTab1() {
        if(this.state.tabId !== 0) return (<div/>)
        return (
            <div className="tab">
                <div className="depoist-block">
                    <div className="title">Choose your payment method</div>
                    <Select
                        options={options}
                    />
                    <div className="payment-content">
                        {
                            this.state.cards.map(item => {
                                return (
                                    <div className="pc-item" key={item.text}>
                                        <div className="card-image">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="pc-text">{item.text}</div>
                                    </div>
                                )
                            })
                        }
                        <div className="pc-placeholder"/>
                        <div className="pc-placeholder"/>
                    </div>
                </div>
            </div>
        )
    }
    renderTab2() {
        if(this.state.tabId !== 1) return (<div/>)
        return (
            <div className="tab">
                <div className="withdraw-block">
                    <div className="wb-text">Withdraw funds only to the card or wallet that was <br/> used to credit funds to your account.</div>
                    <div className="deposit-button">DEPOSIT NOW</div>
                </div>
            </div>
        )
    }
    renderTab3() {
        if(this.state.tabId !== 2) return (<div/>)
        return (
            <div className="tab">
                <div className="transaction-block">
                    <div className="transfer">
                        <span className="iconify transfer" data-icon="cil:transfer"></span>
                    </div>
                    <div className="tb-title">No transactions yet</div>
                    <div className="tb-text">You have no committed transactions yet. <br/> Deposit funds to start trading.</div>
                    <div className="deposit-button">DEPOSIT NOW</div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="Cashier">
                <div className="cashier-header">
                    <div className="ch-content">
                        <div 
                            className={this.state.tabId === 0?"chc-item active":"chc-item"} 
                            onClick={() => { this.setState({tabId: 0}) }}
                        >
                            Deposit
                        </div>
                        <div 
                            className={this.state.tabId === 1?"chc-item active":"chc-item"} 
                            onClick={() => { this.setState({tabId: 1}) }}
                        >
                            Withdrawals of Funds
                        </div>
                        <div 
                            className={this.state.tabId === 2?"chc-item active":"chc-item"} 
                            onClick={() => { this.setState({tabId: 2}) }}
                        >
                            Transaction History
                        </div>
                        <div 
                            className={this.state.tabId === 3?"chc-item active":"chc-item"} 
                            onClick={() => { this.setState({tabId: 3}) }}
                        >
                            Account Types
                        </div>                        
                    </div>
                </div>
                {this.renderTab1()}
                {this.renderTab2()}
                {this.renderTab3()}
            </div>
        )
    }
}
export default Cashier;