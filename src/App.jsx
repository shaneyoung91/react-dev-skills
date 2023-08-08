import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import './App.css'

const skills = [
  { name: "HTML", level: 4 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 3 },
];

function App() {
  return (
      <>
        <h1 className='teal-text'>React Dev Skills</h1>
        <SkillList />
        <hr></hr>
        <NewSkillForm />
      </>
  )
}

export default App
