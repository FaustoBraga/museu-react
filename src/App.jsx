import { QueryClientProvider } from 'react-query';
import { AuthContext } from './contexts/AuthContext';
import Ways from './routes';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../public/digital.css';
import { queryClient } from './service';
import { useState } from 'react';

const App = () => {
  const [ estaLogado, setEstalogado ] = useState(true);
  const contexts = {
    estaLogado,
    setEstalogado
  }
  return(
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={contexts}>
            <Ways />
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
