import './App.css';
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
