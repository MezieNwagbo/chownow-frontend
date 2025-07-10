import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreatingRestaurant } =
    useCreateMyRestaurant();
  const { updateRestaurant, isLoading: isUpdatingRestaurant } =
    useUpdateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();

  const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreatingRestaurant || isUpdatingRestaurant}
    />
  );
};

export default ManageRestaurantPage;
