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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
