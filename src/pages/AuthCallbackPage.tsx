import { useEffect } from "react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const AuthCallbackPage = () => {
  const hasCreatedUser = useRef(false);

  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({
        auth0Id: user.sub,
        email: user.email,
      });
      hasCreatedUser.current = true; // Prevents multiple calls
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <div>Redirecting...</div>;
};

export default AuthCallbackPage;
