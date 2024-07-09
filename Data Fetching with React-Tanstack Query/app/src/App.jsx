import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ProductsCatalog from './components/ProductsCatalog';
import AddProduct from './components/AddProduct';
import { Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='productsCatalog' element={<ProductsCatalog />} />
      </Routes>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};
export default App;
