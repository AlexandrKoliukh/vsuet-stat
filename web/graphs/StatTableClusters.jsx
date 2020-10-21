import React from 'react';
import { useSelector } from 'react-redux';
import { badColor, goodColor, marks } from '../constants';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import {
  averageByClustersSelector,
  averageMarksByClusterSelector,
} from '../store/profilesSlice';
import { getComparedColor } from '../utils';

export const StatTableClusters = () => {
  const {
    averageMarks: averageMarksByCluster,
    common: commonByCluster,
  } = useSelector(averageMarksByClusterSelector);

  const { averageMarks, common } = useSelector(averageByClustersSelector);

  if (!_.toNumber(commonByCluster)) return null;

  return (
    <>
      <div className="d-flex mb-3">
        <div className="d-flex mr-3">
          <div style={{ backgroundColor: goodColor, width: 100, height: 20 }} />
          <span className="ml-1">- Выше среднего</span>
        </div>
        <div className="d-flex">
          <div style={{ backgroundColor: badColor, width: 100, height: 20 }} />
          <span className="ml-1">- Ниже среднего</span>
        </div>
      </div>
      <Table striped bordered responsive>
        <caption>Средние оценки по кластеру</caption>
        <thead>
          <tr>
            {_.values(marks).map((i) => {
              return <th key={i}>{i}</th>;
            })}
            <th>Общее среднее</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {_.entries(averageMarksByCluster).map(([markName, score]) => {
              return (
                <td
                  key={`${markName}_td`}
                  style={{
                    backgroundColor: getComparedColor(
                      averageMarksByCluster,
                      averageMarks,
                      markName
                    ),
                  }}
                >
                  {score}
                </td>
              );
            })}
            <td
              style={{
                backgroundColor: getComparedColor(commonByCluster, common),
              }}
            >
              {commonByCluster}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
