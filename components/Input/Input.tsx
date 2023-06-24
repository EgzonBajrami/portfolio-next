"use client"
import React, { useReducer, useEffect } from 'react';
import './Input.css'
import { validate } from './validator.js';

const inputReducer = (state:any, action:any) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input = (props:any) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = (event:any) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        onChange={changeHandler}
        autoComplete="off"
        onBlur={touchHandler}
        placeholder={props.placeholder}
        value={inputState.value}
        className="touch-in"
      />
    ) : (
      <textarea
        id={props.id}
        autoComplete="off"
        rows={props.rows || 3}
        onChange={changeHandler}
        placeholder={props.placeholder}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-input-request  ${!inputState.isValid && inputState.isTouched &&
        'form-control--invalid'}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p className={props.element === 'input' ? (""):('invalid-text-area')}>{props.errorText}</p>}
    </div>
  );
};

export default Input;