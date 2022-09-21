import AuthLayout from "layouts/AuthLayout";
import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import Clientes from "pages/admin/Clientes";
import Index1 from "pages/admin/Index1";
import Vehiculos from "pages/admin/Vehiculos";
import Index from "pages/Index";
import Login from "pages/Login";
import Registro from "pages/Registro";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'styles/styles.css';
import {DarkModeContext} from "context/darkMode";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    console.log("modo dark: ", darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        <Router>
          <Routes>
            <Route path="/admin" element={<PrivateLayout><Index1/></PrivateLayout>}/>
            <Route path="/admin/vehiculos" element={<PrivateLayout><Vehiculos/></PrivateLayout>}/>
            <Route path="/admin/clientes" element={<PrivateLayout><Clientes/></PrivateLayout>}/>
            <Route path="/login" element={<AuthLayout><Login/></AuthLayout>}/>
            <Route path="/registro" element={<AuthLayout><Registro/></AuthLayout>}/>
            <Route path="/" element={<PublicLayout><Index/></PublicLayout>}/>
          </Routes>
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
