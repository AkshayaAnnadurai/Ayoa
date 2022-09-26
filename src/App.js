
import './App.css';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
// import Home from './Components/Home';
import Router from './Components/AllRoutes';
// import Kuttynav from './Components/inclusivity';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
   
      <Footer />

    </div>
  );
}

export default App;
