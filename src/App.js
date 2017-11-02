import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  componentDidMount() {
    html2canvas(this.header, {
      canvas: this.canvas,
      height: 300,
      width: 600,
    }).then(canvas => {
      const w = window.open('about:blank', 'image from canvas')
      w.document.write(`<img src='${canvas.toDataURL('image/png')}' alt='from canvas'/>`)
    })
  }

  handleCanvasRef = ref => {
    this.canvas = ref
  }

  handleHeaderRef = ref => {
    this.header = ref
  }

  render() {
    return (
      <div className="App">
        <div ref={this.handleHeaderRef}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>

        <canvas ref={this.handleCanvasRef} height={170} width={320}/>
      </div>
    )
  }
}

export default App
