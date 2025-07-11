'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useBreadcrumb } from '@/context/BreadcrumbContext';
import { useMemo, useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const DynamicBreadcrumb = () => {
  const pathname = usePathname();
  const { getBreadcrumb } = useBreadcrumb();
  const [show, setShow] = useState(true);

  // Hide breadcrumb when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show breadcrumb on home page
  if (pathname === '/') {
    return null;
  }

  const breadcrumbItems = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // Static name mappings for certain paths
    const staticNameMap = {
      'products': 'Products',
      'solutions': 'Solutions',
      'solar': 'Solar',
      'corporate': 'Corporate',
      'support': 'Support',
      'cart': 'Cart',
      'distribution-enquiry': 'Distribution Enquiry',
      'all-solutions': 'All Solutions',
    };
    
    // Check if we have custom breadcrumb data for this path
    const customBreadcrumbData = getBreadcrumb(pathname);
    
    // Create breadcrumb items
    return pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const isLast = index === pathSegments.length - 1;
      
      // If it's the last segment and we have custom data, use that
      if (isLast && customBreadcrumbData && customBreadcrumbData.name) {
        return {
          href,
          name: customBreadcrumbData.name,
          isLast,
        };
      }
      
      // For the first segment, check static mappings
      let displayName;
      if (index === 0 && staticNameMap[segment]) {
        displayName = staticNameMap[segment];
      } else {
        // Otherwise, format normally
        displayName = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }
      
      return {
        href,
        name: displayName,
        isLast,
      };
    });
  }, [pathname, getBreadcrumb]);

  return (
    <div
      className={`bg-gray-50 border-b border-gray-200 py-4 fixed top-[114px] left-0 w-full z-30 transition-all duration-300 ${
        show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-gray-500 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {breadcrumbItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {item.isLast ? (
                    <BreadcrumbPage className="text-gray-900 font-medium">
                      {item.name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.href} className="text-gray-500 hover:text-orange-500 transition-colors">
                        {item.name}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default DynamicBreadcrumb;
