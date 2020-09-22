import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import Img_Down from '../../assets/img/down.png';
import Img_Up   from '../../assets/img/up.png';

import { updateChartSelection } from '../../store/reducers/option';
import { placeBet } from '../../store/reducers/option';

import './Options.scss';

class Options extends Component {
    componentDidMount() {
        this.props.placeBet({
            id: this.props.currentUser._id,
            body: {
                amount: 0,
            }
        })
    }
    onPlaceBet(type) {
        this.props.placeBet({
            id: this.props.currentUser._id,
            body: {
                amount: 100,
            }
        })
    }
    render() {
        return (
            <div className="Options">
                <div className="option__container">
                    <div className="option__block">
                        <div className="type">Amount</div>
                        <div className="value">$1</div>
                    </div>
                    <div className="option__ctrl">
                        <i className="fa fa-plus fa-1 border_bottom" aria-hidden="true"></i>
                        <i className="fa fa-minus fa-1" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="option__container">
                    <div className="option__block">
                        <div className="type">Time</div>
                        <div className="value">
                            <span className="iconify" data-icon="mdi:clock-time-ten-outline"></span>
                            14:27
                        </div>
                    </div>
                    <div className="option__ctrl">
                        <i className="fa fa-plus fa-1 border_bottom" aria-hidden="true"></i>
                        <i className="fa fa-minus fa-1" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="benefit__text">
                    Income
                </div>
                <div className="benefit__value">
                    $1.83
                </div>
                <div className="benefit__percent">
                    +83%
                </div>
                <div className="majority__opinion">Majority opinion</div>
                <div className="red__bar">
                    <div className="green__bar" style={{width: 43 + '%'}}></div>
                </div>
                <div className="progress">
                    <div className="green__text">43%</div>
                    <div className="red__text">57%</div>
                </div>
                <div className="call__button"
                    onMouseEnter={() => this.props.updateChartSelection({
                        chartSelection: 1
                    })}
                    onMouseLeave={() => this.props.updateChartSelection({
                        chartSelection: 0
                    })}
                    onClick={() => this.onPlaceBet(0)}
                >
                    <div className="triangle"></div>
                    <div className="content">
                        <img src={Img_Up} alt=""/>
                        <div className="up__text">UP</div>
                    </div>
                </div>
                <div className="put__button"
                    onMouseEnter={() => this.props.updateChartSelection({
                        chartSelection: 2
                    })}
                    onMouseLeave={() => this.props.updateChartSelection({
                        chartSelection: 0
                    })}
                    onClick={() => this.onPlaceBet(1)}
                >
                    <div className="triangle red"></div>
                    <div className="content">
                        <div className="down__text">DOWN</div>
                        <img src={Img_Down} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
    updateChartSelection: updateChartSelection,
    placeBet: placeBet
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Options);