import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Cards from './components/Cards'
import prop1 from './assets/prop1.jpeg'
import prop2 from './assets/prop2.jpeg'
import prop3 from './assets/prop3.jpeg'
import prop4 from './assets/prop4.jpeg'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route
           path="/" 
              element={
                        <Layout>
                          <p>home</p>
                        </Layout>
                      }
              >
        </Route>
        <Route
           path="/contacts" 
              element={
                        <Layout>
                          <p>contatcs</p>
                        </Layout>
                      }
              >
        </Route> 
        <Route
           path="/about" 
              element={
                        <Layout>
                          <p>about</p>
                        </Layout>
                      }
              >
        </Route>     
      </Routes>
      </BrowserRouter>
    
      <div className='flex gap-10 p-30'>
        <Cards image={prop1} text="Diya Residency" address={<p>Infront of Bharati Vidyapeeth Kandalgoan Kolhapur</p>} />
        <Cards image={prop2}text="Diya Residency" address={<p>Infront of Bharati Vidyapeeth Kandalgoan Kolhapur</p>}/>
        <Cards image={prop3}text="Diya Residency" address={<p>Infront of Bharati Vidyapeeth Kandalgoan Kolhapur</p>}/>
        <Cards image={prop4}text="Diya Residency" address={<p>Infront of Bharati Vidyapeeth Kandalgoan Kolhapur</p>}/>
      </div>
    </div>
    
  )
}

export default App
