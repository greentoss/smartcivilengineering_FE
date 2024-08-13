import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { About, Articles, Cart, ClientError, Contacts, Login, Main, Services, Signup } from '@/pages';


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.articles} element={<Articles />} />
      <Route path={ROUTES.services} element={<Services />} />
      <Route path={ROUTES.contacts} element={<Contacts />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.register} element={<Signup />} />
      <Route path={ROUTES.cart} element={<Cart />} />
      <Route path='*' element={<ClientError />} />
    </Routes>
  );
};

export default AppRouter;
