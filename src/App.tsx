import './App.css'
import {useState} from "react";

function App() {

    const [firstName, setFirstname] = useState<string>("")
    const [lastName, setLastname] = useState<string>("")

    function handleSubmit(event) {
        event.preventDefault()
        // logic
        console.log(firstName + " " + lastName)

        // axios post to backend with data from state


        // reset state if needed
        setFirstname("")
        setLastname("")
    }

    const isNotEmpty = firstName === "" || lastName === "" ? true : false

  return (
    <>
     <form onSubmit={handleSubmit}>
         <label>First name:</label>
         <input type="text" value={firstName} onChange={event => {
             setFirstname(event.target.value)} }/>
         <label>Last name:</label>
         <input type="text" value={lastName} onChange={event => setLastname(event.target.value) }/>
         <button disabled={isNotEmpty}>Submit</button>
     </form>

    </>
  )
}

export default App
