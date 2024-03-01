import React from "react";
import "./NavBar.css";
import letsplay from "../images/logo.png";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  const redirectlogin = () => {
   // window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  return (
    <div className="m-0 p-0">
      <nav class="navbar navbar-expand-lg fixed-top navbar-custom  ">
        {/* <a class="navbar-brand" href="/#">
          Lets Play
        </a> */}
        <img class="logo1" src={letsplay}></img>

        <button
          class="navbar-toggler my-toggler bg-black dropdown-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse  navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/userhome">
                Home
              </Link>
            </li>

            <li>
              <div class="dropdown nav-item ">
                <li
                  class=" dropdown-toggle bg-black dropdown-toggle "
                  id="dropdown-basic"
                 // id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <a class="nav-link active" aria-current="page">
                    View&Book
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link class="dropdown-item" to="/vewground">
                    Grounds
                  </Link>
                  <Link class="dropdown-item" to="/viewhall">
                    Courts
                  </Link>
                </div>
              </div>
            </li>

            {/*  Code without Dropdown
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/vewground">
                View Grounds
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewhall">
                View Courts
              </a>
            </li>
*/}

            <li>
              <div class="dropdown nav-item ">
                <li
                  class=" dropdown-toggle bg-black dropdown-toggle "
                  id="dropdown-basic"
                 // id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <a class="nav-link active" aria-current="page">
                    MyBookings
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link class="dropdown-item" to="/viewbookings_user">
                    Grounds
                  </Link>
                  <Link class="dropdown-item" to="/viewcourtbookings_user">
                    Courts
                  </Link>
                </div>
              </div>
            </li>

            {/*           
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewbookings_user"
              >
                My Bookings
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewcourtbookings_user"
              >
                My CourtBookings
              </a>
            </li>
*/}
            {/* <li class="nav-item active">
              <button
                class="btn navbtn navBtnReg"
                onclick={redirectlogin}
                // href="\login"
              >
                Log Out
              </button>{" "}
            </li> */}
          </ul>

          <Link
              class="btn btn-outline-success navBtnReg"
              //type="button"
              onClick={redirectlogin} 
              //onClick={localStorage.clear()}
              to="/login" >Log' Out</Link>
              
         
        </div>
      </nav>

      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button
                class="btn btn-outline-success navBtnReg"
                type="button"
                // onClick={redirectreg}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default AdminNavBar;
