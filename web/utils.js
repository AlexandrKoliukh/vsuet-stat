import _ from 'lodash';
import { badColor, goodColor, marks } from './constants';

export const getAverage = (list, key) => {
  const average = _.sumBy(list, key) / list.length;
  return average && average.toFixed(2);
};

export const getAverageByMarks = (profiles) => {
  const averageMarks = {};

  _.keys(marks).forEach((markName) => {
    averageMarks[markName] = getAverage(profiles, markName);
  });

  const common = (
    _.toNumber(_.sum(_.values(averageMarks).map(_.toNumber))) /
    _.keys(marks).length
  ).toFixed(2);

  return { averageMarks, common };
};

export const getComparedColor = (marks, commonMarks, key) => {
  if (!_.isPlainObject(marks)) {
    const value1 = _.toNumber(marks);
    const value2 = _.toNumber(commonMarks);

    if (!value1 || !value2 || value1 === value2) return '';

    return value1 < value2 ? badColor : goodColor;
  }

  const value1 = _.toNumber(marks[key]);
  const value2 = _.toNumber(commonMarks[key]);

  if (_.gt(value1, value2)) return goodColor;
  if (_.lt(value1, value2)) return badColor;
};
