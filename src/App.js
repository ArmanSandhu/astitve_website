import React from 'react';
import './App.css';
import { Header, Navbar, Footer} from './components';
import { Home, About, Contact, BoardMembers, Donate, Error } from './components/pages';
import { Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className="App flex_wrapper">
      <Navbar />
      <div className='content_container'>
        <div className='nav_divider'></div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/board-members' element={<BoardMembers/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/donate' element={<Donate/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
