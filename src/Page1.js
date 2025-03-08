import React, { useState } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const navigate = useNavigate();
    const [responses, setResponses] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setResponses((prev) => {
            if (type === "checkbox") {
                const updatedValues = prev[name] ? [...prev[name]] : [];
                return {
                    ...prev,
                    [name]: checked ? [...updatedValues, value] : updatedValues.filter(v => v !== value),
                };
            } else {
                return { ...prev, [name]: value };
            }
        });
    };

    const handleSubmit = () => {
        console.log("Survey Results:", responses);
        alert("Survey submitted successfully! Check console for responses.");
        navigate('/Page2');
    };

    return (
        <div className="container">
            <h2>Career Guidance Survey</h2>
            <form>
                <div className="form-group">
                    <label>What subjects do you enjoy studying the most?</label>
                    <div className="options">
                        {["Mathematics", "Science", "Computer Science", "Commerce", "Arts", "Social Sciences"].map((subject) => (
                            <label key={subject}>
                                <input type="checkbox" name="subjects" value={subject} onChange={handleChange} /> {subject}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>What types of activities do you enjoy in your free time?</label>
                    <div className="options">
                        {["Reading", "Solving puzzles", "Designing", "Writing", "Sports", "Coding", "Volunteering"].map((activity) => (
                            <label key={activity}>
                                <input type="checkbox" name="activities" value={activity} onChange={handleChange} /> {activity}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Which careers interest you the most?</label>
                    <div className="options">
                        {["Engineering", "Medicine", "Business", "Law", "Arts & Design", "Teaching", "Technology", "Science & Research"].map((career) => (
                            <label key={career}>
                                <input type="checkbox" name="careerInterests" value={career} onChange={handleChange} /> {career}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>What is your preferred work environment?</label>
                    <div className="options">
                        {["Office-based", "Remote work", "Freelancing", "Outdoor work", "Lab/Research-based"].map((env) => (
                            <label key={env}>
                                <input type="radio" name="workEnvironment" value={env} onChange={handleChange} /> {env}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Do you prefer working alone or in a team?</label>
                    <div className="options">
                        <label>
                            <input type="radio" name="workPreference" value="Alone" onChange={handleChange} /> Alone
                        </label>
                        <label>
                            <input type="radio" name="workPreference" value="Team" onChange={handleChange} /> Team
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>How important is job stability to you?</label>
                    <div className="options">
                        {["Very Important", "Somewhat Important", "Not Important"].map((importance) => (
                            <label key={importance}>
                                <input type="radio" name="jobStability" value={importance} onChange={handleChange} /> {importance}
                            </label>
                            
                        ))}
                    </div>
                </div>

               

                <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
        
            </form>
        </div>
    );
};

export default Page1;
