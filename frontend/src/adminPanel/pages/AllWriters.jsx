import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import userd1 from '../../assets/userd1.png';

const AllWriters = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">All Writers</h2>
          <Link to='/adminPanel/writer/add' className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-800">Add Writers</Link>
      </div>
      <div className="relative overflow-x-auto p-4">
                <table className="w-full text-sm text-left text-slate-600">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">No</th>
                      <th className="px-6 py-3">Repoter Name</th>
                      <th className="px-6 py-3">Category</th>
                      <th className="px-6 py-3">Role</th>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Email</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    [1,2,3,4,5,6,7].map((n, i)=>
                    <tr key={i} className="bg-white border-b">
                      <td className="px-6 py-4">{i+1}</td>
                      <td className="px-6 py-4">Shahadat Hossain Shamim</td>
                      <td className="px-6 py-4">Technology</td>
                      <td className="px-6 py-4">Writer</td>
                      <td className="px-6 py-4">
                        <img
                          className="w-10 h-10"
                          src={userd1}
                          alt='BartaBuzz Logo'
                        />
                      </td>
                      <td className="px-6 py-4">shamim131666@gmail.com</td>
                      <td className="px-6 py-4">
                        <div className='flex justify-start items-center gap-x-4 text-white'>
                          <Link className="p-1.5 bg-green-500 rounded hover:shadow-md hover:shadow-green-500"><FaRegEye /></Link>
                        </div>
                      </td>
                    </tr>
                    )
                    }
                  </tbody>
                </table>
              </div>
    </div>
  )
}

export default AllWriters
