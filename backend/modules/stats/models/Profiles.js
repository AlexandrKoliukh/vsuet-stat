import { Model } from 'objection';
import Teachers from './Teachers';
import Subjects from './Subjects';

const fields = [
  'mark_qualification',
  'mark_storytelling',
  'mark_relevance',
  'mark_fun',
  'mark_usefulness',
  'mark_clearness',
  'mark_evaluation',
];

export default class Profiles extends Model {
  static get tableName() {
    return 'profiles';
  }

  static get relationMappings() {
    return {
      subject: {
        relation: Model.HasOneRelation,
        modelClass: Subjects,
        join: {
          from: 'profiles.subject_id',
          to: 'subjects.id',
        },
      },
      teacher: {
        relation: Model.HasOneRelation,
        modelClass: Teachers,
        join: {
          from: 'teachers.id',
          to: 'profiles.teacher_id',
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [...fields, 'teacher_id', 'subject_id'],
      properties: {
        id: { type: 'integer' },
        teacher_id: { type: 'integer' },
        subject_id: { type: 'integer' },
        ...fields.map((f) => ({ [f]: { type: 'integer', min: 0, max: 10 } })),
      },
    };
  }
}
