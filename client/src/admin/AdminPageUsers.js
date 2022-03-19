import React,{useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Users from './Users';


const AdminPageUsers = () => {
   const [sidebar, setSidebar] = useState('sidebar');
   const [icon, setIcon] = useState('bx bx-menu sidebarBtn');

  return (
    <>
        <Sidebar sidebar={sidebar} />
        <section className='home-section'>
            <Navbar icon={icon} setIcon={setIcon} setSidebar={setSidebar} />
            <div className='home-content'>
              <div className='sales-boxes' style={{width: '100%'}}>
                <Users />
              </div>
            </div>
        </section>
    </>
  )
}

export default AdminPageUsers