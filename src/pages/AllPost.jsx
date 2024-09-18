import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
function AllPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => { }, [])
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }
  }
  )
  return (
    <div className='w-full py-8 bg-white dark:bg-gray-700'>
      <Container>
        <div className='flex flex-wrap bg-white-950 dark:bg-gray-700'>
          {posts.map((post) => (
            <div key={post.$id} post={post} className='p-2 w-1/4  bg-white dark:bg-gray-700' >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
