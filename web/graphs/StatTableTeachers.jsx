import React from 'react';
import { useSelector } from 'react-redux';
import { marks } from '../constants';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import { averageMarksByTeacherSelector } from '../store/profilesSlice';

export const StatTableTeachers = () => {
  const averageMarksByTeacher = useSelector(averageMarksByTeacherSelector);
  const keys = _.keys(averageMarksByTeacher);

  if (keys.length < 1) return null;

  return (
    <Table striped bordered responsive>
      <caption>Средние оценки преподавателей</caption>
      <thead>
        <tr>
          <th>ID</th>
          {_.values(marks).map((i) => {
            return <th key={i}>{i}</th>;
          })}
          <th>Общее среднее</th>
        </tr>
      </thead>
      <tbody>
        {keys.map((teacher) => {
          const score = averageMarksByTeacher[teacher];
          return (
            <tr key={`${teacher}_tr`}>
              <td>{teacher}</td>
              {_.values(score).map((i, index) => {
                return <td key={`${teacher}_td_${index}`}>{i}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
