import React from 'react';
import { Logo, LogoutBtn } from '../index'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // Get auth status from Redux store
  const navigate = useNavigate();
  
  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus
    },
    {
      name: "Sign Up", 
      url: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts", 
      url: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      url: "/add-post",
      active: authStatus
    }, {
      name: "User Post",
      url: "/userpost",
      active: authStatus
    }
  ];

  return (
    <header className="bg-indigo-600 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold">
          {/* <button onClick={() => navigate("/")} className="hover:text-gray-300">
            My Blog
          </button> */}
          <Logo/>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button 
                  onClick={() => navigate(item.url)} 
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
        </ul>

        {/* Logout Button */}
        {authStatus && (
          <div>
            {/* <DeleteUser/> */}
            <LogoutBtn />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
