import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { useDocSection } from '@site/src/client';
import DocRoot from '@theme-original/DocRoot';

export default function DocRootWrapper(props) {
  useDocSection();
  
  return (
    <>
      <DocRoot {...props} />
    </>
  );
}
