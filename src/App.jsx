import UserRouters from "modules/UserRouters/UserRouters";
import Navbar from "modules/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "redux/auth/auth-operations";

export default function App() {
const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(currentUser())
  }, [dispatch])
  return (
    <div>
      <Navbar/>
      <UserRouters/>
    </div>
    )
}
