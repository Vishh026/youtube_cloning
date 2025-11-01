import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const App = () => {
  
  return (
    <div className="bg-[#0f0f0f] text-white">
      <Head />
      <Routes>
    <Route path="/" element={<Body />}>
      <Route index element={<MainContainer />} />
      <Route path="/watch" element={<WatchPage />} />
    </Route>
  </Routes>
    </div>
  );
};

export default App;
