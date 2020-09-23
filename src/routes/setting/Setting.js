import React, { Component } from 'react';
import './Setting.scss';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 0,
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
            </div>
        )
    }
    render() {
        return (
            <div className="Setting">
                <div className="panel">
                    <div className="item-row">
                        <i className="far fa-user-circle"></i>
                        <div className="item-text">Resumo da Conta</div>
                    </div>
                    <div className="item-row">
                        <i className="far fa-user"></i>
                        <div className="item-text">Dados pessoais</div>
                    </div>
                    <div className="item-row">
                        <i className="fas fa-check-circle"></i>
                        <div className="item-text">Verificação</div>
                    </div>
                    <div className="item-row">
                        <i className="fas fa-shield-alt"></i>
                        <div className="item-text">Segurança</div>
                    </div>
                    <div className="item-row">
                        <i className="fas fa-dollar-sign"></i>
                        <div className="item-text">Retirada de fundos</div>
                    </div>
                    <div className="item-row">
                        <i className="fas fa-search-dollar"></i>
                        <div className="item-text">Histórico de Transações</div>
                    </div>
                    <div className="item-row">
                        <i className="fas fa-history"></i>
                        <div className="item-text">Histórico de Trading</div>
                    </div>
                </div>
                {this.renderTab1()}
            </div>
        )
    }
}

export default Setting;