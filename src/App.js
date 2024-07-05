import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <p className="title">Registration Form</p>
    <form className='App'>
      <input type="text"/>
      <input type="email"/>
      <input type="password"/>
      <input type={"submit"}/>
      style={{backgroundColor: "red"}}
    </form>
    </>
  );
}

export default App;
