import React from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Card from './components/shared/Card';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedBackContext';
import AboutIconLink from './components/AboutIconLink';
import Posts from './components/Posts';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts/*" element={<Posts />} />
          </Routes>
          <Card>
            <NavLink
              to="/"
              className={(isActive) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
