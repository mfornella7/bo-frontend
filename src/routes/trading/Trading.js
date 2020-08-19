import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import StockChart           from '../../components/Chart';
import Panel                from '../../components/Panel';
import Options              from '../../components/Options';

import Img_Montanha         from '../../assets/img/graphics/montanha.png';
import Img_Linha            from '../../assets/img/graphics/linha.png';
import Img_Vela             from '../../assets/img/graphics/vela.png';
import Img_Barra            from '../../assets/img/graphics/barra.png';

import { updateChartType } from '../../store/reducers/option';
import { updateTimePeriod } from '../../store/reducers/option';

import './Trading.scss';

class Trading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTypeDropdown: false,
      showPeriodDropdown: false
    };
    this.pageClick = this.pageClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.pageClick, false);
  }
  
  pageClick(e) {
    if (typeof e.target.className === 'string' && e.target.className.indexOf('dropdown__text') >= 0) return;

    this.setState({ 
      showTypeDropdown: false,
      showPeriodDropdown: false
    });
  }

  onShowTypeofGraphic() {
    this.setState({ 
      showTypeDropdown: true,
      showPeriodDropdown: false,
    });
  }

  onShowTimePeriod() {
    this.setState({ 
      showTypeDropdown: false,
      showPeriodDropdown: true,
    });
  }

  onChangeChartType(e, type) {
    this.setState({ 
      showTypeDropdown: false,
      showPeriodDropdown: false
    });
    this.props.updateChartType({
      chartType: type
    });
  }

  onTimePeriodChange(e, period) {
    this.setState({ 
      showTypeDropdown: false,
      showPeriodDropdown: false
    });
    this.props.updateTimePeriod({
      timePeriod: period
    });
  }
  
  getTimePeriod() {
    switch (this.props.timePeriod) {
      case 0: return '5s';
      case 1: return '15s';
      case 2: return '30s';
      case 3: return '1m';
      case 4: return '5m';
      case 5: return '15m';
      case 6: return '30m';
      case 7: return '1h';
      case 8: return '3h';
      case 9: return '1d';
      default: return '30d';
    }
  }

  render() {
    return (
        <div className="Trading">
          <Panel/>
          <div className="chart__style">
            <div className="custom__container">
              <div className="info__container">
                <div className="info__block">
                  <div className="avatar">
                  </div>
                  <div className="info__detail">
                    <div className="discription">TRADER OPERATOR</div>
                    <div className="trader__name">JOHN DOE</div>
                  </div>
                  <div className="info__but">Info</div>
                </div>
                <div className="detail__content">
                  <div className="detail__item">
                    <div className="value">$0.00</div>
                    <div className="discription">Total investment</div>
                  </div>
                  <div className="detail__item">
                    <div className="value">$0.00</div>
                    <div className="discription">Expected income</div>
                  </div>
                  <div className="detail__item">
                    <div className="value">00:00</div>
                    <div className="discription">Time remaining</div>
                  </div>
                </div>
              </div>
              <div className="mini__setting">
                <div className="mini__option">
                  <div className="rsi__text">RS1(14)</div>
                  <span className="iconify" data-icon="ri:settings-5-fill"></span>
                  <span className="iconify" data-icon="mdi:close-thick"></span>
                </div>
                <div className="mini__button" onClick={() => this.onShowTypeofGraphic()}>
                  <span className="iconify" data-icon="carbon:chart-candlestick"></span>
                </div>
                {this.state.showTypeDropdown?
                  <div className="graphic__type__dropdown">
                    <div className="title">Type of Graphic</div>
                    <div className="border"></div>
                    <div className="dropdown__item" onClick={(e) => this.onChangeChartType(e, 0)}>
                      <div className="image">
                        <img src={Img_Montanha} alt=""></img>
                      </div>
                      <div className="dropdown__text">Montanha</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onChangeChartType(e, 1)}>
                      <div className="image">
                        <img src={Img_Linha} alt=""></img>
                      </div>
                      <div className="dropdown__text">Linha</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onChangeChartType(e, 2)}>
                      <div className="image">
                        <img src={Img_Vela} alt=""></img>
                      </div>
                      <div className="dropdown__text">Vela</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onChangeChartType(e, 3)}>
                      <div className="image">
                        <img src={Img_Barra} alt=""></img>
                      </div>
                      <div className="dropdown__text">Barra</div>
                    </div>
                  </div>:<div/>}
                <div className="mini__button" onClick={() => this.onShowTimePeriod()}>
                  <div className="text">{this.getTimePeriod()}</div>
                </div>
                {this.state.showPeriodDropdown?
                  <div className="time__period__dropwdown">
                    <div className="title">Time Period</div>
                    <div className="border"></div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 0)}>
                      <div className="dropdown__text">5 segundos</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 1)}>
                      <div className="dropdown__text">15 segundos</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 2)}>
                      <div className="dropdown__text">30 segundos</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 3)}>
                      <div className="dropdown__text">1 minuto</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 4)}>
                      <div className="dropdown__text">5 minuto</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 5)}>
                      <div className="dropdown__text">15 minuto</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 6)}>
                      <div className="dropdown__text">30 minuto</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 7)}>
                      <div className="dropdown__text">1 hora</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 8)}>
                      <div className="dropdown__text">3 hora</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 9)}>
                      <div className="dropdown__text">1 dia</div>
                    </div>
                    <div className="dropdown__item" onClick={(e) => this.onTimePeriodChange(e, 10)}>
                      <div className="dropdown__text">30 dia</div>
                    </div>
                  </div>:<div/>}
                <div className="period__block">
                  <div className={this.props.timePeriod === 10?"period__item first active":"period__item first"}>30d</div>
                  <div className={this.props.timePeriod === 9?"period__item active":"period__item"}>1d</div>
                  <div className={this.props.timePeriod === 8?"period__item active":"period__item"}>3h</div>
                  <div className={this.props.timePeriod === 6?"period__item active":"period__item"}>30m</div>
                  <div className={this.props.timePeriod === 5?"period__item active":"period__item"}>15m</div>
                  <div className={this.props.timePeriod === 4?"period__item active":"period__item"}>5m</div>
                  <div className="period__item last">2m</div>
                </div>
              </div>
            </div>
            <StockChart/>
          </div>
          <div className="back__world">
            <div className="inner_back"></div>
          </div>
          <Options/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  timePeriod: state.option.timePeriod
});

const mapDispatchToProps = {
  updateChartType: updateChartType,
  updateTimePeriod: updateTimePeriod
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Trading);