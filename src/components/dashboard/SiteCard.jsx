import { Link } from 'react-router-dom';

export function SiteCard({ site }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-2"
      style={{ borderColor: site.theme.primaryColor }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{site.name}</h3>
        <div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: site.theme.primaryColor }}
        />
      </div>
      
      <p className="text-gray-600 mb-4">{site.metadata.description}</p>
      
      <div className="flex gap-2 mb-4">
        <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-700">
          {site.id}
        </span>
      </div>
      
      <div className="flex gap-3">
        <Link
          to={`/editor/${site.id}`}
          className="flex-1 text-center py-2 px-4 rounded-md font-medium transition-colors"
          style={{
            backgroundColor: site.theme.primaryColor,
            color: 'white'
          }}
        >
          Edit Site
        </Link>
        <a
          href={`http://${site.domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 border-2 rounded-md font-medium hover:bg-gray-50 transition-colors"
          style={{ borderColor: site.theme.primaryColor, color: site.theme.primaryColor }}
        >
          Preview
        </a>
      </div>
    </div>
  );
}
