import React from 'react';
import { useLocation } from '@docusaurus/router';
import DocItemRoot from '@theme-original/DocItem/Root';

export default function DocItemRootWrapper(props) {
  const location = useLocation();
  
  // Extract section from the URL path
  // e.g., /bdls-ensea-site/docs/Hum'ENSEA/Présentation -> 'hum-ensea'
  const pathMatch = location.pathname.match(/\/docs\/([^/]+)/);
  let section = '';
  
  if (pathMatch) {
    // Convert to lowercase and replace apostrophes with nothing, spaces/capitals with nothing
    section = pathMatch[1]
      .toLowerCase()           // hum'ensea
      .replace(/'/g, '')       // humensea
      .replace(/\s+/g, '-');   // handle spaces if any
  }
  
  return (
    <div className={`doc-section doc-section-${section}`}>
      <DocItemRoot {...props} />
    </div>
  );
}
