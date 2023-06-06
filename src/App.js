import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
import { useEffect} from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js";
const promise=loadStripe("pk_test_51Mv3qSSIRCvz2jbHyAOcZmiKWPxkuMtmSt2AHlp0v98z5nC0BfGghtX3T4oB9JbZSeMr8q5dRPjc7lOOHfGbp8SE00zuGqiuTW");
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/login" element={[<Login/>]}/>
          <Route path="/checkout" element={[<Checkout/>]}/>
          <Route path="/payment" element={[<Elements stripe={promise}><Payment/></Elements>]}/>
          <Route path="/" element={[<Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
