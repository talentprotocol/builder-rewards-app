"use client";

import { useGrant } from '@/app/context/GrantContext';

export default function RewardsHeader() {
  const { grants, selectedGrant, isLoading } = useGrant();

  const grantsToUse = selectedGrant ? [selectedGrant] : grants;

  const rewardsByTicker = grantsToUse.reduce((acc, grant) => {
    const amount = parseFloat(grant.rewards_pool);
    const ticker = grant.token_ticker || 'Unknown';
    acc[ticker] = (acc[ticker] || 0) + (isNaN(amount) ? 0 : amount);
    return acc;
  }, {} as Record<string, number>);

  const avgBuildersPerGrant = grantsToUse.length ? 
    Math.round(grantsToUse.reduce((sum, grant) => sum + grant.total_builders, 0) / grantsToUse.length) : 
    0;

  const { weightedScore, totalBuilders } = grantsToUse.reduce((acc, grant) => {
    return {
      weightedScore: acc.weightedScore + (grant.avg_builder_score * grant.total_builders),
      totalBuilders: acc.totalBuilders + grant.total_builders
    };
  }, { weightedScore: 0, totalBuilders: 0 });
  
  const weightedAvgBuilderScore = totalBuilders ? Math.round(weightedScore / totalBuilders) : 0;

  if (isLoading) {
    return (
      <div className="bg-neutral-900 rounded-lg border border-neutral-800 animate-pulse">
        <div className="h-32"></div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 rounded-lg border border-neutral-800">
      <div className="flex flex-col items-center justify-between p-4">
        <h2 className="text-neutral-500 text-sm">
          {selectedGrant ? 'Rewards Pool' : 'Total Rewards Pool'}
        </h2>
        <div className="flex flex-col items-center gap-2 mt-2">
          {Object.entries(rewardsByTicker).map(([ticker, amount]) => (
            <div key={ticker} className="flex items-end gap-2">
              <span className="text-4xl font-mono font-semibold">{amount.toFixed(2)}</span>
              <span className="text-neutral-500">{ticker}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-evenly border-t border-neutral-800 p-4">
        <div className="flex flex-col items-center justify-between">
          <p className="text-neutral-500 text-sm">
            {selectedGrant ? 'Total Builders' : 'Avg. Builders'}
          </p>
          <p className="text-2xl font-mono font-semibold">{avgBuildersPerGrant}</p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <p className="text-neutral-500 text-sm">
            {selectedGrant ? 'Avg. Builder Score' : 'Avg. Builder Score'}
          </p>
          <p className="text-2xl font-mono font-semibold">{weightedAvgBuilderScore}</p>
        </div>
      </div>
    </div>
  );
}
