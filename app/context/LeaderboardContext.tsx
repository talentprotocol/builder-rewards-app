"use client";

import { useGrant } from "@/app/context/GrantContext";
import {
  LeaderboardEntry,
  LeaderboardResponse,
} from "@/app/types/rewards/leaderboards";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ImplementableFetchLeaderboard = ((
  page?: number,
  append?: boolean,
) => Promise<void>) & {
  implementation?: (page?: number, append?: boolean) => Promise<void>;
};

type ImplementableHandleLoadMore = (() => void) & {
  implementation?: () => void;
};

interface LeaderboardContextType {
  loadingLeaderboard: boolean;
  setLoadingLeaderboard: (loadingLeaderboard: boolean) => void;
  userLeaderboard: LeaderboardEntry | null;
  setUserLeaderboard: (leaderboard: LeaderboardEntry | null) => void;
  showUserLeaderboard: boolean;
  toggleUserLeaderboard: () => void;
  leaderboardData: LeaderboardResponse | null;
  setLeaderboardData: (
    data:
      | LeaderboardResponse
      | ((prevData: LeaderboardResponse | null) => LeaderboardResponse),
  ) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isLoadingMore: boolean;
  setIsLoadingMore: (loading: boolean) => void;
  hasMore: boolean;
  setHasMore: (hasMore: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  error: string | null;
  setError: (error: string | null) => void;
  fetchLeaderboard: ImplementableFetchLeaderboard;
  handleLoadMore: ImplementableHandleLoadMore;
}

const LeaderboardContext = createContext<LeaderboardContextType | undefined>(
  undefined,
);

export function LeaderboardProvider({ children }: { children: ReactNode }) {
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true);
  const [userLeaderboard, setUserLeaderboard] =
    useState<LeaderboardEntry | null>(null);
  const [showUserLeaderboard, setShowUserLeaderboard] = useState(true);
  const [leaderboardData, setLeaderboardData] =
    useState<LeaderboardResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { selectedGrant } = useGrant();

  useEffect(() => {
    if (selectedGrant) {
      setUserLeaderboard(null);
      setLeaderboardData(null);
    }
  }, [selectedGrant]);

  const toggleUserLeaderboard = () => setShowUserLeaderboard((prev) => !prev);

  const fetchLeaderboard: ImplementableFetchLeaderboard = async (
    page: number = 1,
    append: boolean = false,
  ): Promise<void> => {
    if (fetchLeaderboard.implementation) {
      return fetchLeaderboard.implementation(page, append);
    }
  };

  const handleLoadMore: ImplementableHandleLoadMore = () => {
    if (handleLoadMore.implementation) {
      return handleLoadMore.implementation();
    }
  };

  return (
    <LeaderboardContext.Provider
      value={{
        loadingLeaderboard,
        setLoadingLeaderboard,
        userLeaderboard,
        setUserLeaderboard,
        showUserLeaderboard,
        toggleUserLeaderboard,
        leaderboardData,
        setLeaderboardData,
        isLoading,
        setIsLoading,
        isLoadingMore,
        setIsLoadingMore,
        hasMore,
        setHasMore,
        currentPage,
        setCurrentPage,
        error,
        setError,
        fetchLeaderboard,
        handleLoadMore,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
}

export function useLeaderboard() {
  const context = useContext(LeaderboardContext);
  if (context === undefined) {
    throw new Error("useLeaderboard must be used within a LeaderboardProvider");
  }
  return context;
}
