import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { marks } from './constants';
import _ from 'lodash';
import { Table } from 'react-bootstrap';

export const StatTable = () => {
  const profiles = useSelector((state) => state.profiles);

  const data = useMemo(() => {
    return profiles.map((p) => {
      const marksKeys = _.keys(marks);
      const markValues = _.keys(p)
        .filter((key) => marksKeys.includes(key))
        .map((i) => p[i]);
      const average = (_.sum(markValues) / marksKeys.length).toFixed(2);
      return { ...p, average: _.toNumber(average) };
    });
  }, [profiles]);

  const groupedByTeacher = useMemo(() => {
    const byTeacher = _.groupBy(data, 'teacher.second_name');
    const bySubjectInTeacher = _.mapValues(byTeacher, (i) =>
      _.groupBy(i, 'subject.name')
    );
    return bySubjectInTeacher;
  }, [data]);

  const averageMarksByTeacher = useMemo(() => {
    const result = {};
    const teachers = _.keys(groupedByTeacher);
    teachers.forEach((teacher) => {
      const subjects = groupedByTeacher[teacher];

      _.keys(subjects).forEach((subject) => {
        const profiles = subjects[subject];
        const q = [..._.keys(marks), 'average'];
        const averageMarks = q.reduce((acc, markName) => {
          const mark = _.sumBy(profiles, markName) / profiles.length;
          return { ...acc, [markName]: mark.toFixed(2) };
        }, {});
        result[teacher] = averageMarks;
      });
    });
    return result;
  }, [groupedByTeacher]);

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
