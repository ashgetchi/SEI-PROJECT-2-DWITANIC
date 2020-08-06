import React from 'react' 
import axios from 'axios'
class GamePage extends React.Component {
  state = {
    quotes: '',
    character: '',
    options: [],
    amendedOption: []
  }
  async componentDidMount() {
    try {
      const resQuote = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random')
      const resChar = await axios.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/characters/')
      this.setState({ options: resChar.data.data })
      console.log(resChar.data.data)
      this.setState({ quotes: resQuote.data.data.content, character: resQuote.data.data.character.firstname })
      const random = this.state.options[Math.floor(Math.random() * this.state.options.length)]
      this.setState({ amendedOption: random.firstname })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    console.log(this.state.amendedOption)
    return (
      <>
        <h5>Quote: </h5>
        <h4>' {this.state.quotes} '</h4>
        {/* <h4>Right answer: </h4> */}
        {/* <div>{this.state.options.map(option => (
          <p key={option._id}>{option.firstname}</p>
        ))}
        </div> */}
        <h6>Options:  </h6>
        <div>
          <button>{this.state.amendedOption}</button>
          <button>{this.state.character}</button>
        </div>
      </>
    )
  }
}
export default GamePage