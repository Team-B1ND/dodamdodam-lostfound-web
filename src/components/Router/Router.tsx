import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../../pages/DetailPage";
import HomePage from "../../pages/HomePage";
import MyLostFoundPage from "../../pages/MyLostFoundPage";
import WritePage from "../../pages/WritePage";
import { usePostModuleLog } from "../../quries/log/log.query";

const Router = () => {
  const postModuleLogMutation = usePostModuleLog();

  useEffect(() => {
    postModuleLogMutation.mutate({
      description: "분실물/습득물 페이지 접속",
      moduleName: "분실물/습득물 접속",
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:lostfoundId" element={<DetailPage />} />
      <Route path="/my" element={<MyLostFoundPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/write/:lostfoundId" element={<WritePage />} />
    </Routes>
  );
};

export default Router;
