import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/404";
import PracticeHeader from "./components/PracticeHeader";
import "./style/common.css";
import Student from "./pages/Student";

function App() {
  return (
    <>
      <PracticeHeader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
