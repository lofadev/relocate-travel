import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import Empty from "./pages/Empty/Empty";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let page;
            if (route.component) {
              page = route.component;
            } else {
              page = <Empty />;
            }

            return <Route key={index} path={route.path} element={page}></Route>;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
