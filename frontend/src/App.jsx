

import {Route,BrowserRouter as Router,Routes} from "react-router-dom"
import './App.css'
import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import { AuthProvider } from "./context/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import HomeComponent from "./pages/home";
import History from "./pages/history";

const App = () => {
  return (
    < div className="App">
    <Router>
      <AuthProvider>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<LandingPage />}/>

        <Route path="/auth" element={< Authentication/>} />

        <Route path="/home" element={<HomeComponent />} />
        <Route path="/history" element={<History />}/>
        <Route path="/:url" element={<VideoMeetComponent />} />
      </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App