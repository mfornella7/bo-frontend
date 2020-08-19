import React, { Component } from "react";
import PropTypes from "prop-types";

import GenericChartComponent from "react-stockcharts/lib/GenericChartComponent";
import { getMouseCanvas } from "react-stockcharts/lib/GenericChartComponent";

import { isNotDefined } from "react-stockcharts/lib/utils";


class MyCurrentCoordinate extends Component {
	constructor(props) {
		super(props);
		this.renderSVG = this.renderSVG.bind(this);
		this.drawOnCanvas = this.drawOnCanvas.bind(this);
	}
	drawOnCanvas(ctx, moreProps) {
		const c = helper(this.props, moreProps);
		if (!c) return null;
		const x = c.x;
		const y = c.y;
		const yValue = c.yValue;
		const { width } = moreProps;

		ctx.beginPath();
        ctx.strokeStyle = "#009755";
		ctx.moveTo(0, y);
		ctx.lineTo(width, y);
		ctx.closePath();
		ctx.stroke();

		ctx.beginPath();
		ctx.fillStyle="#009755";
		ctx.moveTo(width - 60, y);
		ctx.lineTo(width - 50, y - 12);
		ctx.lineTo(width, y - 12);
		ctx.lineTo(width, y + 12);
		ctx.lineTo(width - 50, y + 12);
		ctx.closePath();
		ctx.fill();

		//left indicator
		ctx.beginPath();
        ctx.fillStyle="#009755";
        ctx.moveTo(x - 70, y - 14);
        ctx.lineTo(x - 70, y + 14);
        ctx.lineTo(x - 15, y + 14);
        ctx.lineTo(x, y);
        ctx.lineTo(x - 15, y - 14);
		ctx.closePath();
        ctx.fill();

        //circle 
        ctx.beginPath();
		ctx.arc(x, y, 5, 0, 2 * Math.PI);
		ctx.fillStyle="#009755";
		ctx.strokeStyle="white";
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
        ctx.beginPath();
        ctx.fillStyle="white";
        ctx.moveTo(x, y - 3);
        ctx.lineTo(x + 3, y + 2);
        ctx.lineTo(x - 3, y + 2);
		ctx.closePath();
        ctx.fill();
		
		ctx.fillStyle='white';
		ctx.textAlign="left";
		ctx.font = "14px Roboto-Medium";
		ctx.fillText(yValue.toFixed(2), width - 45, y + 5);
		

        ctx.fillStyle='white';
		ctx.textAlign="left";
		ctx.font = "18px Roboto-Medium";
        ctx.fillText("$300", x - 60, y + 5);
	}
	renderSVG(moreProps) {
		const { className } = this.props;

		const circle = helper(this.props, moreProps);
		if (!circle) return null;

		const fillColor = circle.fill instanceof Function ? circle.fill(moreProps.currentItem) : circle.fill;

		return (
			<circle className={className} cx={circle.x} cy={circle.y} r={circle.r} fill={fillColor} />
		);
	}
	render() {
		return <GenericChartComponent
			svgDraw={this.renderSVG}
			canvasDraw={this.drawOnCanvas}
			canvasToDraw={getMouseCanvas}
			drawOn={["mousemove", "pan"]}
		/>;
	}
}

MyCurrentCoordinate.propTypes = {
	yAccessor: PropTypes.func,
	r: PropTypes.number.isRequired,
	className: PropTypes.string,
};


MyCurrentCoordinate.defaultProps = {
	r: 3,
	className: "react-stockcharts-current-coordinate",
};

function helper(props, moreProps) {
	const { fill, yAccessor, r } = props;

	const { show, xScale, chartConfig: { yScale }, currentItem, xAccessor } = moreProps;

	// console.log(show);
	if (!show || isNotDefined(currentItem)) return null;

	const xValue = xAccessor(currentItem);
	const yValue = yAccessor(currentItem);

	if (isNotDefined(yValue)) return null;

	// console.log(chartConfig);
	const x = Math.round(xScale(xValue));
	const y = Math.round(yScale(yValue));

	return { x, y, r, fill, yValue };
}

export default MyCurrentCoordinate;