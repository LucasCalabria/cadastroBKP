//import { Container, Typography } from "@material-ui/core"
import AddPage from "./pages/addPage";
import DashPage from "./pages/dashPage";
import EditPage from "./pages/editPage";
import {Route, Routes} from 'react-router-dom';


function App() {
  return(
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<DashPage />} />
        <Route exact path = "/add" element={<AddPage />} />
        <Route exact path = "/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
