import Main from './components/main-page/main';
import Nav from './components/nav/nav';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Order from './components/order/order';
import Contact from './components/contact/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Menu />
      <About />
      <Order />
      <Contact />
    </div>
  );
}

export default App;
