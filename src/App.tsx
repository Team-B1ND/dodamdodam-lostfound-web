import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PageTemplate from "./components/Common/PageTemplate";
import ThemeProviderContainer from "./components/Common/ThemeProviderContainer";
import Router from "./components/Router/Router";
import useTokenCheck from "./hooks/auth/useTokenCheck";

function App() {
  const queryClient = new QueryClient();
  //전역선언
  // const queryClientRef = useRef<QueryClient>();
  // if (!queryClientRef.current) {
  //   queryClientRef.current = new QueryClient({
  //     defaultOptions: {
  //       queries: {
  //         suspense: true,
  //       },
  //     },
  //   });
  // }
  useTokenCheck();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter> {/*basename="/lostfound"*/}
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
