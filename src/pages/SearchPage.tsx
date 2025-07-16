import { useState } from "react";
import { useParams } from "react-router-dom";

import { useSearchRestaurants } from "@/api/RestaurantApi";
import type { RestaurantType } from "@/types";
import SearchResultInfo from "@/components/SearchResultsInfo";
import SearchResultCard from "@/components/SearchResultCard";
import SearchBar, { type SearchForm } from "@/components/SearchBar";
import PaginationSelector from "@/components/PaginationSelector";
import CuisineFilter from "@/components/CuisineFilter";
import SortOptionDropdown from "@/components/SortOptionDropdown";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams();

  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch", // Default sort option
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1, // Reset to first page on new search
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1, // Reset to first page on cuisine change
    }));
  };

  const setSearchQuery = (searchFormdata: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormdata.searchQuery,
      page: 1, // Reset to first page on new search
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1, // Reset to first page on reset
    }));
  };

  if (isLoading) {
    <span>Loading ...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        <CuisineFilter
          selectedCuisines={searchState.selectedCuisines}
          onChange={setSelectedCuisines}
          isExpanded={isExpanded}
          onExpandedClick={() =>
            setIsExpanded((prevIsExpanded) => !prevIsExpanded)
          }
        />
      </div>

      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by cuisine or restaurant name"
          onReset={resetSearch}
        />

        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultInfo total={results.pagination.total} city={city} />

          <SortOptionDropdown
            onChange={(value) => setSortOption(value)}
            sortOption={searchState.sortOption}
          />
        </div>

        {results.data.map((restaurant: RestaurantType) => (
          <SearchResultCard key={restaurant._id} restaurant={restaurant} />
        ))}

        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};
export default SearchPage;
