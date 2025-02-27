import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  return (
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
    
  )
}

export default App
