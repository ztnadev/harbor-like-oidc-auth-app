import { Folder, Package, Users, HardDrive, TrendingUp, Download } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Projects', value: '12', icon: Folder, change: '+2 this month', color: 'blue' },
    { label: 'Repositories', value: '48', icon: Package, change: '+8 this week', color: 'green' },
    { label: 'Users', value: '156', icon: Users, change: '+12 this month', color: 'purple' },
    { label: 'Storage Used', value: '2.4 TB', icon: HardDrive, change: '68% capacity', color: 'orange' },
  ];

  const recentActivity = [
    { action: 'Image pushed', repo: 'project-alpha/frontend', user: 'john.doe', time: '5 minutes ago' },
    { action: 'Project created', repo: 'project-beta', user: 'jane.smith', time: '1 hour ago' },
    { action: 'Image pulled', repo: 'project-alpha/backend', user: 'bob.wilson', time: '2 hours ago' },
    { action: 'User added', repo: 'project-gamma', user: 'admin', time: '3 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-1">Overview of your Harbor Registry</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            purple: 'bg-purple-500',
            orange: 'bg-orange-500',
          }[stat.color];

          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-2 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </p>
                </div>
                <div className={`${colorClasses} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.repo}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      by {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Downloaded Images</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: 'project-alpha/frontend', pulls: '1,234', size: '156 MB' },
                { name: 'project-beta/api', pulls: '892', size: '89 MB' },
                { name: 'project-gamma/worker', pulls: '654', size: '234 MB' },
                { name: 'project-alpha/backend', pulls: '543', size: '178 MB' },
              ].map((image, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <Package className="w-8 h-8 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-900 font-medium">{image.name}</p>
                      <p className="text-xs text-gray-500">{image.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Download className="w-4 h-4" />
                    <span>{image.pulls}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
