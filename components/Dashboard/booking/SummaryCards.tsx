import { summaryCards } from './mock';

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {summaryCards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white rounded-2xl p-6 shadow`}
        >
          <p className="text-sm opacity-90">{card.title}</p>
          <p className="text-4xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
