import { useContext } from "react";
import { AuthContext } from "../components/auth/auth/Auth";
import axios from "axios";
import Following from "../components/services/auth-aware/following";

export default function useService() {
  const { jwt } = useContext(AuthContext)!;
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    baseURL: ''
  });
  
  const followingService = new Following(axiosInstance);
  return followingService;
}
