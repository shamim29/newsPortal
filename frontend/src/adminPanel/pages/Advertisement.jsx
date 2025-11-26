import { Link } from "react-router-dom"
import AdvertisementContent from "../components/AdvertisementContent"

const Advertisement = () => {

const userInfo = {
        role : "admin"
    }

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">All Advertisement</h2>
        {
            userInfo.role === 'admin' && <Link to='/adminPanel/advertisement/create' className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-800">Create Advertisement</Link>
        }
      </div>
      <AdvertisementContent/>
    </div>
  )
}

export default Advertisement
