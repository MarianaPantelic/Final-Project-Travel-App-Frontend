import React from "react";


const Navbar = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-css">
      <a class="navbar-brand logoNav" href="/">
        LOGO
      </a>

      <div
        class="collapse navbar-collapse aligns_navbar"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navmenu">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/forum">
              Forum
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/blog">
              Blog
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/news">
              News
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/resources">
              Resources
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/jobs">
              Jobs
            </a>
          </li>
        </ul>
        <div class="navbuttons">
          <div class="dropdown userdropdown">
            <button
              class="btn btn-transparent dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                class="svg-inline--fa fa-user fa-w-14 userLogin"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                ></path>
              </svg>
            </button>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="/login">
                Sign In
              </a>
              <a class="dropdown-item" href="/register">
                Register
              </a>
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <a class="navbar-brand" href="#">Navbar</a>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>

    //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav mr-auto">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">Link</a>
    //       </li>
    //       <li class="nav-item dropdown">
    //         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //           Dropdown
    //         </a>
    //         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <a class="dropdown-item" href="#">Action</a>
    //           <a class="dropdown-item" href="#">Another action</a>
    //           <div class="dropdown-divider"></div>
    //           <a class="dropdown-item" href="#">Something else here</a>
    //         </div>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link disabled" href="#">Disabled</a>
    //       </li>
    //     </ul>
    //     <form class="form-inline my-2 my-lg-0">
    //       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //     </form>
    //   </div>
    // </nav>
  );
};

export default Navbar;


