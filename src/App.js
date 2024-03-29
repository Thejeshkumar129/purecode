import logo from './logo.svg';
import './App.css';
import Widget from './widget/page.jsx';
import Navbar from './layout/Footer.jsx';
// import VerticalMenu from './layout/BackToTop.jsx';
function App() {
  return (
    <>
    {/* <VerticalMenu/> */}
    <Widget />
    <Navbar/>
    </>
  );
}

export default App;
