import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import App from './App'
import SplashScreen from './components/SplashScreen';

function Routing() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    return (
        <>
        {loading ? (
        <SplashScreen />
      ) : (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
            </Routes>
        </Router>)}
        </>
    );
}

export default Routing;
