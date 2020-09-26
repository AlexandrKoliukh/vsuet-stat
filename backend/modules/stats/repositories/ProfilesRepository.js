import models from '../models';

export default class ProfilesRepository {
  constructor() {
    this.model = models.Profiles;
  }

  getProfiles() {
    return this.model.query();
  }

  getProfilesBySubjectId(id) {
    return this.model.query().where('subject_id', id);
  }

  getProfilesByTeacherId(id) {
    return this.model.query().where('teacher_id', id);
  }

  insertProfile(data) {
    return this.model.query().insert(data).returning('*');
  }
}
