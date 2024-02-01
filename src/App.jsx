import { useState } from 'react'
import { QueryClientProvider } from 'react-query';
import { AuthContext } from './contexts/AuthContext';
import Ways from './routes';
import { queryClient } from './service';

function App() {
  return(
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{}}>
          <PrimeReactProvider>
            <Ways />
          </PrimeReactProvider>
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App
