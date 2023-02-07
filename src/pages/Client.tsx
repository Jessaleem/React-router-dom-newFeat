import React from 'react';
import { useParams } from 'react-router-dom';

export default function Client() {
  const { id } = useParams();

  return <div>Client {id}</div>;
}
