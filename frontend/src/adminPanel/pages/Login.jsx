import { useState } from 'react';
import bartabuzzlogo from '../../assets/BartaBuzzD1.png';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[340px] text-slate-600 shadow-md">
        <div className="bg-white h-full px-7 py-8 rounded-md">
          <div className="w-full justify-center items-center flex">
            <img
              className="w-[200px] h-[50px]"
              src={bartabuzzlogo}
              alt="BartaBuzz Logo"
            />
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="email">Email</label>
              <input
                name="email"
                onChange={inputHandle}
                value={state.email}
                required
                type="email"
                placeholder="Your Email"
                id="email"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="password">Password</label>
              <input
                name="password"
                onChange={inputHandle}
                value={state.password}
                required
                type="password"
                placeholder="Your Password"
                id="password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10"
              />
            </div>
            <div className="mt-4">
              <button className="px-3 py-1.5 w-full bg-blue-500 rounded-sm text-white hover:bg-blue-800 cursor-pointer">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
