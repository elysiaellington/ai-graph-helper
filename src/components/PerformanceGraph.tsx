import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PerformanceGraphProps {
  cpuScore: number;
  gpuScore: number;
}

export const PerformanceGraph = ({ cpuScore, gpuScore }: PerformanceGraphProps) => {
  const data = [
    {
      name: 'CPU',
      score: cpuScore,
      color: '#00f2fe',
    },
    {
      name: 'GPU',
      score: gpuScore,
      color: '#4facfe',
    },
  ];

  return (
    <Card className="glass-card p-6">
      <h2 className="text-xl font-semibold mb-6">Performance Comparison</h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
            />
            <Bar
              dataKey="score"
              fill="url(#colorGradient)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="100%" stopColor="#4facfe" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};