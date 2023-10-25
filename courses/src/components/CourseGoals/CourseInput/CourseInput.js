import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text"  required onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit"
        style={{
          backgroundColor: enteredValue.length > 0 ? 'red' : 'lightcoral',
          cursor: enteredValue.length > 0 ? 'pointer' : 'not-allowed',
        }}
        disabled={enteredValue.length === 0}
      >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
