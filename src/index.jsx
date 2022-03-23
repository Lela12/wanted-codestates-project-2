import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    {/* <RecoilRoot>
      <Suspense> */}
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
    {/* </Suspense>
    </RecoilRoot> */}
  </React.StrictMode>,
  document.getElementById('root')
);
