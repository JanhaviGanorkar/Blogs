// import React from 'react'
// import Post from './Post'
// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useParams } from "react-router-dom";
// import authService from '../appwrite/config'
// import { useSelector } from "react-redux";
// import parse from "html-react-parser";
// import { Container } from 'lucide-react';
// export default function UserPost() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();
//     const isAuthor = post && userData ? post.userId === userData.$id : false;

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);
//   return post && (
//     <div>
//       {isAuthor &&(
//         <Container>
//   <div className="browser-css">
//   <img
//                         src={appwriteService.getFilePreview(post.featuredImage)}
//                         alt={post.title}
//                         className="rounded-xl"
//                     />
//                     </div>
//         </Container>
//       )}
//     </div>
//   )
// }




import React from 'react'

export default function UserPost() {
  return (
    <div>
      
    </div>
  )
}
