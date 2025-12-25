import { SiteCard } from '../components/dashboard/SiteCard';
import mockSites from '../data/mock-sites.json';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Nota Admin
          </h1>
          <p className="text-xl text-gray-600">
            Manage your restaurant websites with our drag-and-drop page builder
          </p>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSites.sites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">
                {mockSites.sites.length}
              </div>
              <div className="text-gray-600 mt-1">Active Sites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">10</div>
              <div className="text-gray-600 mt-1">Components Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">∞</div>
              <div className="text-gray-600 mt-1">Design Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
