import models from '../models';

export default class TeachersRepository {
  constructor() {
    this.model = models.Teachers;
  }

  async getTeachers() {
    return this.model.query();
  }
}
