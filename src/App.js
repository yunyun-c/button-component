import "./App.css";
import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div className="App">
      <header>
        <h3>
          <span>Button</span> Component
        </h3>
        <nav>
          <ul>
            <li>Colors</li>
            <li>Typography</li>
            <li>Spaces</li>
            <li>Buttons</li>
            <li>Inputs</li>
            <li>Grid</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Buttons</h1>

        <h2>Default Button</h2>
        <Button>Default</Button>

        <h2>Outline Button</h2>
        <Button type="outline">Outline</Button>

        <h2>Text Button</h2>
        <Button type="text">Text</Button>

        <h2>Disabled Button</h2>
        <Button disableShadow type="text">
          Disabled
        </Button>
        <Button disabled>Disabled</Button>

        <h2>Button with Icon</h2>
        <Button iconPosition="left">
          <i className="material-icons">favorite</i>Button with Icon
        </Button>
        <Button iconPosition="right">
          Button with Icon<i className="material-icons">home</i>
        </Button>
        <Button iconPosition="">
          <i className="material-icons">grade</i>
        </Button>

        <h2>Button Sizes</h2>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>

        <h2>Button Colors</h2>
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="danger" iconPosition="right">
          Delete<i className="material-icons">delete</i>
        </Button>
        <Button type="success" iconPosition="right">
          Check<i className="material-icons">check</i>
        </Button>

        <h2>Hover and Focus States</h2>
        <Button>Hover/Focus Me</Button>
      </main>
      <footer>
        <p>Create by yunyun-c - devChallenges.io</p>
      </footer>
    </div>
  );
};

export default App;
