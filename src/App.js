//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import Home from './components/Home';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

export default function App() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="appName">Eat that frog!</span>
        </div>
      </nav>
      <LoginButton />
      <LogoutButton />
    </>
  );
}
