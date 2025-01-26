import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface RecommendationsProps {
  cpuName: string;
  gpuName: string;
  bottleneckPercentage: number;
}

export const Recommendations = ({
  cpuName,
  gpuName,
  bottleneckPercentage,
}: RecommendationsProps) => {
  const getRecommendations = () => {
    if (bottleneckPercentage <= 5) {
      return {
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        message: "Great combination! These components are well-matched.",
        details: "You can expect optimal performance from this setup.",
      };
    }

    if (bottleneckPercentage <= 10) {
      return {
        icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
        message: "Slight mismatch, but still a good combination.",
        details: "Consider minor upgrades in future but not urgent.",
      };
    }

    return {
      icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      message: "Significant performance mismatch detected.",
      details: "Consider upgrading the lower-performing component.",
    };
  };

  const recommendation = getRecommendations();

  return (
    <Card className="glass-card p-6">
      <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          {recommendation.icon}
          <div>
            <p className="font-medium">{recommendation.message}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {recommendation.details}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};