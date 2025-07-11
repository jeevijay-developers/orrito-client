'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useBreadcrumb } from '@/context/BreadcrumbContext';
import { useMemo } from 'react';
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
  
  // Don't show breadcrumb on home page
  if (pathname === '/') {
    return null;
  }

  const breadcrumbItems = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // Custom name mappings for better display
    const nameMap = {
      'products': 'Products',
      'solutions': 'Solutions',
      'solar': 'Solar',
      'corporate': 'Corporate',
      'support': 'Support',
      'cart': 'Cart',
      'distribution-enquiry': 'Distribution Enquiry',
      'all-solutions': 'All Solutions',
      'product': 'Product Details',
      'category': 'Category',
      // Add more mappings as needed
    };
    
    // Check if we have custom breadcrumb data for this path
    const customBreadcrumbData = getBreadcrumb(pathname);
    
    // Create breadcrumb items
    return pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const isLast = index === pathSegments.length - 1;
      
      // Format the segment name
      const formatSegment = (str) => {
        // Check if we have custom breadcrumb data and it's the last segment
        if (isLast && customBreadcrumbData && customBreadcrumbData.name) {
          return customBreadcrumbData.name;
        }
        
        // Check if we have a custom mapping
        if (nameMap[str]) {
          return nameMap[str];
        }
        
        // Otherwise format normally
        return str
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
      };
      
      const displayName = formatSegment(segment);
      
      return {
        href,
        name: displayName,
        isLast,
      };
    });
  }, [pathname, getBreadcrumb]);

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-4 fixed top-[114px] left-0 w-full z-30">
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
