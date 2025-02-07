import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import Dashboard from "./done_comp/dashboard";
import WorkSpace from './done_comp/workSpace';
import Boards from './done_comp/boards';

function App() {
  return (
    <Router>
      <Provider>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="workspace" element={<WorkSpace />} />
            <Route path="boards" element={<Boards />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
