import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-100 overflow-hidden">
        <div className="py-1 px-3 h-100">Hello</div>
      </div>
    </>
  );
};
