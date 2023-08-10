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
  return (
      <div className='App'>
        <h1 className='teal-text'>React Dev Skills</h1>
        <SkillList skills={skills} />
        <br></br>
        <NewSkillForm />
      </div>
  )
}

export default App
