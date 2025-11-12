import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './adminPanel/layout/MainLayout';
import AdminIndex from './adminPanel/pages/AdminIndex';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminPanel' element={<MainLayout/>}>
          <Route path='' element={<Navigate to='/adminPanel/admin'/>}>
            <Route path='admin' element={<AdminIndex/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
