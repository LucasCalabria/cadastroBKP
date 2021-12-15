//import { Container, Typography } from "@material-ui/core"
import AddPage from "./pages/addPage";
import DashPage from "./pages/dashPage";
import {Route, Link, Routes} from 'react-router-dom';


function App() {
  return(
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<DashPage />} />
        <Route exact path = "/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default App;
