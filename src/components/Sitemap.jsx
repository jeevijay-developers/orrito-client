import Link from 'next/link';
import {siteMapData} from '@/service/Data';


export default function SiteMap() {
  return (
    <section className="bg-white text-gray-800 px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 border-t border-gray-200 pt-10">
        {siteMapData.map((section, index) => (
          <div key={index} className="col-span-1">
            <h3 className="font-semibold text-sm sm:text-base mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url} className="hover:text-orange-500 transition no-underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
