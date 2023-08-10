import React from 'react'
import SkillListItem from './SkillListItem';
import "./SkillListItem.css"



export default function SkillList({ skills }) {
    return (
        <>
            <ul 
                style={{padding:"0px"}}
            >
                {skills.map((skill, index) => (
                    <SkillListItem skill={skill} index={index} key={index} />
                ))}
            </ul>
        </>
    );
}