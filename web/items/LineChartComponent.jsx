import React from 'react';
import {
  ReferenceLine,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import {
  averageMarksByClusterSelector,
  averageMarksByTeacherSelector,
} from '../store/profilesSlice';
import _ from 'lodash';
import { marks } from '../constants';

export const LineChartComponent = () => {
  const averageMarksByTeacher = useSelector(averageMarksByTeacherSelector);
  const { common } = useSelector(averageMarksByClusterSelector);

  const keys = _.keys(averageMarksByTeacher);

  if (keys.length < 2) return null;

  const data = keys.map((teacher) => {
    return { ...averageMarksByTeacher[teacher], teacher };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: -10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="teacher" />
        <YAxis />
        <Tooltip />
        <ReferenceLine
          y={+common}
          label={{
            position: 'insideTopRight',
            value: 'Общее среднее',
            fill: 'red',
            fontSize: 14,
          }}
          stroke="red"
          strokeDasharray="3 3"
          isFront
          strokeWidth={2}
        />
        {_.entries(marks).map(([key, value], index) => {
          return (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={a[index]}
              name={value}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

const a = [
  '#1abc9c',
  '#e67e22',
  '#c0392b',
  '#8e44ad',
  '#2c3e50',
  '#0097e6',
  '#1289A7',
];
