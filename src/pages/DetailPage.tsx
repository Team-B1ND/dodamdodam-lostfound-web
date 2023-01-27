//import Detail from "../components/Detail";
import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
const Detail = lazy(()=>import('../components/Detail'));
const DetailPage = () => {
  return(
    <Detail />
  );
};

export default DetailPage;
