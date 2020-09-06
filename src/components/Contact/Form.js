import React from 'react';


const Contact = () => {
    return ( 
        <section id="contact">
            <div className="form-wrapper">
            <header className="form-head">
                <h2>Contact Me</h2>
            </header>
            <form>
                <div className="name-form">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="input" name="name"></input>
                </div>
                <div className="email-form">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"></input>
                </div>
                <div className="reason-form">
                    <label htmlFor="reason">Reason</label>
                    <input id="reason" type="text" name="reason"></input>
                </div>
                <button className="submit" type="submit">Submit</button>
            </form>
            </div>
        </section>
     );
}
 
export default Contact;