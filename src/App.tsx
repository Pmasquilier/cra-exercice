import { Routes, Route } from "react-router-dom";
import Home from "./pages/LoginPage";
import { CallbackPage } from "./pages/CallbackPage";
import NotFoundPage from "./pages/NotFoundPage";
import MyDeck from "./pages/MyDeckPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/my-deck" element={<MyDeck />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
