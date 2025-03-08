import { jwtDecode } from "jwt-decode";
import { useContext, useMemo } from "react";
import User from "../components/models/user/User";
import { AuthContext } from "../components/auth/auth/Auth";

export default function useUsername() {
  const { jwt } = useContext(AuthContext)!;
  // const { name } = jwtDecode<User>(jwt)

  const name = useMemo(() => {
    const { name } = jwtDecode<User>(jwt);
    return name;
  }, [jwt]);

  return name;
}
