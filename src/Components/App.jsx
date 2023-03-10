import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const TodayPage = lazy(() => import("./Pages/TodayPage/TodayPage"));
const ChronologyPage = lazy(() => import("./Pages/ChronologyPage/ChronologyPage"));
const ChooseDatePage = lazy(() => import("./Pages/ChooseDatePage/ChooseDatePage"));

const App = () => {
  return (
   <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path="/stats-of-war" element={<Layout/>}>
        <Route index="today" element={<TodayPage/>}/>
        <Route path="chronology" element={<ChronologyPage/>}/>
        <Route path="choose-a-date" element={<ChooseDatePage/>}/>
      </Route>
    </Routes>
   </Suspense>
  );
}

export default App;