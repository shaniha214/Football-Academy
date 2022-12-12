import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/Classes';
import PlaygroundToRentPage from './pages/PlaygroundToRent';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/rent-playGround"
          element={<PlaygroundToRentPage />}
        ></Route>
        <Route path="/classes" element={<ClassesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
