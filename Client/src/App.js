import Header from './components/Header.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Profile from './components/Profile'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserAction } from './actions/user.action'

function App(props) {
  useEffect(() => {
    props.user()
  })

  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
    </BrowserRouter>

  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    user: () => { dispatch(fetchUserAction()) }
  }
}

export default connect(null, mapDispatchToProps)(App)

