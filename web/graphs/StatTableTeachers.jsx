import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { marks } from '../constants';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import { averageMarksByTeacherSelector } from '../store/profilesSlice';
import { FaInfoCircle } from 'react-icons/fa';
import { actions } from '../store/commonSlice';

export const StatTableTeachers = () => {
  const dispatch = useDispatch();

  const averageMarksByTeacher = useSelector(averageMarksByTeacherSelector);
  const keys = _.keys(averageMarksByTeacher);

  if (keys.length < 1) return null;

  const handleTeacherInfoClick = (teacherId) => () => {
    dispatch(
      actions.showModal({
        type: 'teacherInfo',
        data: { teacherId: +teacherId },
      })
    );
  };

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
        {keys.map((teacherId) => {
          const score = averageMarksByTeacher[teacherId];
          return (
            <tr key={`${teacherId}_tr`}>
              <td
                onClick={handleTeacherInfoClick(teacherId)}
                style={{ cursor: 'pointer' }}
                className="d-flex"
              >
                <FaInfoCircle size={12} />
                {teacherId}
              </td>
              {_.values(score).map((i, index) => {
                return <td key={`${teacherId}_td_${index}`}>{i}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
