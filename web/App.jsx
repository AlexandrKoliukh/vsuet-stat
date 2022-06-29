import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StatTableTeachers } from './items/StatTableTeachers';
import { LineChartComponent } from './items/LineChartComponent';
import { RadarChartComponent } from './items/RadarChartComponent';
import { ProfileForm } from './profiles/ProfileForm';
import { ClusterSelect } from './profiles/ClusterSelect';
import { Container } from 'react-bootstrap';
import { StatTableClusters } from './items/StatTableClusters';
import { FaTelegram } from 'react-icons/fa';
import { ModalRoot } from './modals/ModalRoot';
import { StatTableSubjects } from './items/StatTableSubjects';
import { MarkInfoButton } from './items/MarkInfoButton';

export const App = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between items-center">
        <ClusterSelect />
        <div className="pt-3">
          <a
            href="https://t.me/joinchat/Fk7iMEUz9NgDaNTGhWDiIA"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <FaTelegram size={32} /> Обсуждение
          </a>
        </div>
      </div>

      <MarkInfoButton />

      <ProfileForm />

      <br />
      <br />
      <br />

      <StatTableSubjects />
      <StatTableClusters />
      <StatTableTeachers />
      <LineChartComponent />
      <RadarChartComponent />

      <ModalRoot />
      <ToastContainer />
    </Container>
  );
};
