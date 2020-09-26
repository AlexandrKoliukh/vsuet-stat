import BaseModel from '../../../lib/BaseModel';

export default class Teachers extends BaseModel {
  static get tableName() {
    return 'teachers';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['second_name'],
      properties: {
        id: { type: 'integer' },
        second_name: { type: 'string', minLength: 1, maxLength: 100 },
        first_name: { type: 'string', minLength: 1, maxLength: 100 },
        middle_name: { type: 'string', minLength: 1, maxLength: 100 },
      },
    };
  }
}
