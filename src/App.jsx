import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import LogIn from "./components/LogIn";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./page/Home";
// import './main.css';

function App() {
  return (
    <>
      <main>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>

        </div>
      </main>
    </>
  );
}

export default App;
