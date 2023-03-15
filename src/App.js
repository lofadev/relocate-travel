import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const page = route.component;

            return <Route key={index} path={route.path} element={page}></Route>;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
