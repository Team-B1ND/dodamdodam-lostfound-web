import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PageTemplate from "./components/Common/PageTemplate";
import ThemeProviderContainer from "./components/Common/ThemeProviderContainer";
import Router from "./components/Router/Router";
import useTokenCheck from "./hooks/auth/useTokenCheck";
function App() {
  const queryClient = new QueryClient();
  useTokenCheck();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer />
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
