import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Route,Routes,BrowserRouter, NavLink } from 'react-router-dom' ;


function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
