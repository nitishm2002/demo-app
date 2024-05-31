import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          {/* <Route path="/res" element={<Register />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
