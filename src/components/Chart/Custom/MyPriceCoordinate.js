import React, { Component } from "react";

import { hexToRGBA, getStrokeDasharray } from "react-stockcharts/lib/utils";

import GenericChartComponent from "react-stockcharts/lib/GenericChartComponent";
import { getAxisCanvas } from "react-stockcharts/lib/GenericComponent";

class MyPriceCoordinate extends Component {
	constructor(props) {
		super(props);
		this.renderSVG = this.renderSVG.bind(this);
		this.drawOnCanvas = this.drawOnCanvas.bind(this);
	}
	drawOnCanvas(ctx, moreProps) {
        if (this.props.direction === 0) return;
		const { type, stroke, strokeWidth, opacity } = this.props;
		const { yValue, xValue } = this.props;
		const { xScale } = moreProps;
		const { chartConfig: { yScale, width, height } } = moreProps;

		ctx.beginPath();

		ctx.strokeStyle = hexToRGBA(stroke, opacity);
		ctx.lineWidth = strokeWidth;

        const { x1, x2, y1, y2 } = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height);
        ctx.beginPath();
        ctx.setLineDash([3, 6]);
		ctx.moveTo(0, y1);
        ctx.lineTo(x1, y2);
        ctx.closePath();
		ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([]);
		ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
        
        //right indicator
		ctx.beginPath();
		ctx.fillStyle=stroke;
		ctx.moveTo(x2 - 100, y1);
		ctx.lineTo(x2 - 80, y1 - 20);
		ctx.lineTo(x2, y1 - 20);
		ctx.lineTo(x2, y1 + 20);
		ctx.lineTo(x2 - 80, y1 + 20);
		ctx.closePath();
        ctx.fill();

        //left indicator
		ctx.beginPath();
        ctx.fillStyle="#009755";
        ctx.moveTo(0, y1 - 14);
        ctx.lineTo(0, y1 + 14);
        ctx.lineTo(50, y1 + 14);
        ctx.lineTo(65, y1);
        ctx.lineTo(50, y1 - 14);
		ctx.closePath();
        ctx.fill();

        //circle 
        ctx.beginPath();
		ctx.arc(65, y1, 5, 0, 2 * Math.PI);
		ctx.fillStyle="#009755";
		ctx.strokeStyle="white";
		ctx.closePath();
		ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.fillStyle="white";
        ctx.moveTo(65, y1 - 3);
        ctx.lineTo(68, y1 + 2);
        ctx.lineTo(62, y1 + 2);
		ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle='white';
		ctx.textAlign="left";
		ctx.font = "16px Roboto-Medium";
        ctx.fillText("+34%", 10, y1 + 5);
        
        ctx.fillStyle='black';
		ctx.textAlign="left";
		ctx.font = "16px Roboto-Medium";
		ctx.fillText(yValue.toFixed(4), x2 - 70, y1 + 5);
        
	}
	render() {
		return <GenericChartComponent
			svgDraw={this.renderSVG}
			canvasDraw={this.drawOnCanvas}
			canvasToDraw={getAxisCanvas}
			drawOn={["pan"]}
		/>;
	}
	renderSVG(moreProps) {
		const { width, height } = moreProps;
		const { xScale, chartConfig: { yScale } } = moreProps;

		const { className } = this.props;
		const { type, stroke, strokeWidth, opacity, strokeDasharray } = this.props;
		const { yValue, xValue } = this.props;

		const lineCoordinates = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height);

		return (
			<line
				className={className}
				strokeDasharray={getStrokeDasharray(strokeDasharray)}
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeOpacity={opacity}
				{...lineCoordinates}
			/>
		);
	}
}

function getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height) {
	return { x1: Math.round(xScale(xValue)), y1: Math.round(yScale(yValue)), x2: width, y2: Math.round(yScale(yValue)) };
}

MyPriceCoordinate.defaultProps = {
	className: "line ",
	type: "horizontal",
	stroke: "#000000",
	opacity: 0.5,
	strokeWidth: 1,
};

export default MyPriceCoordinate;