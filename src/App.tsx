import Router from './Router';
import GlobalStyles from './styles/global';
import Header from './components/Header';

import { CartProvider } from './hooks/useCart';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Router />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </div>
  );
}

export default App;
