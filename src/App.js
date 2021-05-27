import { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/usercontext'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import "@fontsource/anonymous-pro"
import './App.css';

import Nav from './components/Nav'
import Login from './pages/Login'
import SignUpPage from './pages/Signup'
import SearchCoaster from './pages/SearchCoaster'
import OneCoaster from './pages/OneCoaster'
import CreateCoaster from './pages/CreateCoaster'
import EditCoaster from './pages/EditCoaster'
import Profile from './pages/Profile'
import News from './pages/News'
import SearchUsers from './pages/SearchUsers';
import Home from './pages/Home'

function App() {
  const { userState, fetchUser } = useContext(UserContext)
  const [user, setUser] = userState
  useEffect(fetchUser, [])

  return (
    <div className="App">
      <Nav />

      <Route path='/searchrollercoasters' render={() => <SearchCoaster />} />
      <Route exact path='/rollercoasters/:id' render={() => <OneCoaster />} />
      <Route exact path='/rollercoasters/:id/edit' render={() => <EditCoaster />} />
      <Route exact path='/news' render={() => <News />} />
      <Route exact path='/searchusers' render={() => <SearchUsers/>}/>
      <Route exact path='/' render={() => <Home user={user}/>}/>
      {/* <Route exact path='/profile/:id' render={() => <Profile />} /> */}
      {/* <Route path = '/upload' render = {() => <CreateCoaster/>}/> */}

      <Route path="/upload" render={(routeInfo) => {
        if (user.id) {
          return <CreateCoaster user={user} />
        } else {
          return <Redirect to="/searchrollercoasters" />
        }
      }} />

      <Route path="/profile/:id" render={(routeInfo) => {
        if (user.id) {
          return <Profile user={user}/>
        } else {
          return <Redirect to="/searchrollercoasters" />
        }
      }} />

      <Route path="/login" render={(routeInfo) => {
        if (user.id) {
          return <Redirect to="/" />
        } else {
          return <Login setUser={setUser} />
        }
      }} />

      <Route path="/signup" render={(routeInfo) => {
        if (user.id) {
          return <Redirect to="/" />
        } else {
          return <SignUpPage setUser={setUser} />
        }
      }} />
    </div>
  );
}

export default App;
