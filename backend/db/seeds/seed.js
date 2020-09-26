exports.seed = (knex) =>
  knex('subjects')
    .del()
    .then(() =>
      knex('teachers')
        .del()
        .then(() =>
          knex('teachers').insert([
            {
              id: 1,
              first_name: '',
              second_name: 'Коробова',
              middle_name: '',
            },
            {
              id: 2,
              first_name: '',
              second_name: 'Никитин',
              middle_name: '',
            },
            {
              id: 3,
              first_name: '',
              second_name: 'Рылёв',
              middle_name: '',
            },
            {
              id: 4,
              first_name: '',
              second_name: 'Сафонова',
              middle_name: '',
            },
            {
              id: 5,
              first_name: '',
              second_name: 'Бабаева',
              middle_name: '',
            },
            {
              id: 6,
              first_name: '',
              second_name: 'Великородный',
              middle_name: '',
            },
          ])
        )
        .then(() =>
          knex('subjects').insert([
            {
              name: 'СТРПО',
              teacher_id: 3,
            },
            {
              name: 'Мат. Мод.',
              teacher_id: 1,
            },
            {
              name: 'МММППР',
              teacher_id: 2,
            },
            {
              name: 'МТПИС',
              teacher_id: 4,
            },
            {
              name: 'СПИ',
              teacher_id: 4,
            },
            {
              name: 'ИОППИ',
              teacher_id: 5,
            },
            {
              name: 'ОНИД',
              teacher_id: 6,
            },
          ])
        )
    );
