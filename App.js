import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

class App extends React.Component{
  state={
    companyName:"Codegnan",
    year:2008
  }
 
render(){
  return (
    <section>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </section>
  )
}
}

export default App;
