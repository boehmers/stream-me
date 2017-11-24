import * as React from 'react';
import Camera from 'react-camera';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  camera: any;
  img: any;
  src: any;

  constructor(props: any) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then((blob: any) => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        </Camera>
      </div>
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
  }
};

export default App;
