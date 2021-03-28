import Header from './components/Header.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
