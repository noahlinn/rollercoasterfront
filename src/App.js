import { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import './App.css';

import Nav from './components/Nav'
import Login from './pages/Login'
import SignUpPage from './pages/Signup'
import SearchCoaster from './pages/SearchCoaster'
import OneCoaster from './pages/OneCoaster'
function App() {
  const [user, setUser] = useState({})
  const fetchUser = () => {
    if (localStorage.getItem('userId')) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`, {
        headers: {
          Authorization: localStorage.getItem('userId')
        }
      }).then((response) => {
        setUser(response.data.user)
      })
    }
    console.log('verify')
  }
  useEffect(fetchUser, [])

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />

      <Route path = '/searchrollercoasters' render = {() => <SearchCoaster/>}/>
      <Route path = '/rollercoasters/:id' render = {() => <OneCoaster/>}/>

      <Route path="/login" render={(routeInfo) => {
        if (user.id) {
          return <Redirect to="/dashboard" />
        } else {
          return <Login setUser={setUser} />
        }
      }} />

      <Route path="/signup" render={(routeInfo) => {
        if (user.id) {
          return <Redirect to="/dashboard" />
        } else {
          return <SignUpPage setUser={setUser} />
        }
      }} />
    </div>
  );
}

export default App;
