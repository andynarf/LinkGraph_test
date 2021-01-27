import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import Post from './components/Post';
import Persons from './components/Persons';

function App() {


  return (
  <Provider store={store}>
    <div >
      Question 1
    <Post /> 
    Question 2
    <Persons />
    </div> 
   
  </Provider>
  );
}

export default App;
