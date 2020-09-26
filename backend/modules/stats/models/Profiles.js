import { Model } from 'objection';

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
