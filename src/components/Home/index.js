import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {show: false, text: ''}

  save = () => {
    this.setState(pre => ({show: !pre.show}))
  }

  text = e => {
    this.setState({text: e.target.value})
  }

  render() {
    const {show, text} = this.state
    console.log(show)
    return (
      <div className="main">
        <div className="card">
          <h1>Editable Text Input</h1>
          {show ? (
            <div className="devide">
              <p>{text}</p>
              <button type="button" onClick={this.save}>
                Edit
              </button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder=""
                onChange={this.text}
                value={text}
              />
              <button type="button" onClick={this.save}>
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
