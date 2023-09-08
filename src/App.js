import { useEffect } from 'react';
import './App.css';
import Counter from './features/counter/counter'
import { useDispatch } from 'react-redux';
import { FetchNewsAPI, FetchSingleNewsAPI } from './features/counter/counterSlice';

function App() {
  // const {c} = useSelector((state)=>state.custom); //const c = useSelector(state=>state.custom.c)
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(FetchNewsAPI())
  dispatch(FetchSingleNewsAPI(1))
  },[])
  
  return (
    <>
   <Counter/>
   </>
  );
}
export default App;