import { Link } from "react-router-dom"

const AddWriters = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Create New Writers</h2>
          <Link to='/adminPanel/writers' className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-800">All Writers</Link>
      </div>
      <div className="p-4">
        <form>
          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="name">Name</label>
              <input type="text" placeholder="Full Name" id="name" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="category">Category</label>
              <select name="category" id="category" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10">
                <option value="">Select Category</option>
                <option value="Politics">Politics</option>
                <option value="Education">Education</option>
                <option value="Business">Business</option>
                <option value="Travel">Travel</option>
                <option value="Intertainment">Intertainment</option>
                <option value="Health">Health</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="International">International</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                <option value="Opinion">Opinion</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="email">Email</label>
              <input type="email" placeholder="Email Address" id="email" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div>     
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="name">Password</label>
              <input type="text" placeholder="Set Password" id="password" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div>    
          </div>
          <div className="mt-4">
            <button className="px-3 py-1.5 bg-blue-500 rounded-sm text-white hover:bg-blue-800">Add Writer</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWriters
