import React,{useState} from 'react'
import Categories from './Categories';
import Navbar from './Navbar'
// import Products from './Products';
import Sidebar from './Sidebar'

const AdminProducts = () => {
  const [sidebar, setSidebar] = useState('sidebar');
    const [icon, setIcon] = useState('bx bx-menu sidebarBtn');
  return (
    <>
        <Sidebar sidebar={sidebar} />
        <section className='home-section'>
            <Navbar icon={icon} setIcon={setIcon} setSidebar={setSidebar} />
            <div className='home-content'>
              <div className='sales-boxes' style={{width: '100%'}}>
                {/* <Products /> */}
                <Categories />
              </div>
            </div>
        </section>
    </>
  )
}

export default AdminProducts