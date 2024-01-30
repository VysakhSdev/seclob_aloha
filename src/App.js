import {
  Routes,
  Route,
} from "react-router-dom";
import Desktop from "./pages/Desktop";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
    </Routes>
  );
}
export default App;
