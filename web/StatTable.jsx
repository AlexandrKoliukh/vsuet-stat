import React from 'react';
import { useSelector } from 'react-redux';
import { marks } from './constants';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import { averageMarksByTeacherSelector } from './store';

export const StatTable = () => {
  const averageMarksByTeacher = useSelector(averageMarksByTeacherSelector);

  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>Преподаватель</th>
          {_.values(marks).map((i) => {
            return <th key={i}>{i}</th>;
          })}
          <th>Общее среднее</th>
        </tr>
      </thead>
      <tbody>
        {_.keys(averageMarksByTeacher).map((teacher) => {
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
