import { FaImage } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 mt-5">
      <div className="bg-white p-6 roudned flex justify-center items-center gap-x-3">
        <div>
          <label htmlFor="img" className={`w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}>
            <div className="flex justify-center items-center flex-col gap-y-2">
              <span className="text-4xl"><FaImage /></span>
              <span>Select Image</span>
            </div>
          </label>
          <input type="file" id="img" className="hidden"></input>
        </div>
        <div className="text-[#404040] flex flex-col gap-y-1 justify-center items-start">
          <span>Name: Shahadat Hossain Shamim</span>
          <span>Email: shamim131666@gmail.com</span>
          <span>Category: Techonology</span>
        </div>
      </div>
      <div className="bg-white px-6 py-4 text-[#404040]">
        <h2 className="pb-3 text-center">Change Password</h2>
        <form>
          <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="old_password">Old Password</label>
              <input type="text" placeholder="Your Old Password" id="old_password" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div>     
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="new_password">New Password</label>
              <input type="text" placeholder="Set New Password" id="new_password" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div> 
            <div className="mt-4">
            <button className="px-3 py-1.5 bg-blue-500 rounded-sm text-white hover:bg-blue-800">Change Password</button>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default Profile
