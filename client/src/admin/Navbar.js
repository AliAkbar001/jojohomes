import React from 'react'

const Navbar = (props) => {
//       let sidebar = document.querySelector(".sidebar");
// let sidebarBtn = document.querySelector(".sidebarBtn");
// sidebarBtn.onclick = function() {
//   sidebar.classList.toggle("active");
//   if(sidebar.classList.contains("active")){
//   sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
// }else
//   sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
// }
  const {icon, setIcon, setSidebar} = props;
  const responsive = () =>{
    // alert('sdfjdjf');
    // alert(icon);
    if(icon === 'bx bx-menu sidebarBtn'){
      setIcon('bx bx-menu-alt-right sidebarBtn');
      setSidebar('sidebar active');
      // alert(icon);
    }
    else if(icon === 'bx bx-menu-alt-right sidebarBtn'){
      setIcon('bx bx-menu sidebarBtn');
      setSidebar('sidebar');
      // alert(icon);
    }
  }

  return (
    <>
        <nav>
      <div className="sidebar-button">
       <button onClick={responsive} style={{outline: 'none', border: 'none', backgroundColor:'white'}}><i className={icon}></i></button>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className='bx bx-search' ></i>
      </div>
      <div className="profile-details">
        <img src="images/profile.jpg" alt="prohile" />
        <span className="admin_name">Prem Shahi</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>
    </>
  )
}

export default Navbar