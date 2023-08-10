import React from 'react'
import {useState} from 'react';
import "./NewSkillForm.css"


export default function NewSkillForm({ addSkill }) {
    const [formData, setFormData] = useState({
        name: "",
        level: "3",
    });

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(formData)
        setFormData({
            name: "",
            level: "3"
        });
    }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    return (
        <>
            <form className="NewSkillForm" onSubmit={handleAddSkill}>
                <label>Skill</label>
                <input name="name" value={formData.name} onChange={handleChange} required pattern=".{3,}"></input>
                <label>Level</label>
                <select name="level" value={formData.level} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">ADD SKILL</button>
            </form>
        </>
    );
}