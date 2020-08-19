import React, { Component } from 'react';

import Img_Tour from '../../assets/img/images.jpeg';
import Img_Brazil_Flag from '../../assets/img/brazil-flag.png';
import Img_User from '../../assets/img/user.png';
import './Panel.scss';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavHistory: false,
      showNavTournament: false,
      showGraphic: false,
      showTraders: false,
      showFAQ: false,
      history: [
        { status: 1, price1: "$1,30", price2: "$996.00"},
        { status: 0, price1: "$0,00", price2: "$1.00"},
        { status: 1, price1: "$1,30", price2: "$996.00"},
        { status: 0, price1: "$0,00", price2: "$1.00"},
        { status: 1, price1: "$1,30", price2: "$996.00"},
        { status: 0, price1: "$0,00", price2: "$1.00"},
        { status: 1, price1: "$1,30", price2: "$996.00"},
        { status: 0, price1: "$0,00", price2: "$1.00"},
      ],
      traders: [
        {name: 'John Doe.', price: '$1,000,00'},
        {name: 'John Doe.', price: '$4,000,00'},
        {name: 'John Doe.', price: '$2,000,00'},
        {name: 'John Doe.', price: '$400,00'},
        {name: 'John Doe.', price: '$200,00'},
        {name: 'John Doe.', price: '$1,000,00'},
        {name: 'John Doe.', price: '$1,000,00'},
      ],
      traderID: 0,
    }
  }

  renderHistory() {
    let index = 0;
    return (
        <div className="nav__setting">
          <div className="ns__header">
            <div className="title">History</div>
            <div
              onClick={() => {
                this.setState({showNavHistory: false})
              }}
            >
              <span 
                className="iconify close" 
                data-icon="mdi:close-thick" 
              ></span>
            </div>
          </div>
          {this.state.history.map(item => {
            index ++;
            return (
              <div className="history-item" key={index}>
                <div className="hi-left">
                  <div className="img-content">
                    <div className="image1"></div>
                    <div className="image2"></div>
                  </div>
                  <div className="hil-content">
                    <div className="hc-content">Bitcoin 30%</div>
                    <div className="hc-detail">
                      <div className="status">
                        {item.status?
                          <span className="iconify" data-icon="mdi:arrow-up-bold"></span>:
                          <span className="iconify red" data-icon="mdi:arrow-down-bold"></span>
                        }
                      </div>
                      <div className="time">
                        <div>
                          18:03:00 
                          <span className="iconify" data-icon="codicon:debug-stackframe-dot"></span>
                          04 Aug
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hi-right">
                  <div className="price green">{item.price1}</div>
                  <div className="tprice">{item.price2}</div>
                </div>
              </div>)
          })}
        </div>
    )
  }

  renderTournament() {
    return (
        <div className="nav__setting">
          <div className="ns__header">
            <div className="title">Tournament</div>
            <div onClick={() => {this.setState({showNavTournament: false})}}>
              <span 
                className="iconify close" 
                data-icon="mdi:close-thick" 
              ></span>
            </div>
          </div>
          <div className="tournament-item">
            <img src={Img_Tour} className="back" alt=""/>
            <div className="ti-text">Daily Free</div>
            <div className="ti-time">Para o inicio 11h 03m 43s</div>
            <div className="ti-content">
              <div className="tic-detail">
                <div className="tic-text">Fundo de premios</div>
                <div className="price">$300,00</div>
              </div>
              <div className="button">Mails detalhes</div>
            </div>
          </div>
          <div className="tournament-item">
            <img src={Img_Tour} className="back" alt=""/>
            <div className="ti-text">Daily Free</div>
            <div className="ti-time">Para o inicio 11h 03m 43s</div>
            <div className="ti-content">
              <div className="tic-detail">
                <div className="tic-text">Fundo de premios</div>
                <div className="price">$300,00</div>
              </div>
              <div className="button">Mails detalhes</div>
            </div>
          </div>
          <div className="tournament-item">
            <img src={Img_Tour} className="back" alt=""/>
            <div className="ti-text">Daily Free</div>
            <div className="ti-time">Para o inicio 11h 03m 43s</div>
            <div className="ti-content">
              <div className="tic-detail">
                <div className="tic-text">Fundo de premios</div>
                <div className="price">$300,00</div>
              </div>
              <div className="button">Mails detalhes</div>
            </div>
          </div>
        </div>
    );
  }

  renderGraphic() {
    return(
      <div className="nav__setting">
        <div className="ns__header">
          <div className="title">Graphic Preferences</div>
          <div onClick={() => {this.setState({showGraphic: false})}}>
            <span 
              className="iconify close" 
              data-icon="mdi:close-thick"
            ></span>
          </div>
        </div>
        <div className="graphic_header">
          <div className="gh-text active">Indicadores</div>
          <div className="gh-sep">|</div>
          <div className="gh-text">Ferramentas</div>
        </div>
        <div className="graphic-status">Active</div>
        <div className="graphic-item">
          <div className="detail">
            <span  className="iconify trash" data-icon="ic:baseline-show-chart"/>
            <div className="text">ATR</div>
          </div>
          <span  className="iconify trash" data-icon="bx:bx-trash"/>
        </div>
        <div className="graphic-status">Available</div>
        <div className="graphic-item">
          <div className="detail">
            <span  className="iconify trash" data-icon="ic:baseline-show-chart"/>
            <div className="text">RSI</div>
          </div>
          <span  className="iconify trash" data-icon="bx:bx-trash"/>
        </div>
        <div className="graphic-item">
          <div className="detail">
            <span  className="iconify trash" data-icon="ic:baseline-show-chart"/>
            <div className="text">SAR Parabolico</div>
          </div>
          <span  className="iconify trash" data-icon="bx:bx-trash"/>
        </div>
        <div className="graphic-item">
          <div className="detail">
            <span  className="iconify trash" data-icon="ic:baseline-show-chart"/>
            <div className="text">MACD</div>
          </div>
          <span  className="iconify trash" data-icon="bx:bx-trash"/>
        </div>
      </div>
    );
  }

  renderTraders() {
    let index = -1;
    return (
        <div className="nav__traders">
          <div className="ns__header">
            <div className="title">Traders</div>
            <div onClick={() => {this.setState({showTraders: false})}}>
              <span 
                className="iconify close" 
                data-icon="mdi:close-thick"
              ></span>
            </div>
          </div>
          {this.state.traders.map(item => {
            index ++;
            let i = index;
            return (
              <div className={index === 0 ?"trader-item first":"trader-item"} key={index} onClick={() => {this.setState({traderID: i})}}>
                {this.state.traderID === i ?
                  <div className="info-detail">
                    <div className="id-content">
                      <div className="id-detail">
                        <div className="id-name">{item.name}</div>
                        <div className="id-country">
                          <img src={Img_Brazil_Flag} alt=""/>
                          <div className="country-name">Brazil</div>
                        </div>
                        <div className="reg-text">Date registered</div>
                        <div className="reg-date">27 Jul 2020</div>
                      </div>
                      <div className="id-image">
                        <img src={Img_User} alt=""/>
                      </div>
                    </div>
                    <div className="id-content">
                      <div className="week-content">
                        <div className="text">This week worldwide</div>
                        <span className="iconify question" data-icon="bi:question-circle-fill"/>
                      </div>
                      <div className="week-content">
                        <div className="text">This week's gross profile</div>
                        <span className="iconify question" data-icon="bi:question-circle-fill"/>
                      </div>
                    </div>
                    <div className="week-block">
                      <div className="wb-left">
                        <span className="iconify award" data-icon="uil:award"/>
                        <div className="award-count">1</div>
                      </div>
                      <div className="wb-right">$156,775
                      </div>
                    </div>
                    <div className="start-button">START FOLLOW</div>
                  </div>:(null)
                }                
                <div className="ti-detail">
                  <div className="image1"/>
                  <div className="image2"/>
                  <div className="name-text">{item.name}</div>
                </div>
                <div className="ti-price">{item.price}</div>
              </div>
            )
          })}
        </div>
    );
  }

  renderFAQ() {
    return (
        <div className="nav__setting">
          <div className="ns__header">
            <div className="title">FAQ</div>
            <div onClick={() => {this.setState({showFAQ: false})}}>
              <span 
                className="iconify close" 
                data-icon="mdi:close-thick"
              ></span>
            </div>
          </div>
        </div>
    );
  }

  setNavHistory() {
    this.setState({
      showNavHistory: true,
      showNavTournament: false,
      showGraphic: false,
      showTraders: false,
      showFAQ: false,
    });
  }

  setNavTournament() {
    this.setState({
      showNavHistory: false,
      showNavTournament: true,
      showGraphic: false,
      showTraders: false,
      showFAQ: false,
    });
  }

  setNavGraphic() {
    this.setState({
      showNavHistory: false,
      showNavTournament: false,
      showGraphic: true,
      showTraders: false,
      showFAQ: false,
    });
  }

  setNavTrades() {
    this.setState({
      showNavHistory: false,
      showNavTournament: false,
      showGraphic: false,
      showTraders: true,
      showFAQ: false,
    });
  }

  setNavFAQ() {
    this.setState({
      showNavHistory: false,
      showNavTournament: false,
      showGraphic: false,
      showTraders: false,
      showFAQ: true,
    });
  }

  render() {
    return (
        <div className="Panel">
          <div className="tab__container">
              <div className="tab__item" onClick={() => this.setNavHistory()}>
                <span className="iconify" data-icon="ic:outline-history"></span>
                <div className="item__text">History</div>
              </div>
              <div className="tab__item" onClick={() => this.setNavTournament()}>
                <span className="iconify" data-icon="fa:trophy"></span>
                <div className="item__text">Tournament</div>
              </div>
              <div className="tab__item" onClick={() => this.setNavGraphic()}>
                <span className="iconify" data-icon="clarity:slider-line"></span>
                <div className="item__text">Graphic Preferences</div>
              </div>
              <div className="tab__item" onClick={() => this.setNavTrades()}>
                <span className="iconify" data-icon="la:award-solid"></span>
                <div className="item__text">Traders</div>
              </div>
              <div className="tab__item" onClick={() => this.setNavFAQ()}>
                <span className="iconify" data-icon="uil:question-circle"></span>
                <div className="item__text">FAQ</div>
              </div>
          </div>
          <div className="chat">
              <span className="iconify" data-icon="fa-solid:comment-dots" data-inline="false"></span>
          </div>
          {this.state.showNavHistory && this.renderHistory()}
          {this.state.showNavTournament && this.renderTournament()}
          {this.state.showGraphic && this.renderGraphic()}
          {this.state.showTraders && this.renderTraders()}
          {this.state.showFAQ && this.renderFAQ()}
        </div>
    )
  }
}

export default Panel;