import { Routes, Route } from "react-router-dom";
import { CallbackPage } from "./pages/CallbackPage";
import NotFoundPage from "./pages/NotFoundPage";
import MyDeck from "./pages/MyDeckPage";
import { useAuth0 } from "@auth0/auth0-react";
import LoaderPage from "./pages/LoaderPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  if (!error && isLoading) {
    return (
      <div>
        <LoaderPage />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MyDeck />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
