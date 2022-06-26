import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { RQSuperHeroesPage } from "./components/RQSuperHeroesPage";
import { SingleSuperHero } from "./components/RQSingleSuperHeroPage";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to App
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-super-hero/:heroId"
              element={<SingleSuperHero />}
            />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
