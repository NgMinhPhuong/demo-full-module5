import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { store } from './redux/store';
import { middleware } from './redux/middleware/middleware.js';
import Test from './component/test.js'
import FormIk from './component/formik.js';
function App() {
  const [valueInp, setValueInp] = useState('')
  const dispatch = useDispatch();
  const test1 = useSelector(store => store.test1)
  const [show, setShow] = useState(true)
  const handleClick = () => { 
      dispatch(middleware(valueInp))
  }
  return (
    
    <>
    <FormIk />
      {show && <Test/>}
      <button onClick={() => {
        setShow(!show)
      }}>SHOW</button>
      {valueInp}
      <input type='text' onChange={(event) => {
        setValueInp(event.target.value)
      }}></input>
      test1: {test1}
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App;
