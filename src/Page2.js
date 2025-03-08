import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';
import zoom from './zoom.webp';

const Page2 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="meeting">
            <img src={zoom} alt="Sample" className="imago" />
            <button className="buttonjoin" onClick={handleClick}>JOIN MEETING</button>
        </div>
    );
};

export default Page2;
