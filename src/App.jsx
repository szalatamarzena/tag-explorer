import TagBrowser from './components/TagBrowser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TagBrowser />
    </QueryClientProvider>
  );
};

export default App;
