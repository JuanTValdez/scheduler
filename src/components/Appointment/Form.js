import React, { useState } from 'react';

import InterviewerList from '../InterviewerList.js';
import Button from '../Button.js';

export default function Form(props) {
  const [student, setStudent] = useState(props.student || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || '');

  const reset = function () {
    setStudent('');
    setInterviewer('');
  };
  const cancel = function () {
    reset();

    props.onCancel();
  };

  return (
    <main className='appointment__card appointment__card--create'>
      <section className='appointment__card-left'>
        <form onSubmit={(event) => event.preventDefault()} autoComplete='off'>
          <input
            className='appointment__create-input text--semi-bold'
            name='name'
            type='text'
            placeholder='Enter Student Name'
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
          value={interviewer}
          interviewers={props.interviewers}
          onChange={setInterviewer}
        />
      </section>
      <section className='appointment__card-right'>
        <section className='appointment__actions'>
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => {
              props.onSave(student, interviewer);
            }}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
