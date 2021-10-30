import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AddTourPackages from './components/AddTourPackages/AddTourPackages';
import Home from './components/Home/Home';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrder from './components/MyOrder/MyOrder';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/placeOrder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path='/myOrder'>
            <MyOrder></MyOrder>
          </Route>
          <Route path='/manageOrder'>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path='/addTours'>
            <AddTourPackages></AddTourPackages>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
