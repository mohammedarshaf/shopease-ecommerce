import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
      <Loader2 className="w-8 h-8 text-slate-800 animate-spin" />
      <span className="mt-3 text-xs font-medium text-slate-500">Loading catalog...</span>
    </div>
  );
};
