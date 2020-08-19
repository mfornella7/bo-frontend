
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import PropTypes            from 'prop-types';

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import {
    CandlestickSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
	MouseCoordinateX,
    MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import { 
    LineSeries, 
    AreaSeries,
    KagiSeries
} from 'react-stockcharts/lib/series';
import { createVerticalLinearGradient, hexToRGBA }  from 'react-stockcharts/lib/utils';
import { kagi } from 'react-stockcharts/lib/indicator';

import CustomStraightLine   from './Custom/CustomStraightLine';
import Timeline             from './Custom/Timeline';
import CustomeRect          from './Custom/CustomRect';
import MyPriceCoordinate    from './Custom/MyPriceCoordinate';
import MyCurrentCoordinate  from './Custom/MyCurrentCoordinate';

const canvasGradient = createVerticalLinearGradient([
	{ stop: 0, color: hexToRGBA("#3326f0", 0) },
	{ stop: 0.8, color: hexToRGBA("#3326f0", 0.3) },
	{ stop: 1, color: hexToRGBA("#3326f0", 0.8) },
]);

class SChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suffix: 1
        }
        this.handleReset = this.handleReset.bind(this);
    }
    
	handleReset() {
		this.setState({
			suffix: this.state.suffix + 1
		});
    }
    renderChart(interpolation) {
        if(this.props.chartType === 0) {
            return (
                <AreaSeries 
                    yAccessor={(d) => {
                        return d.close
                    }}
                    stroke="rgb(164, 191, 244)"
                    fill="url(#ChartGradient)"
                    canvasGradient={canvasGradient}
                    interpolation={interpolation}
                />
            );
        }
        if(this.props.chartType === 1) {
            return (
                <LineSeries
                    yAccessor={(d) => {
                        return d.close
                    }}
                    stroke="rgb(164, 191, 244)"
                />
            );
        }
        if(this.props.chartType === 2) {
            return (
                <CandlestickSeries 
                    fill= {d => d.close > d.open ? "#1EAD3D" : "#D54D36"}
                    wickStroke= {d => d.close > d.open ? "#1EAD3D" : "#D54D36"}
                    opacity={1}
                />
            );
        }
        return (
            <KagiSeries
                stroke= {{
                    yang: "#1EAD3D",
                    yin: "#D54D36"
                }}
            />
        )
    }

    getTimePeriod() {
      switch (this.props.timePeriod) {
        case 0: return 5;
        case 1: return 15;
        case 2: return 30;
        case 3: return 60;
        case 4: return 300;
        case 5: return 900;
        case 6: return 1800;
        case 7: return 3600;
        case 8: return 10800;
        case 9: return 144000;
        default: return 144000 * 30;
      }
    }

	render() {        
		let margin = { left: 0, right: 50, top: 0, bottom: 50 };
		let height = window.innerHeight - 230;
        const { type, data: initialData, ratio, interpolation } = this.props;
        
        let width = this.props.width;
        if(window.innerWidth < 1080) {
            height = window.innerHeight - 360;
            width = 240;
            margin.right = 20;
        }

        const kagiCalculator = kagi();
        const calcuatedData = kagiCalculator(initialData);
		const xScaleProvider = discontinuousTimeScaleProvider
            .inputDateAccessor(d => d.date);
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(this.props.chartType === 3? calcuatedData :initialData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - this.getTimePeriod())]);
        const xExtents = [start + 30, end];
        
        const gridHeight = height - margin.top - margin.bottom;
		const gridWidth = width - margin.left - margin.right;

		const showGrid = true;
		const yGrid = showGrid ? { innerTickSize: -1 * gridWidth } : {};
        const xGrid = showGrid ? { innerTickSize: -1 * gridHeight } : {};
		return (
            <ChartCanvas 
                height={height}
                ratio={ratio}
                width={width}
                margin={margin}
                type={type}
                seriesName={`MSFT_${this.state.suffix}`}
                data={data}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                xExtents={xExtents}
            >

                <Chart id={1}
                    height={height - 200}
                    yExtents={[d => [d.high, d.low]]}
                    padding={{ top: 10, bottom: 20 }}>
                    <XAxis 
                        axisAt="bottom" 
                        orient="bottom" 
                        stroke="rgb(100, 100, 100)"
                        showTicks={false}
                        showTickLabel={false}
                    />
					<MouseCoordinateY
						at="right"
						orient="right"
                        displayFormat={format(".2f")}
                        stroke="rgb(161, 178, 225)"
                        fill="rgb(161, 178, 225)"
                        textFill="#fff"
                    />

                    <YAxis 
                        axisAt="right" 
                        orient="right" 
                        ticks={3} 
						zoomEnabled={true}
                        {...yGrid}
                        stroke="#3A3E57"
                        tickStroke="#3A3E57"
                        tickStrokeOpacity={0.4}
                    />
                    { this.renderChart(interpolation) }
                    <CustomStraightLine
                        xValue={data.length + 10}
                        type="vertical"
                        stroke="#D8252C"
                    />
                    <CustomeRect
                        yValue={data[data.length - 1].close}
                        type="horizontal"
                        direction={this.props.chartSelection}
                    />
                    <Timeline
                        xValue={data.length + 3}
                        type="vertical"
                        stroke="white"
                        time={25}
                        strokeDasharray="Dash"
                    />
                    <MyCurrentCoordinate
                        yAccessor={(d) => {
                            return d.close
                        }}
                        fill="white"
                    />
                    <MyPriceCoordinate
                        xValue={data.length}
                        yValue={data[data.length - 1].close}
                        type="horizontal"
                        stroke="#C4C7C6"
                    />
				</Chart>
				{/* <CrossHairCursor strokeDasharray="Solid" stroke="rgb(161, 178, 225)"/> */}
                <Chart id={2}
                    height={150}
                    origin={(w, h) => [0, h - 150]}
                    yExtents={[d => [d.high, d.low]]}
                    padding={{ top: 10, bottom: 10 }}
                >
                    <XAxis 
                        axisAt="bottom" 
                        orient="bottom" 
                        ticks={3} 
                        {...xGrid}
                        stroke="#3A3E57"
                        tickStroke="#3A3E57"
                        tickStrokeOpacity={0.4}
                        zoomEnabled={true}
                    />
					<MouseCoordinateX
						at="bottom"
						orient="bottom"
                        displayFormat={timeFormat("%Y-%m-%d")}
                        stroke="rgb(161, 178, 225)"
                        fill="rgb(161, 178, 225)"
                        textFill="#fff"
                    />
					<MouseCoordinateY
						at="right"
						orient="right"
                        displayFormat={format(".2f")}
                        stroke="rgb(161, 178, 225)"
                        fill="rgb(161, 178, 225)"
                        textFill="#fff"
                    />

                    <YAxis 
                        axisAt="right" 
                        orient="right" 
                        ticks={3} 
                        {...yGrid}
                        stroke="#3A3E57"
                        tickStroke="#3A3E57"
                        tickStrokeOpacity={0.4}
                        zoomEnabled={true}
                    />

                    <LineSeries 
                        yAccessor={(d) => {
                            return d.close
                        }}
                        stroke="white"
                    />

				</Chart>
			</ChartCanvas>
		);
	}
}

SChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

SChart.defaultProps = {
	type: "svg",
};

SChart = fitWidth(SChart);

const mapStateToProps = (state) => ({
    chartType: state.option.chartType,
    chartSelection: state.option.chartSelection,
    timePeriod: state.option.timePeriod
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(SChart);