import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './pages/function/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/function/HomePage'
import { AboutPage } from './pages/function/AboutPage'
import { ArticlesListPage } from './pages/function/ArticlesListPage'
import { ArticlePage } from './pages/function/ArticlePage'

function App() {
  const [count, setCount] = useState(0)
  
  return (
  <BrowserRouter>
    <div className="App">
      <h1><Navbar/></h1>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/articles" element={<ArticlesListPage/>}/>
          <Route path="/articles/:articleId" element={<ArticlePage/>}/>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
