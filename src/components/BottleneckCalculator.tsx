
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { PerformanceGraph } from './PerformanceGraph';
import { BottleneckIndicator } from './BottleneckIndicator';
import { Recommendations } from './Recommendations';
import { Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

interface Component {
  brand: string;
  model: string;
  benchmark: number;
}

const BottleneckCalculator = () => {
  const [selectedCPU, setSelectedCPU] = useState<string>('');
  const [selectedGPU, setSelectedGPU] = useState<string>('');
  const [showCPUCommand, setShowCPUCommand] = useState(false);
  const [showGPUCommand, setShowGPUCommand] = useState(false);

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
    
    const cpuScore = selectedCPUData.benchmark;
    const gpuScore = selectedGPUData.benchmark;
    
    const maxScore = Math.max(cpuScore, gpuScore);
    const minScore = Math.min(cpuScore, gpuScore);
    
    const bottleneck = ((maxScore - minScore) / maxScore) * 100;
    
    return Math.min(Math.max(bottleneck, 0), 100);
  };

  const bottleneckPercentage = calculateBottleneck();

  return (
    <div className="container mx-auto px-4 py-8">      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Select CPU</h2>
            {cpuLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : (
              <div>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  onClick={() => setShowCPUCommand(true)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {selectedCPU || "Search CPU..."}
                </Button>
                <CommandDialog open={showCPUCommand} onOpenChange={setShowCPUCommand}>
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Search CPU..." />
                    <CommandList>
                      <CommandEmpty>No CPU found.</CommandEmpty>
                      <CommandGroup heading="Available CPUs">
                        {(cpuData || []).map((cpu) => (
                          <CommandItem
                            key={`${cpu.brand} ${cpu.model}`}
                            onSelect={() => {
                              setSelectedCPU(`${cpu.brand} ${cpu.model}`);
                              setShowCPUCommand(false);
                            }}
                          >
                            {`${cpu.brand} ${cpu.model}`}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </CommandDialog>
              </div>
            )}
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Select GPU</h2>
            {gpuLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : (
              <div>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  onClick={() => setShowGPUCommand(true)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {selectedGPU || "Search GPU..."}
                </Button>
                <CommandDialog open={showGPUCommand} onOpenChange={setShowGPUCommand}>
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Search GPU..." />
                    <CommandList>
                      <CommandEmpty>No GPU found.</CommandEmpty>
                      <CommandGroup heading="Available GPUs">
                        {(gpuData || []).map((gpu) => (
                          <CommandItem
                            key={`${gpu.brand} ${gpu.model}`}
                            onSelect={() => {
                              setSelectedGPU(`${gpu.brand} ${gpu.model}`);
                              setShowGPUCommand(false);
                            }}
                          >
                            {`${gpu.brand} ${gpu.model}`}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </CommandDialog>
              </div>
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
    </div>
  );
};

export default BottleneckCalculator;
