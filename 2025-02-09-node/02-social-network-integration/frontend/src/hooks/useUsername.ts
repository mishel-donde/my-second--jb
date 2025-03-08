import { useContext, useMemo } from "react";
import { AuthContext } from "../components/auth/auth/Auth";
import { jwtDecode } from "jwt-decode";
import User from "../components/models/user/User";

export default function useUsername() {
  const { jwt } = useContext(AuthContext)!;
  // const { name } = jwtDecode<User>(jwt);

  const name = useMemo(() => {
    const { name } = jwtDecode<User>(jwt);
    return name;
  }, [jwt]);

  return name;
}
