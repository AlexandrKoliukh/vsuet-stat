const host = '';
const prefix = 'api/v1/stat';

export default {
  profilesPath: () => [host, prefix, 'profiles'].join('/'),
};
