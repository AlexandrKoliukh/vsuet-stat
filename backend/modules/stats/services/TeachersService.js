import repositories from '../repositories';

export default class TeachersService {
  constructor() {
    this.repository = new repositories.TeachersRepository();
  }

  async getTeachers() {
    const teachers = await this.repository.getTeachers();
    return teachers;
  }
}
