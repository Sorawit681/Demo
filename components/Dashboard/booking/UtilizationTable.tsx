import { utilization } from './mock';

export default function UtilizationTable() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-bold mb-6">การใช้งานในแต่ละศูนย์ย่อย</h3>
      <div className="space-y-4">
        {utilization.map((u) => (
          <div key={u.rank}>
            <div className="flex justify-between mb-1 text-sm">
              <span className="font-medium">{u.center}</span>
              <span className="font-bold">{u.utilization}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full">
              <div
                className={`h-3 rounded-full ${
                  u.utilization >= 75
                    ? 'bg-green-500'
                    : u.utilization >= 50
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${u.utilization}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
