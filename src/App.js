import { ShopProvider } from './context/ShopProvider';
import {Routing} from './routes/Routing';

function App() {

  return (
      <ShopProvider>
        <Routing/>
      </ShopProvider>
  );
}

export default App;
