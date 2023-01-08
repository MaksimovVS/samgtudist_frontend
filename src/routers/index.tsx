import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from './types';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PageHome from '../components/PageHome/PageHome';
import Page404 from '../components/Page404/Page404';

const pages: Page[] = [
  { path: '/', exact: true, component: PageHome },
];

const MyRoutes = () => (
  <BrowserRouter basename='/'>
    <Header />

    <Routes>
      {pages.map(({ component, path }) => {
        const Component = component;
        return <Route key={path} element={<Component />} path={path} />;
      })}
      <Route path='*' element={<Page404 />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default MyRoutes;
