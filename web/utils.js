import _ from 'lodash';
import { availableMarkValues, badColor, goodColor, marks } from './constants';

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

export const sortSubjectsByLimits = (profiles) => {
  const marksGroupedBySubject = _.groupBy(profiles, 'subject_id');

  const mapped = _.keys(marksGroupedBySubject).map((subjectId) => {
    const item = marksGroupedBySubject[subjectId];
    const marksForSubject = item
      .map((p) => {
        const marksForProfile = [];
        _.keys(marks).forEach((markName) => {
          marksForProfile.push(p[markName]);
        });

        return marksForProfile;
      })
      .flat()
      .sort();

    return {
      subjectId,
      marks: marksForSubject,
    };
  });

  mapped.sort((a, b) => {
    const aCounts = _.countBy(a.marks);
    const bCounts = _.countBy(b.marks);

    for (let i = 0; i < availableMarkValues.length; i++) {
      const mark = availableMarkValues[i];
      if (!_.has(bCounts, mark) && !_.has(aCounts, mark)) continue;
      if (!_.has(bCounts, mark)) return 1;
      if (aCounts[mark] > bCounts[mark]) return 1;

      if (!_.has(aCounts, mark)) return -1;
      if (aCounts[mark] < bCounts[mark]) return -1;
    }

    return 0;
  });

  return mapped.map(({ subjectId }) => Number(subjectId));
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
