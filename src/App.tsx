import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";

import About_page from "./pages/aboutpage";
import Contactus_page from "./pages/contactpage";
import Detail_page from "./pages/detailspage";
import Countdown from "./pages/commingsoon";

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/portfolio' element={<Countdown />} />
        <Route path='/about' element={<About_page />} />
        <Route path='/contact' element={<Contactus_page />} />
        <Route path='/details/:project' element={<Detail_page />} />
      </Routes>
    </>
  );
}

export default App;
