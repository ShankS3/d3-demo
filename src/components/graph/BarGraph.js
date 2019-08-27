import React from 'react';
import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import PropTypes from 'prop-types';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { letterFrequency } from '@vx/mock-data';
import { scaleBand, scaleLinear } from '@vx/scale';

const data = letterFrequency.slice(5);

const x = d => d.letter;
const y = d => +d.frequency * 100;

const BarGraph = ({ width, height }) => {
  const xMax = width;
  const yMax = height - 120;

  const xScale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.4
  });

  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, Math.max(...data.map(y))]
  });

  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} rx={14} />
      <Group top={40}>
        {
          data.map((d,i) => {
            const letter = x(d);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - yScale(y(d));
            const barX = xScale(letter);
            const barY = yMax - barHeight;
            return(
              <Bar
                key={`bar-${letter}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgb(23, 233, 217)"
              />
            );
          })
        }
        <AxisLeft 
          hideAxisLine={true}
          hideTicks={true}
          scale={yScale}
          tickFormat={}
        />
      </Group>
    </svg>
  );
}

BarGraph.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default BarGraph;
