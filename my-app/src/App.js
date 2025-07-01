import logo from './logo.svg';
import './App.css';

import './css/nav.css'
import'./css/imgdescount.css'
import'./css/categories.css'
import'./css/imgs.css'
import './css/finish.css'

// import Counter from './componants/counter'
import Nav from './componants/nav'
 import Imgdescount from './componants/imgdescount'
 import  Categories from './componants/Categories'
 import Imgs from'./componants/imgs'
 import Finish from'./componants/finish'



function App() {
  return (
    <>
        <Nav/>
        <Imgdescount/> 
        <Categories/>
        <Imgs/>

        <Finish/>

    </>
    
  )
}

export default App;
