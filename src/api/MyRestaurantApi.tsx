import type { RestaurantType } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<RestaurantType> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }
    return response.json();
  };

  const {
    data: restaurant,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["myRestaurant"],
    queryFn: getMyRestaurantRequest,
  });

  if (error) {
    console.log(error);
    // toast.error(error.toString() || "Failed to fetch restaurant");
  }

  return {
    restaurant,
    isLoading,
  };
};

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<RestaurantType> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant");
    }

    return response.json();
  };

  const {
    mutateAsync: createRestaurant,
    isPending: isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createMyRestaurantRequest,
  });

  if (isSuccess) {
    toast.success("Restaurant created!");
  }
  if (isError) {
    toast.error("Unable to create restaurant");
  }

  return { createRestaurant, isLoading };
};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<RestaurantType> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response) {
      throw new Error("Failed to update restaurant");
    }

    return response.json();
  };

  const {
    mutate: updateRestaurant,
    isPending: isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: updateMyRestaurantRequest,
  });

  if (isSuccess) {
    toast.success("Restaurant updated!");
  }
  if (isError) {
    toast.error("Unable to update restaurant");
  }

  return { updateRestaurant, isLoading };
};
