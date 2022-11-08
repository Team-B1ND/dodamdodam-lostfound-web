import { Route, Routes } from "react-router-dom";
import DetailPage from "../../pages/DetailPage";
import HomePage from "../../pages/HomePage";
import MyLostFoundPage from "../../pages/MyLostFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:lostfoundid" element={<DetailPage />} />
      <Route path="/my" element={<MyLostFoundPage />} />
    </Routes>
  );
};

export default Router;
