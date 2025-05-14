import { ProfilesTable } from "@/app/components/index/ProfilesTable2";
import { searchProfiles } from "@/app/services/search/profiles";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { RuleGroupType } from "react-querybuilder";

export default async function Page() {
  const queryClient = new QueryClient();

  const query = {
    rules: [
      {
        field: "builder_score",
        operator: "between",
        value: [0, 100],
      },
    ],
  } as RuleGroupType;

  await queryClient.prefetchQuery({
    queryKey: ["searchProfiles", query],
    queryFn: () => searchProfiles(query),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilesTable initialQuery={query} />
    </HydrationBoundary>
  );
}
