import repositories from '../repositories';

export default class ClustersService {
  constructor() {
    this.repository = new repositories.ClustersRepository();
  }

  async getClusters() {
    const data = await this.repository.getClusters();
    return data;
  }
}
