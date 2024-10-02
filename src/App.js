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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <Banner />
                <List title="Trending Now" param="trending" />
                <List title="Netflix Originals" param="originals" />
                <List title="Now Playing" param="now_playing" />
                <List title="Popular" param="popular" />
                <List title="Top rated" param="top_rated" />
                <List title="Upcoming" param="upcoming" />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
