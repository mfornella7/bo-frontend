import React, { Component } from "react";
import PropTypes from "prop-types";

import { hexToRGBA, isDefined, isNotDefined, strokeDashTypes, getStrokeDasharray } from "react-stockcharts/lib/utils";

import GenericChartComponent from "react-stockcharts/lib/GenericChartComponent";
import { getAxisCanvas } from "react-stockcharts/lib/GenericComponent";

class CustomStraightLine extends Component {
	constructor(props) {
		super(props);
		this.renderSVG = this.renderSVG.bind(this);
		this.drawOnCanvas = this.drawOnCanvas.bind(this);
	}
	drawOnCanvas(ctx, moreProps) {
		const { type, stroke, strokeWidth, opacity, strokeDasharray } = this.props;
		const { yValue, xValue } = this.props;
		const { xScale } = moreProps;
		const { chartConfig: { yScale, width, height } } = moreProps;

		ctx.beginPath();

		ctx.strokeStyle = hexToRGBA(stroke, opacity);
		ctx.lineWidth = strokeWidth;

		const { x1, x2, y2 } = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height);

		ctx.setLineDash(getStrokeDasharray(strokeDasharray).split(","));
		ctx.beginPath();
        ctx.arc(x1, 50, 14, 0, 2 * Math.PI);
		ctx.fillStyle=stroke;
		ctx.closePath();
		ctx.fill();

		ctx.moveTo(x1, 50);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		
        ctx.font = '14px FontAwesome';
        ctx.fillStyle='white';
        ctx.textAlign="center";
		ctx.fillText('\uF024', x1, 54);

		ctx.beginPath();
		ctx.fillStyle="#009755";
		ctx.moveTo(x1, 200);
		ctx.lineTo(x1 + 20, 175);
		ctx.lineTo(x1 + 100, 175);
		ctx.lineTo(x1 + 100, 225);
		ctx.lineTo(x1 + 20, 225);
		ctx.closePath();
		ctx.fill();

		ctx.closePath();

		ctx.beginPath();
		ctx.arc(x1, 200, 7, 0, 2 * Math.PI);
		ctx.fillStyle="#009755";
		ctx.strokeStyle="white";
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

        ctx.fillStyle='white';
		ctx.textAlign="left";
		ctx.font = "12px Roboto-Medium";
		ctx.fillText('Result(P/L)', x1 + 20, 190);
		ctx.font = "18px Roboto-Medium";
		ctx.fillText('+$300', x1 + 20, 215);
		ctx.font = "12px Roboto-Medium";
		ctx.fillText('X', x1 + 88, 190);
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
	return type === "horizontal"
		? { x1: 0, y1: Math.round(yScale(yValue)), x2: width, y2: Math.round(yScale(yValue)) }
		: { x1: Math.round(xScale(xValue)), y1: 0, x2: Math.round(xScale(xValue)), y2: height };
}

CustomStraightLine.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(["vertical", "horizontal"]),
	stroke: PropTypes.string,
	strokeWidth: PropTypes.number,
	strokeDasharray: PropTypes.oneOf(strokeDashTypes),
	opacity: PropTypes.number.isRequired,
	yValue: function(props, propName/* , componentName */) {
		if (props.type === "vertical" && isDefined(props[propName])) return new Error("Do not define `yValue` when type is `vertical`, define the `xValue` prop");
		if (props.type === "horizontal" && isNotDefined(props[propName])) return new Error("when type = `horizontal` `yValue` is required");
		// if (isDefined(props[propName]) && typeof props[propName] !== "number") return new Error("prop `yValue` accepts a number");
	},
	xValue: function(props, propName/* , componentName */) {
		if (props.type === "horizontal" && isDefined(props[propName])) return new Error("Do not define `xValue` when type is `horizontal`, define the `yValue` prop");
		if (props.type === "vertical" && isNotDefined(props[propName])) return new Error("when type = `vertical` `xValue` is required");
		// if (isDefined(props[propName]) && typeof props[propName] !== "number") return new Error("prop `xValue` accepts a number");
	},
};

CustomStraightLine.defaultProps = {
	className: "line ",
	type: "horizontal",
	stroke: "#000000",
	opacity: 0.5,
	strokeWidth: 1,
	strokeDasharray: "Solid",
};

export default CustomStraightLine;