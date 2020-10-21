import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StatTable } from './graphs/StatTable';
import { LineChartComponent } from './graphs/LineChartComponent';
import { RadarChartComponent } from './graphs/RadarChartComponent';
import { ProfileForm } from './profiles/ProfileForm';
import { ClusterSelect } from './profiles/ClusterSelect';
import { Container } from 'react-bootstrap';

export const App = () => {
  return (
    <Container>
      <ClusterSelect />
      <ProfileForm />

      <br />
      <br />
      <br />
      <StatTable />

      <div className="d-flex flex-column">
        <LineChartComponent />
        <RadarChartComponent />
      </div>

      <ToastContainer />
    </Container>
  );
};
