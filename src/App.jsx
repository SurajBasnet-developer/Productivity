import "./App.css";
import Productivity from "./components/Productivity";
import { QueryClient, QueryClientProvider } from "react-query";
const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <div className="App">
        <Productivity />
      </div>
    </QueryClientProvider>
  );
}

export default App;
