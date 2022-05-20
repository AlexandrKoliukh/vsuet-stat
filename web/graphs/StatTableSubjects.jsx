import React from 'react';
import { useSelector } from 'react-redux';
import { selectSubjectsSortedByProfileLimits } from '../store/subjectsSlice';

export const StatTableSubjects = () => {
  const a = useSelector(selectSubjectsSortedByProfileLimits);

  console.log(a);
  return (
    <div>
      <h3>Рейтинг предметов (пороговое агрегирование)</h3>
      <ol>
        {a.map((profile) => {
          const subjectName = profile.subject.name;

          return <li key={profile.id}>{subjectName}</li>;
        })}
      </ol>
    </div>
  );
};
