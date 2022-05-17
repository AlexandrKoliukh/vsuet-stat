exports.seed = () => {};
exports.seed = (knex) =>
  knex('teachers')
    .insert([
      {
        id: 1,
        first_name: 'Людмила',
        second_name: 'Коробова',
        middle_name: 'Анатольевна',
      },
      {
        id: 2,
        first_name: 'Борис',
        second_name: 'Никитин',
        middle_name: 'Егорович',
      },
      {
        id: 3,
        first_name: 'Сергей',
        second_name: 'Рылёв',
        middle_name: 'Сергеевич',
      },
      {
        id: 4,
        first_name: 'Юлия',
        second_name: 'Сафонова',
        middle_name: 'Александрова',
      },
      {
        id: 5,
        first_name: 'Анна',
        second_name: 'Бабаева',
        middle_name: 'Владимировна',
      },
      {
        id: 6,
        first_name: 'Алексей',
        second_name: 'Великородный',
        middle_name: 'Сергеевич',
      },
      {
        id: 7,
        first_name: '',
        second_name: 'Бугаев',
        middle_name: '',
      },
      {
        id: 8,
        first_name: '',
        second_name: 'Литвинов',
        middle_name: '',
      },
      {
        id: 9,
        first_name: '',
        second_name: 'Чернов',
        middle_name: '',
      },
      {
        id: 10,
        first_name: '',
        second_name: 'Мачтаков',
        middle_name: '',
      },
      {
        id: 11,
        first_name: '',
        second_name: 'Денисенко',
        middle_name: '',
      },
      {
        id: 12,
        first_name: '',
        second_name: 'Чикунов',
        middle_name: '',
      },
      {
        id: 13,
        first_name: '',
        second_name: 'Арапов',
        middle_name: '',
      },
      {
        id: 14,
        first_name: '',
        second_name: 'Ойцева',
        middle_name: '',
      },
    ])
    .then(() =>
      knex('clusters').insert([
        {
          id: 1,
          name: 'WEB разработка',
        },
        {
          id: 2,
          name: 'Моделирование',
        },
        {
          id: 3,
          name: 'Программирование на ЯВУ',
        },
        {
          id: 4,
          name: 'Разработка ИС',
        },
        {
          id: 5,
          name: 'Базы данных',
        },
        {
          id: 6,
          name: 'Прочее',
        },
      ])
    )
    .then(() =>
      knex('subjects')
        .where({ id: 1 })
        .update({ cluster_id: 3 })
        .where({ id: 2 })
        .update({ cluster_id: 2 })
        .where({ id: 3 })
        .update({ cluster_id: 2 })
        .where({ id: 4 })
        .update({ cluster_id: 3 })
        .where({ id: 5 })
        .update({ cluster_id: 6 })
        .where({ id: 6 })
        .update({ cluster_id: 3 })
        .where({ id: 7 })
        .update({ cluster_id: 6 })
        .insert([
          {
            id: 8,
            name: 'Базы данных',
            teacher_id: 14,
            cluster_id: 5,
          },
          {
            id: 9,
            name: 'WEB программирование',
            teacher_id: 10,
            cluster_id: 1,
          },
          {
            id: 10,
            name: 'SQL',
            teacher_id: 14,
            cluster_id: 5,
          },
          {
            id: 11,
            name: 'Программирование на Java',
            teacher_id: 3,
            cluster_id: 3,
          },
          {
            id: 12,
            name: 'Программирование на C',
            teacher_id: 3,
            cluster_id: 3,
          },
          {
            id: 13,
            name: 'Программирование на PHP',
            teacher_id: 13,
            cluster_id: 1,
          },
          {
            id: 14,
            name: 'Программирование на JS',
            teacher_id: 12,
            cluster_id: 1,
          },
          {
            id: 15,
            name: 'Имитац. Моделир.',
            teacher_id: 11,
            cluster_id: 2,
          },
          {
            id: 16,
            name: 'UML',
            teacher_id: 1,
            cluster_id: 4,
          },
          {
            id: 17,
            name: 'ОПИС',
            teacher_id: 1,
            cluster_id: 4,
          },
          {
            id: 18,
            name: 'Сис. Анализ',
            teacher_id: 7,
            cluster_id: 2,
          },
          {
            id: 19,
            name: 'Мат. Анализ',
            teacher_id: 8,
            cluster_id: 2,
          },
          {
            id: 20,
            name: 'Безопасность ИС',
            teacher_id: 9,
            cluster_id: 4,
          },
        ])
    );
