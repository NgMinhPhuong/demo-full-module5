import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { store } from './redux/store';
import { middleware } from './redux/middleware/middleware.js';
import Test from './component/test.js'
import FormIk from './component/formik.js';
import {useParams, useLocation} from 'react-router-dom'
function App() {
  // const param = useParams(); param là 1 đối tượng chứa các cặp key value key là tên biến 
  // ta truyền kiểu path variable và value giá tri của key là giá trị của biến mà ta truyền

  // const search = useLocation().search //trả về đường dẫn của phía sau dấu ? tức là phần
  //  chuỗi khi truyền biến kiểu restParam

  // const id = new URLSearchParams(search).get('id') URLSearchParams này là 1 đối tượng phân tách chuỗi restparam sau dấu ?
  //  và giúp lấy được các giá trị của các biến VD: chuổi search là ?id=2&class=3
  // dùng const id = new URLSearchParams(search).get('id') sẽ lấy được giá trị là 2 và get('class') sẽ là 3
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
