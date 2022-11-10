import { Route, Routes } from "react-router-dom";
import DetailPage from "../../pages/DetailPage";
import HomePage from "../../pages/HomePage";
import MyLostFoundPage from "../../pages/MyLostFoundPage";
import WritePage from "../../pages/WritePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:lostfoundid" element={<DetailPage />} />
      <Route path="/my" element={<MyLostFoundPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/write/:lostfoundid" element={<WritePage />} />
    </Routes>
  );
};

export default Router;
