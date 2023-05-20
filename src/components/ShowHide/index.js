// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  showHideFirst = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  // eslint-disable-next-line lines-between-class-members
  showHideLast = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    const firstButton = first ? 'button' : 'button-border'
    const LastButton = last ? 'button' : 'button-border'
    return (
      <div className="container">
        <h1 className="title"> Show/Hide</h1>
        <div className="card">
          <div className="semi-card">
            <button
              onClick={this.showHideFirst}
              type="button"
              className={`button ${firstButton}`}
            >
              {' '}
              Show/Hide Firstname{' '}
            </button>
            {first && <p className="name"> Joe</p>}
          </div>
          <div className="semi-card">
            <button
              onClick={this.showHideLast}
              type="button"
              className={`button ${LastButton}`}
            >
              {' '}
              Show/Hide Lastname{' '}
            </button>
            {last && <pageXOffset className="name"> Jonas</pageXOffset>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
