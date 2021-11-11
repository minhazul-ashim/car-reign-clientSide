import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CarDetail from './components/Pages/Home/Cars/CarDetail';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/carinfo/:id'>
              <CarDetail></CarDetail>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
