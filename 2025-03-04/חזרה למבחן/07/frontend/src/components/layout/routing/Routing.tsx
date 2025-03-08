import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Add from "../../pages/add/add";
import List from "../../pages/list/List";

export default function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list" />} />
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
