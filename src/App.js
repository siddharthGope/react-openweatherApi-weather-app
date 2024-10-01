import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Banner from "./components/Banner";
import List from "./components/List";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomeBanner />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <Banner />
                <List />
              </>
            }
          ></Route>
        </Routes>
      </Router>
      {/* <Header />
      <HomeBanner />
      <Login /> 
      <Banner />
      <List />*/}
    </div>
  );
}

export default App;
