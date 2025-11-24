import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './adminPanel/layout/MainLayout';
import AddWriters from './adminPanel/pages/AddWriters';
import AdminIndex from './adminPanel/pages/AdminIndex';
import AllWriters from './adminPanel/pages/AllWriters';
import Login from './adminPanel/pages/Login';
import News from './adminPanel/pages/News';
import Unable from './adminPanel/pages/Unable';
import ProtectAdminPanel from './middleware/ProtectAdminPanel';
import ProtectRole from './middleware/ProtectRole';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/adminPanel' element={<ProtectAdminPanel/>}>
          <Route path='' element={<MainLayout/>}>
            <Route path='' element={<Navigate to='/adminPanel/admin'/>}></Route>
            <Route path='unable-access' element={<Unable/>}></Route>
            <Route path='news' element={<News/>}></Route>
            <Route path='' element={<ProtectRole role='admin'/>}>
              <Route path='admin' element={<AdminIndex/>}></Route>
              <Route path='writer/add' element={<AddWriters/>}></Route>
              <Route path='writers' element={<AllWriters/>}></Route>
            </Route>
          </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
