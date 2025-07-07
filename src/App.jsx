import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Detail from "./pages/Detail";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import EntryForm from "./layouts/EntryForm";
import PageWrapper from "./context/PageWrapper";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [localEntry, setLocalEntry] = useState(
    JSON.parse(localStorage.getItem("Entries")) || []
  ); //when loading, "first check if therea are already existed todos in the storage" ? "save as initial value" : []
  console.log(localEntry);

  const [showSplash, setShowSplash] = useState(true); //Splash Screen State

  return (
    <AnimatePresence className="min-h-screen" mode="wait">
      {/* AnimatePresence wraps the splash */}
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Only show Routes when splash is gone */}
      {!showSplash && (
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <MainLayout />
              </PageWrapper>
            }
          >
            <Route
              path="/"
              element={<HomePage localEntry={localEntry} />}
            ></Route>
            <Route
              path="/entry/:id"
              element={
                <PageWrapper>
                  <Detail />
                </PageWrapper>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            ></Route>
          </Route>
          <Route
            path="/form"
            element={
              <PageWrapper>
                <EntryForm
                  localEntry={localEntry}
                  setLocalEntry={setLocalEntry}
                />
              </PageWrapper>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </AnimatePresence>
  );
};

export default App;
