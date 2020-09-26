import repositories from '../repositories';

export default class SubjectsService {
  constructor() {
    this.subjectsRepository = new repositories.SubjectsRepository();
  }

  async getSubjects() {
    const subjects = await this.subjectsRepository.getSubjects();
    return subjects;
  }
}
