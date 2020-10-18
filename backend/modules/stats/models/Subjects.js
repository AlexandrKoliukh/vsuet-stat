import { Model } from 'objection';
import BaseModel from '../../../lib/BaseModel';
import Teachers from './Teachers';
import Clusters from './Clusters';

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
      cluster: {
        relation: Model.BelongsToOneRelation,
        modelClass: Clusters,
        join: {
          from: 'clusters.id',
          to: 'subjects.cluster_id',
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'teacher_id', 'cluster_id'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 100 },
        teacher_id: { type: 'integer' },
        cluster_id: { type: 'integer' },
      },
    };
  }
}
