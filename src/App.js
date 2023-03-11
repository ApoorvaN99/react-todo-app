import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

export default function App() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <h1 className="appName">EAT THAT FROG!</h1>
        </div>
      </nav>
      <blockquote>
        “If you have to eat two frogs, eat the ugliest one first. This is
        another way of saying that if you have two important tasks before you,
        start with the biggest, hardest, and most important task first.”
      </blockquote>
      <LoginButton />
      <LogoutButton />
    </>
  );
}
