import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function AuthLayouts() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Outlet />
    </div>
  );
}
