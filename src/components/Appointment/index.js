import React from 'react';
import Header from './Header.js';
import Show from './Show.js';
import Empty from './Empty.js';
import Form from './Form.js';
import useVisualMode from '../../hooks/useVisualMode.js';
import './styles.scss';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';

export default function Appointment(props) {
  // console.log('Interviewer Props: ', props.interview.interviewer.name);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  return (
    // <div>
    <article className='appointment'>
      <Header time={props.time}></Header>

      {mode === 'EMPTY' && (
        <Empty
          // id={1}
          // time={props.time}
          onAdd={() => transition(CREATE)}
        />
      )}

      {mode === 'CREATE' && (
        <Form
          interviewer={[]}
          interviewers={[]}
          onChange={() => {}}
          onSave={() => transition(SAVING)}
          onCancel={() => back()}
        />
      )}

      {mode === 'SHOW' && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          // onEdit={props.onEdit}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        ></Show>
      )}
    </article>
    // </div>
  );
}
