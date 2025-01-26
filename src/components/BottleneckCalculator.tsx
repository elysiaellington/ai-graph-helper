import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PerformanceGraph } from './PerformanceGraph';
import { BottleneckIndicator } from './BottleneckIndicator';
import { Recommendations } from './Recommendations';
import { Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Component {
  brand: string;
  model: string;
  benchmark: number;
}

const BottleneckCalculator = () => {
  const [selectedCPU, setSelectedCPU] = useState<string>('');
  const [selectedGPU, setSelectedGPU] = useState<string>('');

  const { data: cpuData, isLoading: cpuLoading } = useQuery({
    queryKey: ['cpu-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cpu_benchmarks')
        .select('*')
        .order('benchmark', { ascending: false });

      if (error) {
        console.error('Error fetching CPU data:', error);
        throw error;
      }

      return data as Component[];
    },
  });

  const { data: gpuData, isLoading: gpuLoading } = useQuery({
    queryKey: ['gpu-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gpu_benchmarks')
        .select('*')
        .order('benchmark', { ascending: false });

      if (error) {
        console.error('Error fetching GPU data:', error);
        throw error;
      }

      return data as Component[];
    },
  });

  const selectedCPUData = cpuData?.find(cpu => `${cpu.brand} ${cpu.model}` === selectedCPU);
  const selectedGPUData = gpuData?.find(gpu => `${gpu.brand} ${gpu.model}` === selectedGPU);

  const calculateBottleneck = () => {
    if (!selectedCPUData || !selectedGPUData) return null;
    const difference = Math.abs(selectedCPUData.benchmark - selectedGPUData.benchmark);
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
                  <SelectItem key={`${cpu.brand} ${cpu.model}`} value={`${cpu.brand} ${cpu.model}`}>
                    {`${cpu.brand} ${cpu.model}`}
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
                  <SelectItem key={`${gpu.brand} ${gpu.model}`} value={`${gpu.brand} ${gpu.model}`}>
                    {`${gpu.brand} ${gpu.model}`}
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
          <PerformanceGraph cpuScore={selectedCPUData.benchmark} gpuScore={selectedGPUData.benchmark} />
          <Recommendations
            cpuName={`${selectedCPUData.brand} ${selectedCPUData.model}`}
            gpuName={`${selectedGPUData.brand} ${selectedGPUData.model}`}
            bottleneckPercentage={bottleneckPercentage || 0}
          />
        </div>
      )}
    </div>
  );
};

export default BottleneckCalculator;