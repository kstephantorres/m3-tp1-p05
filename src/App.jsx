import './App.css'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

function App() {

  return ( 
    <>
      <Container className='py-4 '>
        <h1 className='text-center text-white'>Lista de tareas </h1>
      </Container> 
      <Footer></Footer>
    </>     
  )
}

export default App
