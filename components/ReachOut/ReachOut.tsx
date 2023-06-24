'use client'
import React,{useReducer, useCallback} from 'react';
import './ReachOut.css'
import {Form} from 'react-bootstrap';
import Input from '../Input/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../Input/validator';

interface FormInputItem {
    value: string;
    isValid: boolean;
  }
  
  interface FormInput {
    [key: string]: FormInputItem; 

  }


  interface FormStateProps {
    inputs: FormInput;
    isValid: boolean;
  }
  
  interface ActionProps {
    type: string;
    value: string;
    isValid: boolean;
    inputId: string;
  }
  
const formReducer = (state:FormStateProps, action:ActionProps) => {

    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
      default:
        return state;
    }
  };
 export default function ReachOut(){
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
          Email: {
            value: '',
            isValid: false,
          },
     
          Name: {
            value: '',
            isValid: false,
          },
        },
        isValid: false,
      });
      const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id
        });
      }, []);

    return<>
    <div className="reachout-me">
        If you are interested in collaborating in a project, please fill out the form below or reach out to me through any of my social media linked here!
    </div>
    <Form className="submit-form">
        <div className="input-holder">
        <Input
            id="Name"
            element="input"
            type="text"
            placeholder=""
            label="Your full name:*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="You must enter your name."
            onInput={inputHandler}    
            />
        </div>
     

            <div className="input-holder">
            <Input
            id="Email"
            element="input"
            type="text"
            placeholder=""
            label="Your email:*"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="You must enter your email."
            onInput={inputHandler}    
            />
            </div>
            <div className="input-holder">
            <Input 
                id="Request"
                element="textarea"
                type="text"
                label="Your request*"
                rows={5}
                placeholder=""
                validators={[VALIDATOR_REQUIRE()]}
                errorText="You must enter your request."
                onInput={inputHandler} 
                />
            </div>

            <div className="form-buttons-holder">
                {formState.isValid ? (<>
                <button type="submit" className="valid-btn">Submit</button></>):(<>
                    <button disabled>Submit</button>
                </>)}
            </div>
    </Form>
    </>
  }
