const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import type { SearchState } from "@/pages/SearchPage";
import { useQuery } from "@tanstack/react-query";

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async () => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    return response.json();
  };

  const { data: results, isPending: isLoading } = useQuery({
    queryKey: ["searchRequest", searchState],
    queryFn: createSearchRequest,
    enabled: !!city, // Only run the query if city is defined
  });

  return {
    results,
    isLoading,
  };
};
