import React, { Component } from 'react';
import { scale } from 'd3-scale';


const data = [
  {
    category: "Low",
    systolic: 90,
    diastolic: 60
  },
  {
    category: "Normal"
    systolic: 120,
    diastolic: 80
  },
  {
    category: "Pre-Hypertension",
    systolic: 140,
    diastolic: 90
  },
  {
    category: "High: Stage 1 Hypertension",
    systolic: 160,
    diastolic: 100
  },
  {
    category: "High: Stage 2 Hypertension",
    systolic: 180,
    diastolic: 120
  }
];

class RectangularChart extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.loadChart();
  }

  componentDidUpdate() {
    this.loadChart();
  }

  loadChart = () => {
    const { svgDom } = this;

    if (!svgDom) {
      throw new Error('Unable to find the dom element, cannot render d3');
    }

    // svg container width and height
    let w = 500;
    let h =
  }

  chartDefaultSettings = () => {
      return {
          expandFromLeft: true, // Areas expand from left to right.
          expandFromTop: false, // Areas expand from top to bottom.
          animate: true, // Controls animation when chart loads.
          animateDuration: 2000, // The duration of the animation when the chart loads.
          animateDelay: 0, // The delay between the chart loading and the actual load animation starting.
          animateDelayBetweenBoxes: 200, // Adds a delay between box expansions during the load animation.
          colorsScale: d3.scale.category20b(), // The color scale to use for the chart areas.
          textColorScale: d3.scale.ordinal().range(["#fff"]), // The color scale to use for the chart text.
          textPadding: {top: 0, bottom: 0, left: 3, right: 3}, // Category text padding.
          maxValue: -1, // The charts maximum value. If this value is greater than the largest value displayed on the chart, this will cause the largest chart value to take up less area than the maximum height and width of the chart.
          labelAlignDiagonal: false, // Aligns the category label text to the charts diagonal.
          valueTextAlignDiagonal: false, // Aligns the value text to the charts diagonal.
          displayValueText: true, // Display the value text.
          valueTextPadding: {top: 0, bottom: 0, left: 3, right: 3}, // Value text padding.
          valueTextCountUp: true // Causes the value text to count up from 0 during the chart load animation.
      };
    };
    render() {
      return (
        <svg
          ref={ref => this.svgDom = ref}
          >
        </svg>
        });
      );
    }
  };
export default RectangularChart;
