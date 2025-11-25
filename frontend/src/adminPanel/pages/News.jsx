import { Link } from "react-router-dom"
import NewsContent from "../components/NewsContent"

const News = () => {

    const userInfo = {
        role : "admin"
    }

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">All News</h2>
        {
            userInfo.role === 'admin' && <Link to='/adminPanel//news/create' className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-800">Create News</Link>
        }
      </div>
      <NewsContent/>
    </div>
  )
}

export default News
