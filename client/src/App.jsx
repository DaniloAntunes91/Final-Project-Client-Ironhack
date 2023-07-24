import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/indexpage';
import LoginPage from './pages/loginPage';
// import Layout from './Layout';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
     
    </Routes>
  );
}

export default App;
