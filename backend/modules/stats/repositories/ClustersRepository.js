import models from '../models';

export default class ClustersRepository {
  constructor() {
    this.model = models.Clusters;
  }

  async getClusters() {
    return this.model.query();
  }
}
