
import React from 'react';

export const SkeletonCard: React.FC = () => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 animate-pulse">
    <div className="bg-slate-200 h-48 w-full rounded-lg mb-4"></div>
    <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
  </div>
);

export const SkeletonSection: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[1, 2, 3, 4].map((i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);
