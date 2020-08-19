import React, { Component } from "react";
import PropTypes from "prop-types";

import { hexToRGBA, isDefined, isNotDefined, getStrokeDasharray } from "react-stockcharts/lib/utils";

import GenericChartComponent from "react-stockcharts/lib/GenericChartComponent";
import { getAxisCanvas } from "react-stockcharts/lib/GenericComponent";

class CustomRect extends Component {
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

		const { x1, x2, y2 } = getLineCoordinates(type, xScale, yScale, xValue, yValue, width, height);

        ctx.setLineDash(getStrokeDasharray("Solid").split(","));
        if (this.props.direction === 1) {
            let grd = ctx.createLinearGradient(0, 0, 0, y2);
            grd.addColorStop(0, "#1EAD3D10");
            grd.addColorStop(1, "#1EAD3D80");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, x2, y2);
        } else {
            let grd = ctx.createLinearGradient(x1, height, x1, y2);
            grd.addColorStop(0, "#D54D3610");
            grd.addColorStop(1, "#D54D3680");
            ctx.fillStyle = grd;
            ctx.fillRect(x1, y2, x2, height);
        }
        ctx.stroke();
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

CustomRect.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(["vertical", "horizontal"]),
	stroke: PropTypes.string,
	strokeWidth: PropTypes.number,
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

CustomRect.defaultProps = {
	className: "line ",
	type: "horizontal",
	stroke: "#000000",
	opacity: 0.5,
	strokeWidth: 1,
};

export default CustomRect;