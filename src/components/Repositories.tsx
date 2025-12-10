import { Plus, Search, Package, Download, Tag, Clock } from 'lucide-react';
import { Repository } from '../types';

export function Repositories() {
  const repositories: Repository[] = [
    {
      id: '1',
      name: 'project-alpha/frontend',
      projectId: '1',
      pullCount: 1234,
      tagCount: 15,
      updatedAt: '2024-12-09T10:30:00Z',
    },
    {
      id: '2',
      name: 'project-alpha/backend',
      projectId: '1',
      pullCount: 892,
      tagCount: 12,
      updatedAt: '2024-12-09T08:15:00Z',
    },
    {
      id: '3',
      name: 'project-beta/api',
      projectId: '2',
      pullCount: 654,
      tagCount: 8,
      updatedAt: '2024-12-08T22:45:00Z',
    },
    {
      id: '4',
      name: 'project-gamma/worker',
      projectId: '3',
      pullCount: 543,
      tagCount: 20,
      updatedAt: '2024-12-08T19:20:00Z',
    },
    {
      id: '5',
      name: 'ml-models/classifier',
      projectId: '4',
      pullCount: 432,
      tagCount: 45,
      updatedAt: '2024-12-07T15:30:00Z',
    },
  ];

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    return `${Math.floor(seconds / 86400)} days ago`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Repositories</h2>
          <p className="text-gray-600 mt-1">Browse and manage container images</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Push Image</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search repositories..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Projects</option>
            <option>project-alpha</option>
            <option>project-beta</option>
            <option>project-gamma</option>
            <option>ml-models</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Repository
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pulls
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {repositories.map((repo) => (
              <tr key={repo.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{repo.name}</div>
                      <div className="text-xs text-gray-500">Container Image</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Tag className="w-4 h-4" />
                    <span>{repo.tagCount}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Download className="w-4 h-4" />
                    <span>{repo.pullCount.toLocaleString()}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{formatTimeAgo(repo.updatedAt)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
