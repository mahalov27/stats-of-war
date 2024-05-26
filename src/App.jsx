import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const TodayPage = lazy(() => import("./pages/TodayPage/TodayPage"));
const ChronologyPage = lazy(() =>
  import("./pages/ChronologyPage/ChronologyPage")
);
const ChooseDatePage = lazy(() =>
  import("./pages/ChooseDatePage/ChooseDatePage")
);

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodayPage />} />
          <Route path="chronology" element={<ChronologyPage />} />
          <Route path="choose-a-date" element={<ChooseDatePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
