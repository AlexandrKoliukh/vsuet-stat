import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { averageMarksByTeacherSelector } from '../store/profilesSlice';
import _ from 'lodash';
import { marks } from '../constants';

export const LineChartComponent = () => {
  const averageMarksByTeacher = useSelector(averageMarksByTeacherSelector);

  const data = _.keys(averageMarksByTeacher).map((teacher) => {
    return { ...averageMarksByTeacher[teacher], teacher };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="teacher" />
        <YAxis />
        <Tooltip />
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
