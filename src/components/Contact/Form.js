import React, {useState} from 'react';
import Joi from 'joi-browser'
import emailjs from 'emailjs-com';


const Contact = () => { 
    const [form,setForm]=useState({
        name:"",
        email:"",
        reason:""
    })
    const [errors,setErrors]=useState({})


    function handleFormChange(e){
       const {name, value}=e.target;
       setForm({...form,[name]:value});
    

    }

    

   let schema={
        name: Joi.string().required().max(20).label('Name'),
        email: Joi.string().required().email().label('Email'),
        reason: Joi.string().required().min(5).max(250).label('Reason'),
    }

    const validate = () =>{
        
        const result= Joi.validate(form,schema,{abortEarly:false});
        if(!result.error){
         return null
        }
        else{
            const errors={}
            for (let oneErr of result.error.details){
                errors[oneErr.path[0]]=oneErr.message
                return errors
            }
        }
        
        
    }

    const onFormSubmit = (event)=>{
    event.preventDefault()

    const errors=validate();
    setErrors({...errors || {}})
    if (errors){
        return
    }
    else{
    console.log(form)
    // sendEmail(event)
    // emailjs.send('service_wvw2ab9', 'template_opke8dj', event.target,'user_9ypoTRBnRuyYOfWj4aRto')
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });
    sendEmail(form)
    }
    }

    function sendEmail(form){
        emailjs.send('service_wvw2ab9', 'template_opke8dj', form,'user_9ypoTRBnRuyYOfWj4aRto')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });

    }


    return ( 
        <section id="contact">
            <div className="form-wrapper">
            <header className="form-head">
                <h2>Contact Me</h2>
            </header>
            <form >
                <div className="name-form">
                    <label htmlFor="name">Name</label>
                    <input 
                    onChange={handleFormChange}
                    id="name"
                    type="input" 
                    name="name" value={form.name}
                    ></input>
                    {errors && <div className="errors">{errors.name}</div>}
                </div>
                <div className="email-form">
                    <label htmlFor="email">Email</label>
                    <input
                     onChange={handleFormChange}
                     id="email" 
                     type="email" 
                     name="email"
                    value={form.email}></input>
                </div>
                {errors && <p className="errors">{errors.email}</p>}
                <div className="reason-form">
                    <label htmlFor="reason">Reason</label>
                    <textarea
                    onChange={handleFormChange} 
                    id="reason"  
                    wrap="soft" 
                    name="reason" value={form.reason} 
                    ></textarea>
                    {errors && <div className="errors">{errors.reason}</div>}
                </div>
                <input onClick={onFormSubmit} className="submit" type="button" value="submit" />
            </form>
            </div>
        </section>
     );
}
 
export default Contact;