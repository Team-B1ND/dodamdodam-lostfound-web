import { Route, Routes } from "react-router-dom";
import DetailPage from "../../pages/DetailPage";
import HomePage from "../../pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:lostfoundid" element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
