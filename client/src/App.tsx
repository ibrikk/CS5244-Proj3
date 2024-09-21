import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
      <Router>
        <AppHeader />
        <Routes>
            {/* you need to include a route here that takes you to your homepage forexample when the logo is clicked*/}
            <Route path="/categories" element={<CategoryBookList />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />

      </Router>
  );
}

export default App;

