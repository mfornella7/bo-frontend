import React, { Component } from 'react';
import Chart from './Chart';
import Axios from 'axios';
import { getData } from './utils';

//const STOCK_URL = "https://cors-anywhere.herokuapp.com/https://us.market-api.kaiko.io/v1/data/trades.v1/exchanges/bfnx/spot/btc-usd/aggregations/ohlcv";


class StockChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		}
	}

    removeMilisec(s) {
        return s.substr(0, 20) + '000Z';
	}

	getStockData(url) { 
		let d = new Date();
        let timestamp = d.getTime();
        let start_time = new Date(timestamp - 1000 * 2000).toISOString();
		let end_time = d.toISOString();
		Axios.get(url, {
            headers: {
                'x-api-key': 'gkuj3twzfoly96wyuenz8jvlx0elya4d',
                'Accept': 'application/json'
            },
            params: {
				interval: '1s',
				page_size: 2000,
                start_time: this.removeMilisec(start_time),
                end_time: this.removeMilisec(end_time)
            }
		})
		.then(res => {
			let data = res.data.data.map(item => {
				return {
					open: Number(item.open),
					close: Number(item.close),
					high: Number(item.high),
					low: Number(item.low),
					volume: Number(item.volume),
					timestamp: item.timestamp,
					date: new Date(item.timestamp)
				}
			})
			this.setState({
				data: this.state.data.concat(data)
			});
			//this.getStockData(res.data.next_url);
		})
		.catch(err => {});
	}

	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		});
		return;
		//this.getStockData(STOCK_URL);
	}

	render() {
		if (this.state.data.length === 0) {
			return <div>Loading...</div>
		}
		return (
			<Chart type="hybrid" data={this.state.data}/>
		)
	}
}

export default StockChart;