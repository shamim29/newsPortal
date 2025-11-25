import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
import news1image from '../../assets/Vumikomppo.jpg';



const NewsContent = () => {
  return (
    <div>
        <div className="px-4 py-3 flex gap-x-3">
            <select name="" id="" className="px-5 py-2 rounded-md outline-0 border border-gray-300
            focus:border-blue-500 h-10">
            <option value="">Select Type</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
         </select>
         <input type="text" placeholder="Search News" className="px-3 py-2 rounded-md outline-0 border border-gray-300
         focus:border-blue-500 h-10"/>
        </div>
        <div className="relative overflow-x-auto p-4">
            <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">No</th>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Image</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">ভূমিকম্পে ঢাকার বড় বিপদ স্পষ্ট হচ্ছে</td>
                        <td className="px-6 py-4">
                            <img
                            className="w-10 h-10"
                            src={news1image}
                            alt='BartaBuzz Logo'
                            />
                        </td>
                        <td className="px-6 py-4">পরিবেশ</td>
                        <td className="px-6 py-4">ভূমিকম্পে রাজধানী শহর ঢাকার বড় বিপদের ঝুঁকি আরও স্পষ্ট হচ্ছে</td>
                        <td className="px-6 py-4">November 25, 2025</td>
                        <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs cursor-pointer">Active</span>
                        </td>
                        <td className="px-6 py-4">
                            <div className='flex justify-start items-center gap-x-4 text-white'>
                                <Link className="p-1.5 bg-green-500 rounded hover:shadow-md hover:shadow-green-500"><FaRegEye /></Link>
                                <Link className="p-1.5 bg-yellow-500 rounded hover:shadow-md hover:shadow-yellow-500"><FaRegEdit /></Link>
                                <div className="p-1.5 bg-red-500 rounded hover:shadow-md hover:shadow-red-500"><FaTrashAlt /></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="flex items-center justify-end px-10 gap-x-3 text-slate-600">
            <div className="flex gap-x-3 justify-center items-center">
                <p className="px-4 py-3 font-semibold text-sm">News Per Page</p>
                <select name="category" id="category" className="px-3 py-2 rounded-md outline-0 border border-gray-300
              focus:border-blue-500 h-10">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
              </select>
            </div>
            <p className="px-6 py-3 font-semibold text-sm">10/122 - of 10</p>
            <div className="flex items-center gap-x-3">
                <IoCaretBack className="w-5 h-5 cursor-pointer"/>
                <IoCaretForward className="w-5 h-5 cursor-pointer"/>
            </div>
        </div>

    </div>
  )
}

export default NewsContent
