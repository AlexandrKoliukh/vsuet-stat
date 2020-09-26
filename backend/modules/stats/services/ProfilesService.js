import repositories from '../repositories';

const createProfile = async (profile) => ({
  ...profile,
});

export default class ProfilesService {
  constructor() {
    this.profilesRepository = new repositories.ProfilesRepository();
  }

  async getProfiles() {
    const profiles = await this.profilesRepository.getProfiles();
    return profiles;
  }

  async getProfilesByTeacherId(teacherId) {
    const profiles = await this.profilesRepository.getProfilesByTeacherId(
      teacherId
    );
    return profiles;
  }

  async getProfilesBySubjectId(subjectId) {
    const profiles = await this.profilesRepository.getProfilesBySubjectId(
      subjectId
    );
    return profiles;
  }

  async insertProfile(data) {
    const insertedProfile = await this.profilesRepository.insertProfile(data);
    return createProfile(insertedProfile);
  }
}
