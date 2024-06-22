import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Pagina2 from './pages/Pagina2';
import Tracker from './pages/Tracker';


const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/pagina2" element={<Pagina2/>} />
                <Route path="/tracker" element={<Tracker/>} />
                <Route path="*" element={<div>404</div>} />
                
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;