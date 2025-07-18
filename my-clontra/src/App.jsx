import "./App.css";
import HomeBanner from "./components/HomeBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomeBanner />} />
            <Route path="/menu/:type" element={<CategoryPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
