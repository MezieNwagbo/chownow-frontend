import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/userProfileform/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isLoadingUser } = useGetMyUser();
  const { updateUser, isLoading: isUpdatingUser } = useUpdateMyUser();

  if (isLoadingUser) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <UserProfileForm
      onSave={updateUser}
      isLoading={isUpdatingUser}
      currentUser={currentUser}
    />
  );
};

export default UserProfilePage;
