import React from 'react';
import { useForm } from "react-hook-form";
import './formComponent.css';


function FormComponent({onSubmit}) {

    const { handleSubmit, register, reset, formState: {errors} } = useForm();

    async function submitForm(data)  {
        await fetch('api/user',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
            },
        })
        fetch('api/user')
            .then(response => response.json())
            .then(data => onSubmit(data))
            reset();
    }
       
  return (
    
    <div className='form'>
        <form className='new-user-form' onSubmit={(handleSubmit(submitForm))}>
            <label className='form-label'>first name</label>
            <input type="text" name='firstname' className='form-input' {...register('firstname',{required: true})}/>
            {errors.firstname && errors.firstname.type === "required" && <span>This is required</span>}
            <label className='form-label'>last name</label>
            <input type="text" name='lastname' className='form-input' {...register('lastname')}/>
            <label className='form-label'>email adress</label>
            <input type="email" name='email' className='form-input' {...register('email')} />
            <label className='form-label'>age</label>
            <input type="text" name='age' className='form-input' {...register('age',{ min: 18, max: 99 })} />
            {errors.age && <span>age must be between 18 to 99</span>}
            
            <br />
            <button type='submit' className='form-btn' >submit</button>
        </form>
    </div>
  )
}

export default FormComponent