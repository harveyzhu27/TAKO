// Performance monitoring utility for tracking efficiency improvements

interface PerformanceMetric {
  operation: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  metadata?: Record<string, unknown>;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric[]> = new Map();
  private isEnabled = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  /**
   * Start timing an operation
   */
  start(operation: string, metadata?: Record<string, unknown>): string {
    if (!this.isEnabled) return '';
    

    const metric: PerformanceMetric = {
      operation,
      startTime: performance.now(),
      metadata
    };
    
    if (!this.metrics.has(operation)) {
      this.metrics.set(operation, []);
    }
    this.metrics.get(operation)!.push(metric);
    
    return '';
  }

  /**
   * End timing an operation
   */
  end(operation: string): void {
    if (!this.isEnabled) return;
    
    const operationMetrics = this.metrics.get(operation);
    if (!operationMetrics || operationMetrics.length === 0) return;
    
    const metric = operationMetrics[operationMetrics.length - 1];
    metric.endTime = performance.now();
    metric.duration = metric.endTime - metric.startTime;
    
    // Log slow operations
    if (metric.duration > 100) {
      console.warn(`🐌 Slow operation detected: ${operation} took ${metric.duration.toFixed(2)}ms`, metric.metadata);
    }
  }

  /**
   * Get performance summary for an operation
   */
  getSummary(operation: string): { count: number; avgDuration: number; minDuration: number; maxDuration: number } | null {
    const operationMetrics = this.metrics.get(operation);
    if (!operationMetrics || operationMetrics.length === 0) return null;
    
    const completedMetrics = operationMetrics.filter(m => m.duration !== undefined);
    if (completedMetrics.length === 0) return null;
    
    const durations = completedMetrics.map(m => m.duration!);
    const avgDuration = durations.reduce((sum, d) => sum + d, 0) / durations.length;
    const minDuration = Math.min(...durations);
    const maxDuration = Math.max(...durations);
    
    return {
      count: completedMetrics.length,
      avgDuration,
      minDuration,
      maxDuration
    };
  }

  /**
   * Log performance summary for all operations
   */
  logSummary(): void {
    if (!this.isEnabled) return;
    
    console.group('📊 Performance Summary');
    for (const [operation] of this.metrics.entries()) {
      const summary = this.getSummary(operation);
      if (summary) {
        console.log(`${operation}:`, {
          count: summary.count,
          avg: `${summary.avgDuration.toFixed(2)}ms`,
          min: `${summary.minDuration.toFixed(2)}ms`,
          max: `${summary.maxDuration.toFixed(2)}ms`
        });
      }
    }
    console.groupEnd();
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics.clear();
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Convenience functions
export const startTiming = (operation: string, metadata?: Record<string, unknown>) => 
  performanceMonitor.start(operation, metadata);

export const endTiming = (operation: string) => 
  performanceMonitor.end(operation);

export const logPerformanceSummary = () => 
  performanceMonitor.logSummary();

