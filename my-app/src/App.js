import logo from './logo.svg';
import './App.css';

import './css/nav.css'
import'./css/imgdescount.css'
import'./css/categories.css'
// import Counter from './componants/counter'
import Nav from './componants/nav'
 import Imgdescount from './componants/imgdescount'
 import  Categories from './componants/Categories'
 import Imgs from'./componants/imgs'



function App() {
  return (
    <>
        <Nav/>
        <Imgdescount/> 
        <Categories/>
        <Imgs/>

    </>
    
  )
}

export default App;
