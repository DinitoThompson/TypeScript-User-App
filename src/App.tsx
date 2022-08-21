import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import ExploreUser from "./pages/ExploreUser";
// Context
import { UserContext, UserState } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<UserState>({
    picture: "Change",
    name: "Change",
    gender: "Change",
    age: "Change",
    email: "Change",
    phone: "Change",
    country: "Change",
  });
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home setUser={setUser} />} />
          <Route path="/explore" element={<ExploreUser />} />
        </Routes>
      </UserContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
