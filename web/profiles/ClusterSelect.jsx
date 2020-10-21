import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { actions as commonActions } from '../store/commonSlice';
import _ from 'lodash';

export const ClusterSelect = () => {
  const dispatch = useDispatch();

  const clusters = useSelector((state) => state.clusters);
  const selectedCluster = useSelector((state) => state.common.selectedCluster);

  const handleSelectChange = (e) => {
    const { value } = e.target;
    dispatch(commonActions.selectCluster(_.toNumber(value)));
  };

  return (
    <Form.Group controlId="cluster.select" style={{ width: 300 }}>
      <Form.Label>Выбрать предметный кластер</Form.Label>
      <Form.Control
        as="select"
        value={selectedCluster}
        onChange={handleSelectChange}
      >
        <option value={0}>Все</option>
        {clusters.map((i) => {
          return (
            <option value={i.id} key={i.id}>
              {i.name}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};
