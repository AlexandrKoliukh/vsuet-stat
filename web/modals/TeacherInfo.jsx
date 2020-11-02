import React from 'react';
import { useSelector } from 'react-redux';
import { subjectsByTeacherSelector } from '../store/subjectsSlice';
import {
  averageByAllSelector,
  averageMarksByTeacherSelector,
  profilesByTeacherSelector,
} from '../store/profilesSlice';
import { Modal } from 'react-bootstrap';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { marks } from '../constants';

export const TeacherInfo = ({ data }) => {
  const subjects = useSelector(subjectsByTeacherSelector);
  const profiles = useSelector(profilesByTeacherSelector);
  const averageMarksByTeacher = useSelector(averageMarksByTeacherSelector);

  const { teacherId } = data;
  const averageMarksForTeacher = averageMarksByTeacher[teacherId];

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          Информация по преподавателю с ID - {teacherId}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Предметы: {subjects.map((i) => i.name).join(', ')}.</div>
        <div>Количество оценок: {profiles.length}.</div>
        <BarChartComponent data={averageMarksForTeacher} />
      </Modal.Body>
    </>
  );
};

const a = {
  value: 'Значение',
  average: 'Среднее',
};

const BarChartComponent = ({ data = [] }) => {
  const { averageMarks } = useSelector(averageByAllSelector);

  const teacherData = _.keys(_.omit(data, 'average')).map((i) => ({
    mark: marks[i],
    value: +data[i],
    average: +averageMarks[i],
  }));

  return (
    <>
      <div className="d-flex ml-3 mt-3 mb-3">
        <div className="d-flex mr-3">
          <div style={{ backgroundColor: '#8884d8', width: 100, height: 20 }} />
          <span className="ml-1">- Текущее по преподавателю</span>
        </div>
        <div className="d-flex">
          <div style={{ backgroundColor: '#82ca9d', width: 100, height: 20 }} />
          <span className="ml-1">- Среднее по факультету</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          layout={'vertical'}
          data={teacherData}
          margin={{
            left: 70,
          }}
        >
          <Tooltip formatter={(value, name) => [value, a[name]]} />
          <CartesianGrid />
          <XAxis
            dataKey="value"
            type="number"
            domain={[0, 10]}
            tickCount={10}
          />
          <YAxis dataKey="mark" type="category" />
          <Bar dataKey="value" stackId="b" fill="#8884d8" />
          <Bar dataKey="average" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
