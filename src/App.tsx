import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Add from './pages/Add';
import {ErrorBoundary} from 'react-error-boundary';
import Error from './pages/Error';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
       <ConnectedRouter history={history} >
        <Routes >
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
    </ConnectedRouter >
>
    </ErrorBoundary>
 
  )
}

export default App;
