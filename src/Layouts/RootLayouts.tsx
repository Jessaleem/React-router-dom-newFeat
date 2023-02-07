import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function RootLayouts() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/dashboard/client'>Client</Link>
        <Link to='/dashboard/admin'>Admin</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
