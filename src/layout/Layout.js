import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { useMediaType } from '../components/Responsiver';
import Sidebar from '../components/sidebar/Sidebar';
import { Div } from '../style/StyledElements';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
// import { Toaster } from 'react-hot-toast';

function Layout() {
    const [sidebarIsOpen, setShowSidebar] = useState(false);
    const mainContent = useRef(null);
    const location = useLocation();
    const { isDesktop } = useMediaType();
    const {theme,themeStyles}=useTheme()

    useEffect(() => {
        document.body.style.overflow = sidebarIsOpen ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [sidebarIsOpen]);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const closeSidebar = () => {
        if (sidebarIsOpen) setShowSidebar(false);
    };

    return (
        <Div bg={themeStyles.backgroundColor} color={themeStyles.color} className='main-container'>
            {/* <Mouse /> */}

            <Navbar
                toggleSidebar={() => setShowSidebar(!sidebarIsOpen)}
                closeSidebar={closeSidebar}
            />
            {!isDesktop && (
                <Sidebar show={sidebarIsOpen} closeSidebar={closeSidebar} />
                // <></>
            )}
            <Div ref={mainContent} fontFamily='normal'>
                <Outlet />
            </Div>
            {/* <Toaster /> */}
            <Footer />
        </Div>
    );
}

export default Layout;
