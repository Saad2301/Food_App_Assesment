import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeDetail from './Pages/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
