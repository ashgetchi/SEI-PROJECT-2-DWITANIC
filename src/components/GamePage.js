import React from 'react' 
import axios from 'axios'
class GamePage extends React.Component {
  state = {
    quotes: '',
    character: ''
  }
  async componentDidMount() {
    try {
      const res = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random')
      this.setState({ quotes: res.data.data.content, character: res.data.data.character.firstname })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <>
        <h5>Quote: </h5>
        <h4>' {this.state.quotes} '</h4>
        <h4> {this.state.character}</h4>
      </>
    )
  }
}
export default GamePage