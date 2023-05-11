import { useEffect, useState } from 'react'
import './App.css'
import { BookingButton } from './components/BookingButton'
import { MovieMain } from './components/MovieMain'
import { TopCastContainer } from './components/TopCastContainer'

function App() { 
  const [dogs, setDogs] = useState("")
  useEffect(() => {
  fetch("https://api.thedogapi.com/v1/images/search").then((response)=> response.json()).then(response => setDogs(response))

}, [])
  return (
    <div className="App">
      <MovieMain dogs={dogs} />
      <TopCastContainer/>
      <BookingButton/>
    </div>
  )
}

export default App
