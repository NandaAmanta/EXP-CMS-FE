import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Reducers/rootReducer";

function NavList() {
  const data = useSelector((state: RootState) => state.payload.payload);
  const dispatch = useDispatch();

  return (
    <div>
        {data.map((data: any) => (
            <li key={data.id}> {data.content} </li>
        ))}
    </div>
  )
}
export default NavList