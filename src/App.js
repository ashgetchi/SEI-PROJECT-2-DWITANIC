import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Home from './components/Home'
import GamePage from './components/GamePage'
import WinPage from './components/WinPage'
import LoosePage from './components/LoosePage'
console.log(process.env.REACT_APP_MY_API_KEY)
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game/win" component={WinPage} />
        <Route path="/game/loose" component={LoosePage} />
        <Route path="/game" component={GamePage} />
      </Switch>
    </BrowserRouter>
  )
}
export default App