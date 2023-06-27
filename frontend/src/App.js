import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Paymentsuccess from "./components/Paymentsuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/paymentsuccess" element={<Paymentsuccess/>}/>
      </Routes>
    </Router>
  );
}

export default App;
