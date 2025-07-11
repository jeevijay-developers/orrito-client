'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const BreadcrumbContext = createContext();

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};

export const BreadcrumbProvider = ({ children }) => {
  const [customBreadcrumbs, setCustomBreadcrumbs] = useState({});

  const setBreadcrumb = useCallback((path, breadcrumbData) => {
    setCustomBreadcrumbs(prev => ({
      ...prev,
      [path]: breadcrumbData
    }));
  }, []);

  const getBreadcrumb = useCallback((path) => {
    return customBreadcrumbs[path];
  }, [customBreadcrumbs]);

  return (
    <BreadcrumbContext.Provider value={{ setBreadcrumb, getBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
