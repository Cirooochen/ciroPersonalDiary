import { Routes, Route } from "react-router";
import Detail from "./pages/Detail";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import EntryForm from "./layouts/EntryForm";

import { useState } from "react";
const App = () => {
  const [localEntry, setLocalEntry] = useState(
    JSON.parse(localStorage.getItem("Entries")) || []
  ); //when loading, "first check if therea are already existed todos in the storage" ? "save as initial value" : []
  console.log(localEntry);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage localEntry={localEntry} />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
      <Route
        path="/form"
        element={
          <EntryForm localEntry={localEntry} setLocalEntry={setLocalEntry} />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
