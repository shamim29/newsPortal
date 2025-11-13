import { AiFillDashboard } from 'react-icons/ai';
import { FaUserEdit } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { IoPersonAdd } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import bartabuzzlogo from '../../assets/BartaBuzzD1.png';


const Sidebar = () => {

  const {pathname} = useLocation()

  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
      <div className="h-[70px] flex justify-center items-center">
        <Link to='/'>
          <img
          className='w-[200px] h-[50px]'
          src={bartabuzzlogo}
          alt='BartaBuzz Logo'
          />
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        <li>
          <Link
            to="/adminPanel/admin"
            className={`${pathname === '/adminPanel/admin'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-[#404040F6]'
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-blue-600 hover:text-white`}
            >
            <span className="text-xl">
              <AiFillDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/adminPanel/news"
            className={`${pathname === '/adminPanel/news'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-[#404040F6]'
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-blue-600 hover:text-white`}
            >
            <span className="text-xl">
              <FaRegNewspaper />
            </span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link
            to="/adminPanel/writer/add"
            className={`${pathname === '/adminPanel/writer/add'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-[#404040F6]'
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-blue-600 hover:text-white`}
            >
            <span className="text-xl">
              <IoPersonAdd  />
            </span>
            <span>Add Writers</span>
          </Link>
        </li>
        <li>
          <Link
            to="/adminPanel/writers"
            className={`${pathname === '/adminPanel/writers'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-[#404040F6]'
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-blue-600 hover:text-white`}
            >
            <span className="text-xl">
              <FaUserEdit />
            </span>
            <span>All Writers</span>
          </Link>
        </li>
        <li>
          <Link
            to="/adminPanel/profile"
            className={`${pathname === '/adminPanel/profile'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-[#404040F6]'
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-blue-600 hover:text-white`}
            >
            <span className="text-xl">
              <ImProfile />
            </span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
