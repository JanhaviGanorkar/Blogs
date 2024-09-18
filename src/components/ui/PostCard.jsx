import React from 'react'
import appwriteService from "../../appwrite/config"
import { Link } from 'react-router-dom'
// $id, title, featuredImage
const PostCard = ({post}) => {
  const { $id, title, featuredImage } = post;
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-blue-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt="title" className='rounded-xl ' />
        </div>
        <h2 className='text-2xl font-bold '>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
