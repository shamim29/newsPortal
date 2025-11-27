import JoditEditor from "jodit-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateNews = () => {
  return (
     <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Create News</h2>
            <Link to='/adminPanel/news/create' className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-800">News</Link>
      </div>
      <div className="p-4">
        <form>
          <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="title">Title</label>
              <input type="text" placeholder="Add Your News Title" id="title" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div>
            <div className="mb-5 ">
              <div>
                <label htmlFor="img" className={`w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border border-dashed`}>
                  <div className="flex justify-center items-center flex-col gap-y-2">
                    <span className="text-4xl"><FaCloudUploadAlt /></span>
                    <span>Select Image</span>
                  </div>
                </label>
                <input type="file" id="img" className="hidden"></input>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <div className="flex justify-start items-center gap-x-2">
                <h2>Description</h2>
                <div>
                  <span className="text-2xl cursor-pointer"><FaCloudUploadAlt /></span>
                </div>
              </div>
              <div>
                <JoditEditor/>
              </div>  
            </div>
            <div className="mt-4">
            <button className="px-3 py-1.5 bg-blue-500 rounded-sm text-white hover:bg-blue-800">Add News</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNews
