import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { actions } from '../store/commonSlice';
import { TeacherInfo } from './TeacherInfo';

export const modalTypes = {
  teacherInfo: TeacherInfo,
};

export const ModalRoot = () => {
  const dispatch = useDispatch();
  const { type, data } = useSelector((state) => state.common.modalState);

  const Component = useMemo(() => {
    return modalTypes[type];
  }, [type]);

  if (type === null) return null;

  const handleClose = () => {
    dispatch(actions.hideModal());
  };

  return (
    <Modal show size="lg" onHide={handleClose}>
      <Component data={data} />
    </Modal>
  );
};
