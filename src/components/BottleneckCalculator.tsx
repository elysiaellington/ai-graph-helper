import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PerformanceGraph } from './PerformanceGraph';
import { BottleneckIndicator } from './BottleneckIndicator';
import { Recommendations } from './Recommendations';
import { Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface Component {
  name: string;
  score: number;
}

const BottleneckCalculator = () => {
  const [selectedCPU, setSelectedCPU] = useState<string>('');
  const [selectedGPU, setSelectedGPU] = useState<string>('');

  const { data: cpuData, isLoading: cpuLoading } = useQuery({
    queryKey: ['cpu-data'],
    queryFn: async () => {
      // Simulated data fetch - replace with actual CSV parsing
      return [
        { name: 'Intel i9-13900K', score: 95 },
        { name: 'AMD Ryzen 9 7950X', score: 92 },
        { name: 'Intel i7-13700K', score: 88 },
        { name: 'AMD Ryzen 7 7700X', score: 85 },
      ] as Component[];
    },
  });

  const { data: gpuData, isLoading: gpuLoading } = useQuery({
    queryKey: ['gpu-data'],
    queryFn: async () => {
      // Simulated data fetch - replace with actual CSV parsing
      return [
        { name: 'NVIDIA RTX 4090', score: 98 },
        { name: 'AMD RX 7900 XTX', score: 94 },
        { name: 'NVIDIA RTX 4080', score: 90 },
        { name: 'AMD RX 7900 XT', score: 87 },
      ] as Component[];
    },
  });

  const selectedCPUData = cpuData?.find(cpu => cpu.name === selectedCPU);
  const selectedGPUData = gpuData?.find(gpu => gpu.name === selectedGPU);

  const calculateBottleneck = () => {
    if (!selectedCPUData || !selectedGPUData) return null;
    const difference = Math.abs(selectedCPUData.score - selectedGPUData.score);
    return Math.min(difference * 2, 100);
  };

  const bottleneckPercentage = calculateBottleneck();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 neon-glow">
        PC Bottleneck Calculator
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-4">Select CPU</h2>
          {cpuLoading ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <Select value={selectedCPU} onValueChange={setSelectedCPU}>
              <SelectTrigger>
                <SelectValue placeholder="Choose CPU" />
              </SelectTrigger>
              <SelectContent>
                {cpuData?.map((cpu) => (
                  <SelectItem key={cpu.name} value={cpu.name}>
                    {cpu.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </Card>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-4">Select GPU</h2>
          {gpuLoading ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <Select value={selectedGPU} onValueChange={setSelectedGPU}>
              <SelectTrigger>
                <SelectValue placeholder="Choose GPU" />
              </SelectTrigger>
              <SelectContent>
                {gpuData?.map((gpu) => (
                  <SelectItem key={gpu.name} value={gpu.name}>
                    {gpu.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </Card>
      </div>

      {selectedCPUData && selectedGPUData && (
        <div className="space-y-6 animate-fade-in">
          <BottleneckIndicator percentage={bottleneckPercentage || 0} />
          <PerformanceGraph cpuScore={selectedCPUData.score} gpuScore={selectedGPUData.score} />
          <Recommendations
            cpuName={selectedCPUData.name}
            gpuName={selectedGPUData.name}
            bottleneckPercentage={bottleneckPercentage || 0}
          />
        </div>
      )}
    </div>
  );
};

export default BottleneckCalculator;