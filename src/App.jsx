import { useAuthContext } from "./contexts/useAuthContext";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      <MainHeader />
      <main className="mt-24">
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
