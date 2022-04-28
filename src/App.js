import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/scss/styles.scss';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { AboutUs, Home, UserList } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
