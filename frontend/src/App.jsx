import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './adminPanel/layout/MainLayout';
import AdminIndex from './adminPanel/pages/AdminIndex';
import Login from './adminPanel/pages/Login';
import Unable from './adminPanel/pages/Unable';
import ProtectAdminPanel from './middleware/ProtectAdminPanel';
import ProtectRole from './middleware/ProtectRole';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='/adminPanel' element={<ProtectAdminPanel/>}>
          <Route path='' element={<MainLayout/>}>
            <Route path='' element={<Navigate to='/adminPanel/admin'/>}>
            </Route>
            <Route path='unable-access' element={<Unable/>}>
            </Route>
            <Route path='' element={<ProtectRole role='admin'/>}>
               <Route path='admin' element={<AdminIndex/>}>
              </Route>
            </Route>
          </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
