import axios from 'axios';
import routes from './routes';

export const postProfile = async (data) => {
  const url = routes.profilesPath();
  await axios.post(url, { data });
};

export const fetchProfiles = async (queryParams) => {
  const url = routes.profilesPath();
  return await axios.get(url, queryParams);
};
