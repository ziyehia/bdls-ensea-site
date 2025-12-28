import React from 'react';
import { useDocSection } from '@site/src/client';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  useDocSection();
  
  return (
    <>
      <Layout {...props} />
    </>
  );
}
