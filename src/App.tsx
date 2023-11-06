import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import NewRegistration from './pages/NewRegistration';
import NotFound from './pages/NotFound';

function App() {
  return (

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/registration-database/new-registration' element={<NewRegistration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
