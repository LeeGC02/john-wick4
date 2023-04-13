import './App.css'
import { BookingButton } from './components/BookingButton'
import { MovieMain } from './components/MovieMain'
import { TopCastContainer } from './components/TopCastContainer'

function App() {
  return (
    <div className="App">
      <MovieMain/>
      <TopCastContainer/>
      <BookingButton/>
    </div>
  )
}

export default App
