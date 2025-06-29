import logo from './logo.svg';
import './App.css';

import './css/nav.css'
import'./css/imgdescount.css'
import'./css/categories.css'
// import Counter from './componants/counter'
import Nav from './componants/nav'
 import Imgdescount from './componants/imgdescount'
 import  Categories from './componants/Categories'



function App() {
  return (
    <>
        <Nav/>
        <Imgdescount/> 
        <Categories/>

    </>
    
  )
}

export default App;
