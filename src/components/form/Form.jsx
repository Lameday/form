import React, { useState }from 'react';
import './form.css';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [regulamin, setRegulamin] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}  className="form-container">
            <input type="text" placeholder="Name" name="netto" onChange={handleChange} className="input-box"></input>
            <input type="email" placeholder="e-mail" name="netto" onChange={handleChange} className="input-box"></input>
            <textarea placeholder="bio" onChange={handleChange}></textarea>
            <div className="radio-container">
                <input type="radio" value="Male" name="gender" onChange={handleChange}/> Male
                <input type="radio" value="Female" name="gender" onChange={handleChange}/> Female
            </div>
            <div className="checkbox-container" >
                <p>Zaakceptuj regulamin:</p>
                <input type="checkbox" onChange={handleChange}/>
            </div>
            <button type="submit" onClick={null}>Send</button>
        </form>
    )
}
