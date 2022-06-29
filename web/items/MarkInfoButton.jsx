import React from 'react';
import { actions } from '../store/commonSlice';
import { useDispatch } from 'react-redux';
import { availableMarkValues } from '../constants';

export const MarkInfoButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      actions.showModal({
        type: 'marksInfo',
      })
    );
  };

  return (
    <button className="btn btn-link" onClick={handleClick}>
      Оценка от {availableMarkValues.at(0)} до {availableMarkValues.at(-1)}
    </button>
  );
};
