// import logo from './logo.svg';
import './App.css';
// import { useForm } from "react-hook-form";
import Login from './components/Login';

function App() {
  // const {register, handleSubmit, formState:{errors}}  = useForm();
  // const onSubmit = (data) => console.log(data)
  return (
    // <>
    // <p className="title">Registration Form</p>
    // <form className='App' onSubmit={handleSubmit(onSubmit)}>
    //   <input type="text" {...register("name")}/>
    //   <input type="email" {...register("email", {required: true})}/>
    //   {errors.email && <span style={{color: "red"}}>Email Is Mandatory!</span>}
    //   <input type="password" {...register("Password")}/>
    //   <input type={"submit"} style={{backgroundColor: "red"}} />
    // </form>

    // <Login/>
    // </>

    <Login/>
  );
}

export default App;
