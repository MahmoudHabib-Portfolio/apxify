import { useRef } from 'react';
import {Footer, Home, NavBar, AppDrawer} from '../components';

const Layout = () => {

  const getNav = useRef(null);
  
  return (
    <>
      <AppDrawer />
      <NavBar getNav={getNav} />
      <Home getNav={getNav} />
      <Footer />
    </>
  )
}

export default Layout;