import React, { Component } from 'react';
import './Setting.scss';
import Img_Tether from '../../assets/img/extra/tether.png';
import Img_BTC_USDT from '../../assets/img/extra/btc_usdt.png';
import Img_LTC_USDT from '../../assets/img/extra/ltc_usdt.png';
import Img_DASH_USDT from '../../assets/img/extra/dash_usdt.png';
import Img_ETH_USDT from '../../assets/img/extra/eth_usdt.png';
import Img_Chart from '../../assets/img/extra/chart.png';
import Img_App from '../../assets/img/extra/app.png';
import Img_QR from '../../assets/img/QR.png';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 3,
            tabs:[
                "Resumo da Conta",
                "Dados pessoais",
                "Verificação",
                "Segurança",
                "Retirada de fundos",
                "Histórico de Transações",
                "Histórico de Trading",
            ],
            icons:[
                "fa-user-circle",
                "fa-user",
                "fa-check-circle",
                "fa-shield-alt",
                "fa-dollar-sign",
                "fa-search-dollar",
                "fa-history",
            ]
        }
    }
    renderTab1() {
        if (this.state.tabId !== 0) return (null);
        return (
            <div className="tab1">
                <div className="title-row">
                    <div className="text">Resumo | USDT 145.10</div>
                    <div className="dis">
                        <div className="row">Valor estimado</div>
                        <div className="row">em cima</div>
                    </div>
                </div>
                <div className="ctrl-row">
                    <div className="green-button">Deposito</div>
                    <div className="orange-button">Sacar</div>
                    <img src={Img_Tether} alt="/"/>
                    <div className="dis">
                        <div className="usdt">USDT 145.10</div>
                        <div className="text">Saldo USDT</div>
                    </div>
                </div>
                <div className="description-row">
                    <div className="item">
                        <div className="usdt">USDT 50.00</div>
                        <div className="text">Investimento total</div>
                    </div>
                    <div className="item">
                        <div className="usdt">USDT 50.00</div>
                        <div className="text">Balance total</div>
                    </div>
                    <div className="item">
                        <div className="usdt green">0%</div>
                        <div className="text">Lucro Bruto Total</div>
                    </div>
                    <div className="mid-text">0 Posições</div>
                </div>
                <div className="seperator"></div>
                <div className="small-text">Você não tem posições abertas. Explore os principais ativos e começe a melhor exeperiência de negociação da sua vida.</div>
                <div className="medium-size">Ativos Principais</div>
                <div className="row-list">
                    <div className="list">
                        <div className="direction left">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </div>
                        <div className="crypto">
                            <div className="detail">
                                <img className="crypto-img" src={Img_BTC_USDT} alt=""/>
                                <div className="type">
                                    <div className="name">BTC/USDT</div>
                                    <div className="small">BTC/USDT</div>
                                </div>
                            </div>
                            <div className="chart-row">
                                <img src={Img_Chart} alt=""/>
                                <div className="status">
                                    <div className="plus">+0.74%</div>
                                    <div className="dis">Por semana</div>
                                </div>
                            </div>
                        </div>
                        <div className="crypto">
                            <div className="detail">
                                <img className="crypto-img" src={Img_LTC_USDT} alt=""/>
                                <div className="type">
                                    <div className="name">LTC/USDT</div>
                                    <div className="small">LTC/USDT</div>
                                </div>
                            </div>
                            <div className="chart-row">
                                <img src={Img_Chart} alt=""/>
                                <div className="status">
                                    <div className="plus">+0.74%</div>
                                    <div className="dis">Por semana</div>
                                </div>
                            </div>
                        </div>
                        <div className="crypto">
                            <div className="detail">
                                <img className="crypto-img" src={Img_DASH_USDT} alt=""/>
                                <div className="type">
                                    <div className="name">DASH/USDT</div>
                                    <div className="small">DASH/USDT</div>
                                </div>
                            </div>
                            <div className="chart-row">
                                <img src={Img_Chart} alt=""/>
                                <div className="status">
                                    <div className="plus">+0.74%</div>
                                    <div className="dis">Por semana</div>
                                </div>
                            </div>
                        </div>
                        <div className="crypto">
                            <div className="detail">
                                <img className="crypto-img" src={Img_ETH_USDT} alt=""/>
                                <div className="type">
                                    <div className="name">ETH/USDT</div>
                                    <div className="small">ETH/USDT</div>
                                </div>
                            </div>
                            <div className="chart-row">
                                <img src={Img_Chart} alt=""/>
                                <div className="status">
                                    <div className="plus">+0.74%</div>
                                    <div className="dis">Por semana</div>
                                </div>
                            </div>
                        </div>
                        <div className="direction right">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    renderTab3() {
        if (this.state.tabId !== 3) return (null);
        return (
            <div className="tab1">
                <div className="title-row">
                    <div className="text">Proteção e Segurança</div>
                </div>
                <div className="medium-size">Ativos Principais</div>
                <div className="block">
                    <div className="number">
                        <div className="circle">1</div>
                        <div className="line1"/>
                    </div>
                    <div className="content">
                        <div className="c-title">Install Google Authenticator</div>
                        <div className="c-description">
                            Follow the instructions below to set up 2FA<br/>
                            and unlock a basic account:
                        </div>
                        <img src={Img_App} alt=""/>
                    </div>
                </div>
                <div className="block">
                    <div className="number">
                        <div className="circle">2</div>
                    </div>
                    <div className="content">
                        <div className="c-title">Back up your secret code</div>
                        <div className="c-description second">
                            Please write down or print a copy of the 16-digit<br/>
                            secret code and put it in a safe place 
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="number">
                        <div className="circle">3</div>
                        <div className="line2"/>
                    </div>
                    <div className="content">
                        <div className="c-title">Scan QR Code with Google Authenticator</div>
                        <div className="c-description second">
                            Scan the QR code or enter the private key<br/>
                            with Google Authenticator app. 
                        </div>
                    </div>
                </div>
                <div className="qr-row">
                    <img className="qr-img" src={Img_QR} alt=""/>
                    <div className="code-input">
                        <div className="text">AUTHENTICATOR SECRET CODE</div>
                        <div className="input-content">
                            <input type="text"/>
                            <div className="copy">
                                <i className="far fa-copy"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seperator second"/>
                <div className="medium-size">Alterar sua senha</div>
                <div className="orange-text">Alterar sua senha</div>
                <div className="yellow-button">Salvar e continuar</div>
            </div>
        );
    }
    renderTab6() {
        if (this.state.tabId !== 6) return (null);
        return (
            <div className="tab1">
                <div className="title-row">
                    <div className="text">Histórico de Trading</div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="Setting">
                <div className="panel">
                    {this.state.tabs.map((tab, index) => {
                        let icon = "fas " + this.state.icons[index];
                        console.log(icon)
                        return (
                            <div className={this.state.tabId === index?"item-row selected":"item-row"}
                                onClick={() => {
                                    this.setState({ tabId: index})
                                }}
                                key={index}
                            >
                                <i className={icon}></i>
                                <div className="item-text">{tab}</div>
                            </div>
                        )
                    })}
                </div>
                {this.renderTab1()}
                {this.renderTab3()}
                {this.renderTab6()}
            </div>
        )
    }
}

export default Setting;