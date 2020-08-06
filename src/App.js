import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Home from './components/Home'
import GamePage from './components/GamePage'
console.log(process.env.REACT_APP_MY_API_KEY)
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={GamePage} />
      </Switch>
    </BrowserRouter>
  )
}
export default App