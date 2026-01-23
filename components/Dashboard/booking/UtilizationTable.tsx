import { utilization } from '@/mocks/mock';

const getBarColor = (value: number) => {
  if (value >= 75) return 'bg-green-500';
  if (value >= 55) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getStatus = (value: number) => {
  if (value >= 75)
    return {
      label: 'ดีเยี่ยม',
      cls: 'bg-green-100 text-green-700',
    };
  if (value >= 55)
    return {
      label: 'ปานกลาง',
      cls: 'bg-yellow-100 text-yellow-700',
    };
  return {
    label: 'ต่ำ',
    cls: 'bg-red-100 text-red-700',
  };
};

const getRankStyle = (rank: number) => {
  if (rank === 1) return 'bg-yellow-400 text-white';
  if (rank === 2) return 'bg-gray-400 text-white';
  if (rank === 3) return 'bg-orange-500 text-white';
  return 'bg-blue-100 text-blue-700';
};

export default function UtilizationTable() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-bold mb-6 text-lg">
        การใช้งานในแต่ละศูนย์ย่อย
      </h3>

      {/* Header */}
      <div className="grid grid-cols-[80px_1.5fr_3fr_1fr] text-sm font-semibold text-gray-600 border-b pb-3">
        <div>อันดับ</div>
        <div>ศูนย์ย่อย</div>
        <div>อัตราการใช้งาน</div>
        <div>สถานะ</div>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {utilization.map((u) => {
          const status = getStatus(u.utilization);

          return (
            <div
              key={u.rank}
              className="grid grid-cols-[80px_1.5fr_3fr_1fr] items-center py-4"
            >
              {/* Rank */}
              <div>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${getRankStyle(
                    u.rank
                  )}`}
                >
                  {u.rank}
                </div>
              </div>

              {/* Center */}
              <div className="font-semibold">{u.center}</div>

              {/* Progress */}
              <div className="flex items-center gap-4">
                <div className="w-56 h-3 bg-gray-200 rounded-full">
                  <div
                    className={`h-3 rounded-full ${getBarColor(
                      u.utilization
                    )}`}
                    style={{ width: `${u.utilization}%` }}
                  />
                </div>
                <span className="font-semibold">
                  {u.utilization}%
                </span>
              </div>

              {/* Status */}
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${status.cls}`}
                >
                  {status.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
