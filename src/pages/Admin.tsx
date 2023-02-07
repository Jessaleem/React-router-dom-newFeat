import React from 'react';
import { useParams } from 'react-router-dom';

export default function Admin() {
  const { id } = useParams();
  return <div>Admin {id}</div>;
}
