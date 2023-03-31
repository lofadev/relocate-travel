import { BrowserRouter, Route, Routes } from "react-router-dom";

import Empty from "./pages/Empty/Empty";
import { publicRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
