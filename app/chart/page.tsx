'use client';

import LineChartCard from '@/components/Dashboard/chart/LineChartCard';
import { lineChartData } from '@/mocks/mock';
import { Layout } from '@/components/Layout/Layout';

export default function DashboardPage() {
  return (
    <Layout>
    <div style={{ padding: 24 }}>
      <h2>ผู้ใช้ต่อสัปดาห์</h2>

      <div style={{ width: '100%', height: 350 }}>
        <LineChartCard data={lineChartData} />
      </div>
    </div>
    </Layout>
  );
}
