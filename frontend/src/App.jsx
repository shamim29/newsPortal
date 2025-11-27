import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './adminPanel/layout/MainLayout';
import AddWriters from './adminPanel/pages/AddWriters';
import AdminIndex from './adminPanel/pages/AdminIndex';
import Advertisement from './adminPanel/pages/Advertisement';
import AllWriters from './adminPanel/pages/AllWriters';
import Category from './adminPanel/pages/Category';
import CreateNews from './adminPanel/pages/CreateNews';
import Login from './adminPanel/pages/Login';
import News from './adminPanel/pages/News';
import Profile from './adminPanel/pages/Profile';
import Unable from './adminPanel/pages/Unable';
import WritersIndex from './adminPanel/pages/WritersIndex';
import ProtectAdminPanel from './middleware/ProtectAdminPanel';
import ProtectRole from './middleware/ProtectRole';


const App = () => {

  const userInfo ={
    role : "writer"
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/adminPanel' element={<ProtectAdminPanel/>}>
          <Route path='' element={<MainLayout/>}>
            <Route path='' element={userInfo.role === 'admin' ? <Navigate to='/adminPanel/admin'/> : <Navigate to='/adminPanel/writer'/>}></Route>
            <Route path='unable-access' element={<Unable/>}></Route>
            <Route path='news' element={<News/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>

            <Route path='' element={<ProtectRole role='admin'/>}>
              <Route path='admin' element={<AdminIndex/>}></Route>
              <Route path='news/create' element={<CreateNews/>}></Route>
              <Route path='writer/add' element={<AddWriters/>}></Route>
              <Route path='writers' element={<AllWriters/>}></Route>
              <Route path='category' element={<Category/>}></Route>
              <Route path='advertisement' element={<Advertisement/>}></Route>
            </Route>

            <Route path='' element={<ProtectRole role='writer'/>}>
              <Route path='writer' element={<WritersIndex/>}></Route>
              <Route path='news/create' element={<CreateNews/>}></Route>
            </Route>


          </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
