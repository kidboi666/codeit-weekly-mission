import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';
import Homepage from './pages/HomePage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
