import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/HomePage/HomePage';
import NotesPage from './pages/NotesPage/NotesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global-styles.scss';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
