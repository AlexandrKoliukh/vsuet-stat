import React from 'react';
import { useSelector } from 'react-redux';
import { selectSubjectsSortedByProfileLimits } from '../store/subjectsSlice';

export const StatTableSubjects = () => {
  const profiles = useSelector(selectSubjectsSortedByProfileLimits);

  if (profiles.length === 0) return null;

  return (
    <div>
      <h3>Рейтинг предметов (пороговое агрегирование)</h3>
      <ol>
        {profiles.map((profile) => {
          const subjectName = profile.subject.name;

          return <li key={profile.id}>{subjectName}</li>;
        })}
      </ol>
    </div>
  );
};
