import React from 'react';
import Legend from 'recharts/lib/component/Legend';
import Radar from 'recharts/lib/polar/Radar';
import PolarRadiusAxis from 'recharts/lib/polar/PolarRadiusAxis';
import PolarAngleAxis from 'recharts/lib/polar/PolarAngleAxis';
import PolarGrid from 'recharts/lib/polar/PolarGrid';
import RadarChart from 'recharts/lib/chart/RadarChart';
import { useSelector } from 'react-redux';
import { averageMarksByTeacherSelector } from './store';
import _ from 'lodash';
import { ResponsiveContainer } from 'recharts';

export const Radial = () => {
  const averageMarksByTeacher = useSelector(averageMarksByTeacherSelector);

  const data = _.keys(averageMarksByTeacher).map((teacher) => {
    return { ...averageMarksByTeacher[teacher], teacher };
  });

  return (
    <ResponsiveContainer width="46%" height={400}>
      <RadarChart outerRadius={90} height={350} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="teacher" />
        <PolarRadiusAxis angle={30} />
        <Radar
          name="Общий балл"
          dataKey="average"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};
