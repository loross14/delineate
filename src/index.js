import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Explore from './views/explore'
import Detailedview from './views/detailedview'
import Mission from './views/mission'
import Contributeview from './views/contributeview'
import Overview from './views/overview'
import Contribute from './views/contribute'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Explore} exact path="/explore" />
        <Route component={Detailedview} exact path="/detailedview" />
        <Route component={Mission} exact path="/mission" />
        <Route component={Contributeview} exact path="/contributeview" />
        <Route component={Overview} exact path="/overview" />
        <Route component={Contribute} exact path="/contribute" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
