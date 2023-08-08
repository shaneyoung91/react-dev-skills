import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import './App.css'

function App() {
  
  return (
      <>
        <div className="App">
          <h1>React Dev Skills</h1>
          <SkillList />
          <hr></hr>
          <NewSkillForm />
        </div>
      </>
  )
}

export default App
