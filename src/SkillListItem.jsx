import React from 'react'
import "./SkillListItem.css"

export default function SkillListItem({skill, index}) {
    return (
        <li className="SkillListItem">{skill.name} <div className="level">LEVEL {skill.level}</div></li>
    );
}