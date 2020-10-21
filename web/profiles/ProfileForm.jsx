import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { entries, groupBy, keys } from 'lodash';
import { marks } from '../constants';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { postProfile } from '../service';
import { toast } from 'react-toastify';
import { subjectsByClusterSelector } from '../store/subjectsSlice';

const validateData = (data) => {
  const dictionary = groupBy(data, 'subject_id');
  return keys(dictionary).map((teacherId) => {
    return dictionary[teacherId].reduce((acc, i) => ({ ...acc, ...i }), {});
  });
};

export const ProfileForm = () => {
  const subjects = useSelector(subjectsByClusterSelector);
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
      return postProfile(a)
        .then(() => {
          toast.success('Ваш ответ был записан');
        })
        .catch(() => {
          toast.error('Проверьте введенные данные и повторите попытку');
        });
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
                  {name} / {teacher.id}
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
      <div className="d-flex justify-content-between">
        <Button type="submit">Отправить анкету</Button>
        <Button
          type="reset"
          onClick={() => form.resetForm({})}
          variant="warning"
        >
          Сброс
        </Button>
      </div>
    </Form>
  );
};
