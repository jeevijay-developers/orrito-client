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

  // All hooks above, now safe to return null



  const breadcrumbItems = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);

    // Only map static, top-level routes
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

    const customBreadcrumbData = getBreadcrumb(pathname);

    // Handle special case for /products/product/[slug] route
    if (pathSegments.length >= 3 && pathSegments[0] === 'products' && pathSegments[1] === 'product') {
      const items = [];
      
      // Add Products
      items.push({
        href: '/products',
        name: 'Products',
        isLast: false
      });

      // Add Category if available from product data
      if (customBreadcrumbData && customBreadcrumbData.category) {
        const categoryName = customBreadcrumbData.category
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
        
        items.push({
          href: `/products/${customBreadcrumbData.category}`,
          name: categoryName,
          isLast: false
        });
      }

      // Add Product name
      const productName = customBreadcrumbData && (typeof customBreadcrumbData === 'string' ? customBreadcrumbData : customBreadcrumbData.name)
        ? (typeof customBreadcrumbData === 'string' ? customBreadcrumbData : customBreadcrumbData.name)
        : pathSegments[2].replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

      items.push({
        href: '/' + pathSegments.join('/'),
        name: productName,
        isLast: true
      });

      return items;
    }

    // Handle regular routes
    let filteredSegments = pathSegments;

    return filteredSegments.map((segment, index) => {
      const href = '/' + filteredSegments.slice(0, index + 1).join('/');
      const isLast = index === filteredSegments.length - 1;

      // If custom name is set for the last segment, use it
      if (isLast && customBreadcrumbData) {
        const name = typeof customBreadcrumbData === 'string' ? customBreadcrumbData : customBreadcrumbData.name;
        if (name) {
          return { href, name, isLast };
        }
      }

      // Use static name for the first/top-level segment only
      let displayName;
      if (index === 0 && staticNameMap[segment]) {
        displayName = staticNameMap[segment];
      } else {
        // For all other segments, use the actual segment, formatted
        displayName = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }

      return { href, name: displayName, isLast };
    });
  }, [pathname, getBreadcrumb]);

  if (pathname === '/') {
    return null;
  }

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
