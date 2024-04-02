import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
