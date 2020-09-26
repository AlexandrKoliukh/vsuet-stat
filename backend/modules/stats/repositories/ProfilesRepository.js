import models from '../models';

export default class ProfilesRepository {
  constructor() {
    this.model = models.Profiles;
  }

  async getProfiles() {
    return this.model.query().joinEager('[subject, teacher]');
  }

  getProfilesBySubjectId(id) {
    return this.model
      .query()
      .where('subject_id', id)
      .joinEager('[subject, teacher]');
  }

  getProfilesByTeacherId(id) {
    return this.model
      .query()
      .where('teacher_id', id)
      .joinEager('[subject, teacher]');
  }

  insertProfile(data) {
    return this.model.query().insert(data);
  }
}
