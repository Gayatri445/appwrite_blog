import React, { useEffect, useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();


  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500  w-full">
      <Container>
        <nav className="flex justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="flex">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock md:px-4 px-1 py-2 duration-200 hover:bg-blue-100 rounded-full md:text-base text-sm text-gray-900"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <>
                <li>
                  <LogoutBtn />
                </li>
                <li className="py-2 md:px-4 px-1 text-blue-900 font-semibold md:text-base text-sm">
                  {user?.name}
                </li>

             
              </>
            )}
          </ul>
          
        </nav>
      </Container>
    </header>
  );
}

export default Header;
