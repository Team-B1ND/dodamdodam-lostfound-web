import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PageTemplate from "./components/Common/PageTemplate";
import ThemeProviderContainer from "./components/Common/ThemeProviderContainer";
import Router from "./components/Router/Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter basename="/lostfound">
          <ThemeProviderContainer>
            <PageTemplate>
              <Router />
            </PageTemplate>
          </ThemeProviderContainer>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
