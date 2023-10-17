import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainProvider } from "./context/MainContext";
import { Layout } from "./components";
import { IndexPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <MainProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/index" replace />} />
            <Route path="*" element={<Navigate to="/index" replace />} />
            <Route path="/index" element={<IndexPage />} />
          </Route>
        </Routes>
      </MainProvider>
    </BrowserRouter>
  );
}

export default App;
