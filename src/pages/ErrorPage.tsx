import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops an error has ocurred</h1>
        <p>
          {error.status} {error.statusText}
        </p>
      </div>
    );
  }
  return <h1>Oops an error has ocurred</h1>;
}
