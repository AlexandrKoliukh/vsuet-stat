import React from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { keys, entries, groupBy } from 'lodash';
import { postProfile } from './service';

const marks = {
  mark_qualification: 'Квалификация',
  mark_storytelling: 'Подача материала',
  mark_relevance: 'Релевантность материала',
  mark_usefulness: 'Полезность материала',
  mark_clearness: 'Ясность материала',
  mark_evaluation: 'Оценивание',
  mark_fun: 'Настроение на занятии',
};

const validateData = (data) => {
  const dictionary = groupBy(data, 'subject_id');
  return keys(dictionary).map((teacherId) => {
    return dictionary[teacherId].reduce((acc, i) => ({ ...acc, ...i }), {});
  });
};

export const App = () => {
  const subjects = useSelector((state) => state.subjects);
  const teachers = useSelector((state) => state.teachers);

  const form = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      const data = keys(values).map((i) => {
        const [markName, subjectId, teacherId] = i.split('+');
        return {
          [markName]: values[i],
          subject_id: +subjectId,
          teacher_id: +teacherId,
        };
      });
      const a = validateData(data);
      return postProfile(a);
    },
  });

  const f = (markName) => (subject) => {
    const { id, teacher_id: teacherId } = subject;
    const inputKey = `${markName}+${id}+${teacherId}`;
    return (
      <th key={id}>
        <Form.Control type="number" name={inputKey} min="0" max="10" />
      </th>
    );
  };

  return (
    <>
      <Form onSubmit={form.handleSubmit} onChange={form.handleChange}>
        <Table responsive>
          <thead>
            <tr>
              <th>Параметр оценивания</th>
              {subjects.map((s) => {
                const { id, name, teacher_id: teacherId } = s;
                const teacher = teachers.find(({ id }) => id === teacherId);
                return (
                  <th key={id}>
                    {name} / {teacher.second_name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {entries(marks).map(([name, capture]) => {
              return (
                <tr key={name}>
                  <td>{capture}</td>
                  {subjects.map(f(name))}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button type="submit">Отправить анкету</Button>
      </Form>
    </>
  );
};
