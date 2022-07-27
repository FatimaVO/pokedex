import React from 'react';
import { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import trainer from '../assets/images/trainer.webp';

const UserInput = () => {

    const [userName, setUserName] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        dispatch(changeUser(userName))
        navigate("/pokedex")
    }

    return (
        <div className='userInput'>
            <div className="input">
                <div className='inputImage'>
                    <h1 className='greetingTitle'>Hello, trainer!</h1>
                    <p className='greetingText'>Enter your name below to start:</p>
                    <form className='formUserName' onSubmit={submit}>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className='inputUserName'
                            placeholder='enter your name'
                        />
                        <button className='buttonUserName'><i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                    </form>
                </div>
                <img className='trainer' src={trainer} alt="" />
            </div>
            <div className='pokeball'>
                <div className='red'></div>
                <div className='circleOut'><div className='circleIn'></div></div>
                <div className='white'></div>
            </div>

        </div>
    );
};

export default UserInput;