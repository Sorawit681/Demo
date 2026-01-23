import { summaryCardItem } from '@/mocks/mock';

const colorMap = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  red: 'bg-red-500',
};

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryCardItem.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`${colorMap[card.color]} relative rounded-2xl p-6 text-white shadow-lg`}
          >
            <div className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/25 rounded-xl p-3">
              <Icon size={26} className="text-white" />
            </div>

            <p className="text-sm opacity-90">{card.title}</p>
            <p className="text-4xl font-bold mt-2">{card.value}</p>
            <p className="text-sm opacity-90 mt-1">{card.sub}</p>
          </div>
        );
      })}
    </div>
  );
}
