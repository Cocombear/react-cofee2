import Card from './components/Card/Card.js'
import Header from './components/Header/Header.js'
import Drawer from './components/Drawer/Drawer.js'

function App() {
  return (<div className="App clear">
    <Drawer />
    <Header />
    <div className="content p-40">
      <div className="mb-40 d-flex justify-between align-center">
        <h1 >СОРТА НЕДЕЛИ</h1>
        <div className="Search-block d-flex align-center">
          <img src="/img/Btn/search.svg"></img>
          <input placeholder="Поиск..."></input>
        </div>
      </div>
      <div className='d-flex'>
        <Card />
      </div>
    </div>
  </div>
  );
}
export default App;
