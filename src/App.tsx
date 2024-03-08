import { Provider } from 'react-redux';
import { Header } from './components/header/Header';
import { ProductList } from './components/productList/ProductList';
import { GlobalStyles } from './styles/GlobalStyles';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductList />
      
      <GlobalStyles />
    </Provider>
  );
}

export default App;
