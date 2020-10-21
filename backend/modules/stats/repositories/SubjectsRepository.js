import models from '../models';

export default class SubjectsRepository {
  constructor() {
    this.model = models.Subjects;
  }

  async getSubjects() {
    return this.model.query().joinEager('[cluster, teacher]');
  }
}
