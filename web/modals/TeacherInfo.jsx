import React from 'react';
import { useSelector } from 'react-redux';
import { subjectsByTeacherSelector } from '../store/subjectsSlice';
import { profilesByTeacherSelector } from '../store/profilesSlice';
import { Modal } from 'react-bootstrap';

export const TeacherInfo = ({ data }) => {
  const subjects = useSelector(subjectsByTeacherSelector);
  const profiles = useSelector(profilesByTeacherSelector);

  console.log(profiles);

  const { teacherId } = data;
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          Информация по преподавателю с ID - {teacherId}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Предметы: {subjects.map((i) => i.name).join(', ')}.</div>
        <div>Оценок: {profiles.length}.</div>
      </Modal.Body>
    </>
  );
};
