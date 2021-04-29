import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { loadPosts } from './components/store';
import Homepage from './pages/homepage.jsx'

const App = (props) => {
  
  const { onLoadPosts } = props;

  useEffect(() => {
    onLoadPosts()
  }, [onLoadPosts])
  return (
    <main className="App">
      <Homepage />
    </main>
  );
}

const mapDispatchToProps = {
  onLoadPosts: loadPosts
}

export default connect(null, mapDispatchToProps)(App);
