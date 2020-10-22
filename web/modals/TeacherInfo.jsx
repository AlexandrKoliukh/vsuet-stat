import React from 'react';
import { useSelector } from 'react-redux';
import { subjectsByTeacherSelector } from '../store/subjectsSlice';

export const TeacherInfo = ({ data }) => {
  const subjects = useSelector(subjectsByTeacherSelector);
  console.log(subjects);
  const { teacherId } = data;
  return <span>{teacherId}</span>;
};
