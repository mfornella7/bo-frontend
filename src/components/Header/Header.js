import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import './Header.scss';

import Img_User from '../../assets/img/user.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
        };
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    goCashier() {
        this.props.history.push("/cashier");
    }

    goTrading() {
        this.props.history.push("/trading");
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            if (this.state.isShow)
                this.setState({
                    isShow: false,
                })
        }
    }

    goSettingPage() {
        this.props.history.push("/setting");
    }

    render() {
        const { location, currentUser } = this.props;
        if (currentUser && location.pathname === '/trading')
            return (
                <div className="Header">
                    <div className="header__left">
                        <div className="nav__icon">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className="title__text">Logo</div>
                        <div className="make__center">
                            <div className="add__button">
                                <i className="fa fa-plus fa-1" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="make__center">
                            <div className="asset__cotainer">
                                <div className="asset__selected">
                                    <i className="fa fa-angle-down asset__icon" aria-hidden="true"></i>
                                    <div className="asset__images">
                                        <div className="image1"></div>
                                        <div className="image2"></div>
                                    </div>
                                    <div className="asset__type">
                                        <div className="currency">BTC/USD</div>
                                        <div className="binary">Binary</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="make__center">
                            <div className="demo__account">
                                <div className="account__block" onClick={() => this.goSettingPage()}>
                                    <div className="account__type">Demo</div>
                                    <div className="account__balance">
                                        ${this.props.balance} 
                                        <i className="fa fa-caret-down icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="make__center">
                            <div className="deposit__button" onClick={()=>this.goCashier()}>
                                Deposit          
                            </div>
                        </div>
                        <div className="make__center">
                            <div className="user__avatar" onClick={() => {
                                this.setState({ isShow: true })
                            }}>
                                <div className="avatar">
                                    M
                                </div>
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    {this.state.isShow?
                        <div className="panel" ref={this.wrapperRef}>
                            <div className="user">
                                <img className="user-img" src={Img_User} alt=""/>
                                <div className="user__detail">
                                    <div className="name">João José</div>
                                    <div className="email">joaojose@gmail.com</div>
                                </div>
                                <div className="close" onClick={() => {
                                    this.setState({isShow: false})
                                }}>
                                    <i className="fa fa-times" aria-hidden="true"/>
                                </div>
                            </div>
                            <div className="balance-row">
                                <div className="br-text">Conta real</div>
                                <div className="bal-text">USDT 145.10</div>
                            </div>
                            <div className="item-row">
                                <i class="far fa-user-circle"></i>
                                <div className="item-text">Resumo da Conta</div>
                            </div>
                            <div className="item-row">
                                <i class="far fa-user"></i>
                                <div className="item-text">Dados pessoais</div>
                            </div>
                            <div className="item-row">
                                <i class="fas fa-check-circle"></i>
                                <div className="item-text">Verificação</div>
                            </div>
                            <div className="item-row">
                                <i class="fas fa-shield-alt"></i>
                                <div className="item-text">Segurança</div>
                            </div>
                            <div className="item-row">
                                <i class="fas fa-dollar-sign"></i>
                                <div className="item-text">Retirada de fundos</div>
                            </div>
                            <div className="item-row">
                                <i class="fas fa-search-dollar"></i>
                                <div className="item-text">Histórico de Transações</div>
                            </div>
                            <div className="item-row">
                                <i class="fas fa-history"></i>
                                <div className="item-text">Histórico de Trading</div>
                            </div>
                        </div>:(null)}
                </div>
            )
        else if (currentUser /*&& location.pathname === '/cashier'*/)
        return (
            <div className="Header dark">
                <div className="header__left">
                    <div className="nav__icon">
                        <i className="fa fa-bars dark" aria-hidden="true"></i>
                    </div>
                    <div className="title__text dark">Logo</div>
                </div>
                <div className="header__right">
                    <div className="make__center">
                        <div className="demo__account">
                            <div className="account__block">
                                <div className="account__type dark">Demo</div>
                                <div className="account__balance dark">
                                    ${this.props.balance} 
                                    <i className="fa fa-caret-down icon dark" aria-hidden="true"></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="make__center">
                        <div className="deposit__button" onClick={()=>this.goTrading()}>
                            Trading          
                        </div>
                    </div>
                    <div className="make__center">
                        <div className="user__avatar">
                            <div className="avatar">
                                M
                            </div>
                            <i className="fa fa-caret-down dark" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="Header white">
                <div className="header__left">
                    <div className="nav__icon black">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div className="title__text black">Binary Option</div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    currentUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,
    balance: state.option.balance
});

const mapDispatchToProps = {
    
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);