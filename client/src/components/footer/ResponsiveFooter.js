import React from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

// The below code uses Hooks to check for the device width and load the Desktop or Mobile footer depending on what it returns
const viewportContext = React.createContext({});

// eslint-disable-next-line react/prop-types
const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 992;

  return width < breakpoint ? <MobileFooter /> : <DesktopFooter />;
};

export default function ResponsiveFooter() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
