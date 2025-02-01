import './App.css';
import { Provider } from "./components/ui/provider"
import  Dashboard from "./done_comp/dashboard"
function App({ Component, pageProps }) {
  return (
    <Provider>
      <Dashboard>

      </Dashboard>
    </Provider>
  );
}

export default App;
