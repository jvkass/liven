import Router from './Router';
import GlobalStyles from './styles/global';
import Header from './components/Header';

import { CartProvider } from './hooks/useCart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;
