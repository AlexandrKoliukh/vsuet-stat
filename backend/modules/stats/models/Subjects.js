import { Model } from 'objection';
import BaseModel from '../../../lib/BaseModel';
import Teachers from './Teachers';

export default class Subjects extends BaseModel {
  static get tableName() {
    return 'subjects';
  }

  static get relationMappings() {
    return {
      teacher: {
        relation: Model.BelongsToOneRelation,
        modelClass: Teachers,
        join: {
          from: 'teachers.id',
          to: 'subjects.teacher_id',
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name, teacher_id'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 100 },
        teacher_id: { type: 'integer' },
      },
    };
  }
}
