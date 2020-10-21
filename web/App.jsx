import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StatTableTeachers } from './graphs/StatTableTeachers';
import { LineChartComponent } from './graphs/LineChartComponent';
import { RadarChartComponent } from './graphs/RadarChartComponent';
import { ProfileForm } from './profiles/ProfileForm';
import { ClusterSelect } from './profiles/ClusterSelect';
import { Container } from 'react-bootstrap';
import { StatTableClusters } from './graphs/StatTableClusters';

export const App = () => {
  return (
    <Container>
      <ClusterSelect />
      <ProfileForm />

      <br />
      <br />
      <br />

      <StatTableClusters />

      <StatTableTeachers />

      <div className="d-flex flex-column">
        <LineChartComponent />
        <RadarChartComponent />
      </div>

      <ToastContainer />
    </Container>
  );
};
