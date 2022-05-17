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
import { FaTelegram } from 'react-icons/fa';
import { ModalRoot } from './modals/ModalRoot';

export const App = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between items-center">
        <ClusterSelect />
        <div className="pt-3">
          <a
            href="https://t.me/joinchat/Fk7iMEUz9NgDaNTGhWDiIA"
            target="_blank"
          >
            <FaTelegram size={32} /> Обсуждение
          </a>
        </div>
      </div>

      <p>Оценка от 2 до 5</p>

      <ProfileForm />

      <br />
      <br />
      <br />

      <StatTableClusters />
      <StatTableTeachers />
      <LineChartComponent />
      <RadarChartComponent />

      <ModalRoot />
      <ToastContainer />
    </Container>
  );
};
