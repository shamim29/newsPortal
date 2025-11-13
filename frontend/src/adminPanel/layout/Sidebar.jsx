import { AiFillDashboard } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import bartabuzzlogo from '../../../../assets/BartaBuzzD1.png';


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
      <ul className="px-3 flex flex-col gap-y1 font-medium">
        <li>
          <Link
            to="/adminPanel/admin"
            className={`${pathname === '/adminPanel/admin'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-[#4040F6]'
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-blue-600 hover:text-white`}
            >
            <span className="text-xl">
              <AiFillDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
