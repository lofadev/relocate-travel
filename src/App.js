import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { publicRoutes } from "./routes/routes";
import Empty from "./pages/Empty/Empty";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    function handleRouteChange() {
      <Helmet>
        <link rel="shortcut icon" href="../src/assets/imgs/favicon.png" type="image/x-icon" />
      </Helmet>;
    }
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

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
