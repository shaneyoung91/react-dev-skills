import React from 'react'
import "./SkillListItem.css"

export default function SkillListItem({skill, index}) {
    return (
        <li className="SkillListItem">{skill.name} <div className="level">Level {skill.level}</div></li>
    );
}