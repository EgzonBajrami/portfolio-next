'use client'
import React,{useReducer, useCallback, useState} from 'react';
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

    const [successQuote, setSuccessQuote] = useState<boolean>();
    const [message, setMessage] = useState<string>();

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

      const handleSubmit = async (e:React.SyntheticEvent)=>{
        e.preventDefault();
        const data = {
            name:formState.inputs.Name.value,
            email:formState.inputs.Email.value,
            request:formState.inputs.Request.value
        }
        const result = await fetch('/api/quote',
        {
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          method:'POST',
          body:JSON.stringify({data})
        })
        
        if(result.ok){
            setSuccessQuote(true);
            setMessage("Your message has been received!")
        
          }else{
            setSuccessQuote(false);
            setMessage("Something went wrong when sending your message, please try again!")
            setTimeout(()=>{
              setSuccessQuote(true)
              setMessage("")
            },5000)
          }
      }

    return<>
    <div className="reachout-me">
        If you are interested in collaborating in a project, please fill out the form below or reach out to me through any of my social media linked here!
    </div>
    <Form className="submit-form"
    onSubmit={handleSubmit}>
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
            <div className="request-response">
                    {message && message.length>0 &&(<>
                        {successQuote ?(<div className="success-handler">
                            <p>{message}</p>
                        </div>):(
                            <div className="error-handler">
                                <p>{message}</p>
                            </div>
                        )}
                    </>)}
                </div>
    </Form>
    </>
  }
