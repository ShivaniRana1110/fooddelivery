import './App.css';
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './screens/Login.js';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup.js';
import Chinesefood from './screens/Chinesefood.js';
import Northfood from './screens/Northfood.js';
import Southfood from './screens/Southfood.js';
import Toprated from './screens/Toprated.js';
import Budget from './screens/Budget.js';
import Nearyou from './screens/Nearyou.js';
import Tasteofindia from './screens/Tasteofindia.js';
import Sizzleandstir from './screens/Sizzleandstir.js';
import Thetraditionalkitchen from './screens/Thetraditionalkitchen.js';
import Theflavourfactory from './screens/Theflavourfactory.js';
import Foodfusion from './screens/Foodfusion.js';
import Annaskitchen from './screens/Annaskitchen.js';
import Platterperfection from './screens/Platterperfection.js';
import Chefsbestfriend from './screens//chefsbestfeiend.js'
import Foodies from './screens/Foodies.js';
import Orders from './screens/Orders.js';
import Menuu from './components/Menuu.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/createuser' element={<Signup/>} />
          <Route exact path='/chinesefood' element={<Chinesefood/>}/>
          <Route exact path='/northfood' element={<Northfood/>}/>
          <Route exact path='/southfood' element={<Southfood/>}/>
          <Route exact path='/toprated' element={<Toprated/>}/>
          <Route exact path='/budget' element={<Budget/>}/>
          <Route exact path='/nearyou' element={<Nearyou/>}/>
          <Route exact path='/tasteofindia' element={<Tasteofindia/>}/>
          <Route exact path='/sizzleandstir' element={<Sizzleandstir/>}/>
          <Route exact path='/thetraditionalkitchen' element={<Thetraditionalkitchen/>}/>
          <Route exact path='/theflavourfactory' element={<Theflavourfactory/>}/>
          <Route exact path='/foodfusion' element={<Foodfusion/>}/>
          <Route exact path='/annaskitchen' element={<Annaskitchen/>}/>
          <Route exact path='/platterperfection' element={<Platterperfection/>}/>
          <Route exact path='/chefsbestfriend' element={<Chefsbestfriend/>}/>
          <Route exact path='/foodies' element={<Foodies/>}/>
          <Route exact path='/menuu' element={<Menuu/>}/>
          <Route exact path='/order' element={<Orders/>}/>
          
          

           
        </Routes>
        </div>
      </Router>
    
    
  );
}

export default App;
