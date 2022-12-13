import React, {useEffect,useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
 
import Explore from './Explore';
import ItemDetails from './ItemDetails';
import Author from './Author';
import CreateYours from './CreateYours';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader"
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])
  return (
    <BrowserRouter>
     {loading ?
        <div className="preloaderr">
          <PropagateLoader  color={'  #7453fc'} loading={loading} height={100}  size={38} speedMultiplier={3} />
             </div> :
   <>
    <NavBar />
<Routes>
  <Route path='/' element = {<Home />}/>
 <Route path='/Explore' element = {<Explore />}/>

<Route path='/ItemDetails' element = {<ItemDetails />}/>
<Route path='/Author' element = {<Author />}/>
<Route path='/CreateYours' element = {<CreateYours />}/>

</Routes>
</>
}
 
</BrowserRouter>
  );
}

export default App;
