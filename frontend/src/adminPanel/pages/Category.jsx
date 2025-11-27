import { Link } from "react-router-dom"

const Category = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Create New Category</h2>
          <Link to='/adminPanel/category' className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-800">All Category</Link>
      </div>
      <div className="p-4">
        <form>
          <div className="grid grid-cols-1 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="name">Category Name</label>
              <input type="text" placeholder="Category Name" id="category_name" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div>
            <div className="flex flex-col gap-y-2 mb-5">
              <label className="text-md font-medium text-gray-600" htmlFor="name">Description</label>
              <input type="text" placeholder="Description" id="category_description" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10"/>
            </div> 
          </div>
          <div className="mt-4">
            <button className="px-3 py-1.5 bg-blue-500 rounded-sm text-white hover:bg-blue-800">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Category
