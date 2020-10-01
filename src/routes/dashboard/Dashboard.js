import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import './Dashboard.scss';

import Img_Tether from '../../assets/img/extra/tether.png';
import Img_Income from '../../assets/img/1.png';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            tabs:[
                "Dashboard",
                "Statistics",
                "Financial",
            ],
            tabId: 0,
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
                                    if (index === 2) {
                                        this.props.history.push('/financial')
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
            <div className="Dashboard">
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
                        <div className="c-row m-row">
                            <div className="a-status">
                                <div className="text">Account Status</div>
                                <div className="detail">
                                    <img src={Img_Tether} alt=""/>
                                    <div className="d-text">Verified</div>
                                </div>
                            </div>
                            <div className="a-status">
                                <div className="text">Total Earning</div>
                                <div className="detail">
                                    <img src={Img_Tether} alt=""/>
                                    <div className="d-text">0.00000</div>
                                    <div className="d-usdt">USDT</div>
                                </div>
                            </div>
                            <div className="link-div">
                                <div className="text">Your Affiliate Link:</div>
                                <div className="link-row">
                                    <div className="l-text">https://www.site.com</div>
                                    <div className="icon">
                                        <i className="fas fa-copy"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-row">
                            <div className="block">
                                <div className="inner">
                                    <div className="title">INCOME</div>
                                    <img src={Img_Income} alt=""/>
                                    <div className="status">
                                        <div className="r-small">0%</div>
                                        <div className="percent yellow">50%</div>
                                        <div className="g-small">100%</div>
                                    </div>
                                    <div className="lastweek">
                                        <i className="fa fa-arrow-up"/>
                                        <div className="ltext">LAST WEEK</div>
                                    </div>
                                    <div className="loreum">
                                        <div className="buttons">
                                            <div className="circle t1">1</div>
                                            <div className="circle t2">2</div>
                                            <div className="circle t3">3</div>
                                            <div className="circle t4">4</div>
                                            <div className="circle t5">5</div>
                                        </div>
                                        Lorem ipsum dolor
                                    </div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Today</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Yesterday</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">This week</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Last week</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="inner">
                                    <div className="title">REGISTRATIONS</div>
                                    <img src={Img_Income} alt=""/>
                                    <div className="status">
                                        <div className="r-small">0%</div>
                                        <div className="percent green">100%</div>
                                        <div className="g-small">100%</div>
                                    </div>
                                    <div className="lastweek">
                                        <i className="fa fa-arrow-up"/>
                                        <div className="ltext">LAST WEEK</div>
                                    </div>
                                    <div className="loreum">
                                        <div className="buttons">
                                            <div className="circle t1">1</div>
                                            <div className="circle t2">2</div>
                                            <div className="circle t3">3</div>
                                            <div className="circle t4">4</div>
                                            <div className="circle t5">5</div>
                                        </div>
                                        Lorem ipsum dolor
                                    </div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Today</div>
                                    <div className="text bold">1</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Yesterday</div>
                                    <div className="text bold">0</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">This week</div>
                                    <div className="text bold">0</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Last week</div>
                                    <div className="text bold">0</div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="inner">
                                    <div className="title">DEPOSITS</div>
                                    <img src={Img_Income} alt=""/>
                                    <div className="status">
                                        <div className="r-small">0%</div>
                                        <div className="percent red">20%</div>
                                        <div className="g-small">100%</div>
                                    </div>
                                    <div className="lastweek">
                                        <i className="fa fa-arrow-up"/>
                                        <div className="ltext">LAST WEEK</div>
                                    </div>
                                    <div className="loreum">
                                        <div className="buttons">
                                            <div className="circle t1">1</div>
                                            <div className="circle t2">2</div>
                                            <div className="circle t3">3</div>
                                            <div className="circle t4">4</div>
                                            <div className="circle t5">5</div>
                                        </div>
                                        Lorem ipsum dolor
                                    </div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Today</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Yesterday</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">This week</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Last week</div>
                                    <div className="text bold">USDT 0.00</div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="inner">
                                    <div className="title">ACTIVE TRADES</div>
                                    <img src={Img_Income} alt=""/>
                                    <div className="status">
                                        <div className="r-small">0%</div>
                                        <div className="percent">0%</div>
                                        <div className="g-small">100%</div>
                                    </div>
                                    <div className="lastweek">
                                        <i className="fa fa-arrow-up"/>
                                        <div className="ltext">LAST WEEK</div>
                                    </div>
                                    <div className="loreum">
                                        <div className="buttons">
                                            <div className="circle t1">1</div>
                                            <div className="circle t2">2</div>
                                            <div className="circle t3">3</div>
                                            <div className="circle t4">4</div>
                                            <div className="circle t5">5</div>
                                        </div>
                                        Lorem ipsum dolor
                                    </div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Today</div>
                                    <div className="text">1</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Yesterday</div>
                                    <div className="text">0</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">This week</div>
                                    <div className="text">1</div>
                                </div>
                                <div className="text-row">
                                    <div className="text">Last week</div>
                                    <div className="text">0</div>
                                </div>
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
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Dashboard);