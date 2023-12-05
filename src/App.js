import Card from './components/Card'
import Header from './components/Header'
import React from 'react';
import Drawer from './components/Drawer/Drawer.js'

function App() {
  const [items, setItems] = React.useState([]);
  const [cardOpened, isOpened] = React.useState(false);

  React.useEffect(() =>{
    fetch("https://6543ae8501b5e279de20cbb5.mockapi.io/items").then((res) => {
    return res.json();
  }).then((json) =>{
    setItems(json);
  });
  }, []);

  return (<div className="App clear">
    <Drawer />
    <Header/>
    <div className="content p-40">
      <div className="mb-40 d-flex justify-between align-center">
        <h1 >Компании Участники</h1>
        <div className="Search-block d-flex align-center">
          <img src="/img/Btn/search.svg"></img>
          <input placeholder="Поиск..."></input>
        </div>
      </div>
      <div className="contentItem d-flex flex-wrapper">
        {
          items.map((obj) => <Card title={obj.name} date={obj.date} imgUrl={obj.imgUrl} onClickCard={()=> cardOpened(!isOpened)}/>)
        }
      </div>
    </div> 
  </div>
  );
}
export default App;
