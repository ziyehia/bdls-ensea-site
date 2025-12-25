import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import DocItemRoot from '@theme-original/DocItem/Root';

export default function DocItemRootWrapper(props) {
  const { metadata } = useDoc();
  
  // Extract section from the doc path
  // e.g., /docs/hum-ensea/presentation -> 'hum-ensea'
  const pathParts = metadata.unversionedId?.split('/') || [];
  const section = pathParts[0] || '';
  
  // Log for debugging
  if (typeof window !== 'undefined') {
    console.log('Doc path:', metadata.unversionedId);
    console.log('Section:', section);
  }
  
  return (
    <div className={`doc-section doc-section-${section}`}>
      <DocItemRoot {...props} />
    </div>
  );
}
