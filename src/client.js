import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

// Default color palette
const DEFAULT_PALETTE = {
  primary: '#8D0004',
  primaryDark: '#7f0004',
  primaryDarker: '#780003',
  primaryDarkest: '#630003',
  primaryLight: '#9b1a1d',
  primaryLighter: '#a22629',
  primaryLightest: '#b84d4f',
  secondary: '#FCBA1C',
  codeBg: 'rgba(141, 0, 4, 0.1)',
};

// Hook that can be used in components
export const useDocSection = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Extract section from pathname
    const pathMatch = location.pathname.match(/\/docs\/([^/]+)/);
    let section = '';
    
    if (pathMatch) {
      section = pathMatch[1]
        .toLowerCase()
        .replace(/'/g, '')
        .replace(/\s+/g, '-');
    }
    
    // Define color palettes for each section
    const palettes = {
      humensea: {
        primary: '#344CA1',
        primaryDark: '#2d418a',
        primaryDarker: '#293a7a',
        primaryDarkest: '#1f2a5c',
        primaryLight: '#4a5fb5',
        primaryLighter: '#556ac1',
        primaryLightest: '#7a8dd4',
        secondary: '#79C0ED',
        codeBg: 'rgba(52, 76, 161, 0.1)',
      },
      // Add more sections here as needed
    };
    
    // Get the palette for this section, or use default
    const palette = palettes[section] || DEFAULT_PALETTE;
    
    // Apply CSS variables directly to the root element
    const root = document.documentElement;
    root.style.setProperty('--ifm-color-primary', palette.primary);
    root.style.setProperty('--ifm-color-primary-dark', palette.primaryDark);
    root.style.setProperty('--ifm-color-primary-darker', palette.primaryDarker);
    root.style.setProperty('--ifm-color-primary-darkest', palette.primaryDarkest);
    root.style.setProperty('--ifm-color-primary-light', palette.primaryLight);
    root.style.setProperty('--ifm-color-primary-lighter', palette.primaryLighter);
    root.style.setProperty('--ifm-color-primary-lightest', palette.primaryLightest);
    root.style.setProperty('--ifm-color-secondary', palette.secondary);
    root.style.setProperty('--docusaurus-highlighted-code-line-bg', palette.codeBg);
  }, [location.pathname]);
};



