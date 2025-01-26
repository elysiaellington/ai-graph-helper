import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface BottleneckIndicatorProps {
  percentage: number;
}

export const BottleneckIndicator = ({ percentage }: BottleneckIndicatorProps) => {
  const getBottleneckSeverity = (percentage: number) => {
    if (percentage <= 5) return 'Optimal Match';
    if (percentage <= 10) return 'Minor Bottleneck';
    if (percentage <= 20) return 'Moderate Bottleneck';
    return 'Severe Bottleneck';
  };

  const severity = getBottleneckSeverity(percentage);

  return (
    <Card className="glass-card p-6">
      <h2 className="text-xl font-semibold mb-4">Bottleneck Analysis</h2>
      <div className="space-y-4">
        <Progress value={percentage} className="h-3" />
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            {severity}
          </span>
          <span className="text-sm font-medium">
            {percentage.toFixed(1)}%
          </span>
        </div>
      </div>
    </Card>
  );
};