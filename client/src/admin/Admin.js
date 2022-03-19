import React, { useState } from 'react'
import Boxes from './Boxes';
import Navbar from './Navbar'
import Orders from './Orders';
import Sidebar from './Sidebar'
import TSProducts from './TSProducts';

const Admin = () => {
    const [sidebar, setSidebar] = useState('sidebar');
    const [icon, setIcon] = useState('bx bx-menu sidebarBtn');

    

  return (
    <>
        <Sidebar sidebar={sidebar} />
        <section className='home-section'>
            <Navbar icon={icon} setIcon={setIcon} setSidebar={setSidebar} />
            <div className='home-content'>
                <Boxes />
                <div className='sales-boxes'>
                    <Orders />
                    <TSProducts />
                </div>
            </div>
        </section>
    </>
  )
}

export default Admin