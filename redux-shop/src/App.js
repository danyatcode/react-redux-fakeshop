import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ItemDetails from './components/ItemDetails';
import ListProduct from './components/ListProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="react-redux-fakeshop/" exact element={<ListProduct/>}/>
          <Route path="react-redux-fakeshop/product/:productId" exact element={<ItemDetails/>}/>
          <Route>404 Not Found</Route>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
