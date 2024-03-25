import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import FolderPage from './pages/FolderPage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<FolderPage />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
