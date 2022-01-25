import { HomePage } from "./containers/homepage/Homepage";
import { SearchResult } from "./containers/searchResult/SearchResult";
import { StreamPage } from "./containers/streamPage/StreamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./containers/signIn/SignIn";
import AdminDashboard from "./containers/adminDashboard/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:keyword/page=:page" element={<SearchResult />} />
        <Route path="/stream/:id" element={<StreamPage />} />
        <Route path="/stream/:source/:id" element={<StreamPage />} />
        <Route path="/admin/login" element={<SignIn />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
