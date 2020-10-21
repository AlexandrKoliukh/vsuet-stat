import { reducer as common } from './commonSlice';
import { reducer as profiles } from './profilesSlice';
import { reducer as subjects } from './subjectsSlice';
import { reducer as teachers } from './teachersSlice';
import { reducer as clusters } from './clustersSlice';

export const reducers = {
  common,
  profiles,
  subjects,
  teachers,
  clusters,
};
