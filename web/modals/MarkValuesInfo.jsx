import React from 'react';
import { Modal } from 'react-bootstrap';
import { availableMarkDefinition, availableMarkValues } from '../constants';

export const MarkValuesInfo = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Критерии оценивания</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {availableMarkValues.map((v, i) => {
          return (
            <div key={i}>
              {v} - {availableMarkDefinition[i]}
            </div>
          );
        })}
      </Modal.Body>
    </>
  );
};
