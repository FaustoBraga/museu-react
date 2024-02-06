import { QueryClientProvider } from 'react-query';
import { AuthContext } from './contexts/AuthContext';
import Ways from './routes';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../public/digital.css';
import { queryClient } from './service';

function App() {
  return(
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{}}>
            <Ways />
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App
