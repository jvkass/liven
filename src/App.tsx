import Router from './Router';
import GlobalStyles from './styles/global';

import { CartProvider } from './hooks/useCart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <GlobalStyles />
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;
