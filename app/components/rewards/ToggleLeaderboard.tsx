"use client";

import { Switch } from "@/app/components/ui/switch";
import { useLeaderboard } from "@/app/context/LeaderboardContext";

export default function ToggleLeaderboard() {
  const { showUserLeaderboard, toggleUserLeaderboard } = useLeaderboard();

  return (
    <div className="flex items-center gap-1">
      <Switch
        checked={!showUserLeaderboard}
        onCheckedChange={toggleUserLeaderboard}
        className="scale-75 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-neutral-300 dark:data-[state=unchecked]:bg-neutral-700"
      />
      <label className="secondary-text-style text-xs">Total</label>
    </div>
  );
}
