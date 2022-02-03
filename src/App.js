import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import FeedBackData from './data/FeedBackData';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Card from './components/shared/Card';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Posts from './components/Posts';

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedBackStats feedback={feedback} />
                <FeedBackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts/*" element={<Posts />} />
        </Routes>
        <Card>
          <NavLink to="/" className={(isActive) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </Card>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
