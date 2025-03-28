import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import PropertyDetails from './components/PropertyDetails'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route
           path="/" 
              element={
                        <Layout>
                          <Home />
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
        <Route
           path="/property/:id" 
              element={
                        <Layout>
                          <PropertyDetails />
                        </Layout>
                      }
              >
        </Route>      
      </Routes>
      </BrowserRouter>
    
      
    </div>
    
  )
}

export default App
