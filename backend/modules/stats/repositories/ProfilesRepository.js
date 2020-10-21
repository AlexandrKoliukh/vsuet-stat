import models from '../models';

const relations = '[subject.[cluster, teacher], teacher]';

export default class ProfilesRepository {
  constructor() {
    this.model = models.Profiles;
  }

  async getProfiles() {
    return this.model.query().joinEager(relations);
  }

  getProfilesBySubjectId(id) {
    return this.model
      .query()
      .where('subject_id', id)
      .withGraphFetched(relations);
  }

  getProfilesByTeacherId(id) {
    return this.model
      .query()
      .where('teacher_id', id)
      .withGraphFetched(relations);
  }

  getProfilesByClusterId(id) {
    return this.model
      .query()
      .withGraphFetched(relations)
      .where('subject.cluster_id', id);
  }

  insertProfile(data) {
    return this.model.query().insert(data);
  }
}
