"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import ActivityChart from "@/app/components/analytics/ActivityChart";
import ActivityByTypeChart from "@/app/components/analytics/ActivityByTypeChart";
import RetentionRateChart from "@/app/components/analytics/RetentionRateChart";
import RewardsBreakdownChart from "@/app/components/analytics/RewardsBreakdownChart";
import WinnersProfileChart from "@/app/components/analytics/WinnersProfileChart";
import TopBuildersLeaderboard from "@/app/components/analytics/TopBuildersLeaderboard";
import DataTable from "@/app/components/analytics/DataTable";
import MetricsCards from "@/app/components/analytics/MetricsCards";
import { CSVDataResult } from "@/app/services/analytics";
import { useTheme } from "@/app/context/ThemeContext";
import ReportDrawer from "@/app/components/analytics/ReportDrawer";

interface AnalyticsTabsProps {
  data: CSVDataResult;
}

export default function AnalyticsTabs({ data }: AnalyticsTabsProps) {
  const { isDarkMode } = useTheme();

  return (
    <Tabs defaultValue="charts" className="w-full">
      <div className="flex justify-between items-center mb-3">
        <TabsList
          className={`
          ${
            isDarkMode
              ? "bg-neutral-900 text-white"
              : "bg-neutral-200 text-neutral-800"
          }
        `}
        >
          <TabsTrigger
            className={`
          text-xs cursor-pointer mr-0.5
          ${
            isDarkMode
              ? "bg-neutral-900 hover:bg-neutral-800 data-[state=active]:bg-neutral-800"
              : "bg-neutral-200 hover:bg-white data-[state=active]:bg-white text-neutral-800"
          }
        `}
            value="charts"
          >
            Charts
          </TabsTrigger>
          <TabsTrigger
            className={`
          text-xs cursor-pointer
          ${
            isDarkMode
              ? "bg-neutral-900 hover:bg-neutral-800 data-[state=active]:bg-neutral-800"
              : "bg-neutral-200 hover:bg-white data-[state=active]:bg-white text-neutral-800"
          }
        `}
            value="data"
          >
            Raw Data
          </TabsTrigger>
        </TabsList>

        <ReportDrawer report={data.summaryText} />
      </div>

      <TabsContent value="charts" className="flex flex-col gap-3">
        <MetricsCards metrics={data.metricsTotals} />
        <ActivityChart dailyData={data.dailyActivity} weeklyData={data.weeklyActivity} />
        <ActivityByTypeChart data={data.activityByType} />
        <RetentionRateChart data={data.retention} />
        <RewardsBreakdownChart data={data.rewardsBreakdown} />
        <WinnersProfileChart data={data.winnersProfile} />
        <TopBuildersLeaderboard data={data.topBuilders} />
      </TabsContent>

      <TabsContent value="data" className="grid grid-cols-1 gap-3">
        <DataTable
          data={data.dailyActivity}
          title="Daily Builder Activity Data"
          description="Daily new eligible developers, active developers, and activation rate"
        />
        <DataTable
          data={data.weeklyActivity}
          title="Weekly Builder Activity Data"
          description="Weekly new eligible developers, active developers, and activation rate"
        />
        <DataTable
          data={data.activityByType}
          title="Builder Activity By Type Data"
          description="Weekly GitHub and Base Contract activity metrics"
        />
        <DataTable
          data={data.retention}
          title="Builder Rewards Retention Data"
          description="Weekly active developers, inactive developers, and retention rate"
        />
        <DataTable
          data={data.rewardsBreakdown}
          title="Rewards Breakdown Data"
          description="Breakdown of rewards recipients by category"
        />
        <DataTable
          data={data.winnersProfile}
          title="Winners Profile Data"
          description="Distribution of winners by Builder Score level and years of experience"
        />
        <DataTable
          data={data.topBuilders}
          title="Top Builders Data"
          description="Top builders by rewards earned weekly and all-time"
        />
      </TabsContent>
    </Tabs>
  );
} 