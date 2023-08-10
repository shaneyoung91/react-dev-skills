import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import './App.css'
import {useState} from 'react';


const initialSkills = [
  { name: "HTML", level: 4 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 3 },
];

function App() {
  const [skills, setSkills] = useState(initialSkills);
  
  function addSkill(skill) {
    setSkills([...skills, skill]);
  }
  
  return (
      <div className='App'>
        <h1 className='teal-text'>React Dev Skills</h1>
        <SkillList skills={skills} />
        <br></br>
        <NewSkillForm addSkill={addSkill} />
      </div>
  )
}

export default App
