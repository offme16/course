import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Main from './pages/main/Main';
import Regist from './pages/reg/Regist';
import AuthC from './pages/auth/AuthC';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Regist />} />
          <Route path="/auth" element={<AuthC />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
