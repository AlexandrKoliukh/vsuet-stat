import BaseModel from '../../../lib/BaseModel';

export default class Clusters extends BaseModel {
  static get tableName() {
    return 'clusters';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
      },
    };
  }
}
