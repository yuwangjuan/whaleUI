/*
 * @Description: 
 * @Author: ywj
 * @Date: 2021-11-15 15:57:32
 */
// import logo from './logo.svg';
// import './App.css';
import Button from './components/Button/button.tsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello World</h1>
        <h2>Hello world2</h2>
        <hr />
        <code>
          const a = 'b'
        </code>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Button  btnType="primary" size="lg">按钮w</Button>
      </header>
    </div>
  );
}

export default App;
