import { Route, Routes } from "react-router-dom";
import Login from "../components/scenes/login";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { IerrSlice } from "../redux/reducers/errSlice/IerrSlice";
import { useEffect } from "react";
import { openNotificationWithIcon } from "../utils/helpers";
import { IcommonResponse } from "../interfaces/responses/IcommonResponse";
import { actionTypes } from "../redux/actionType";

interface IRouteProps {
  err: IcommonResponse;
  hideToast: () => void;
}
function Router(props: IRouteProps) {
  useEffect(() => {
    if (props.err.isError) {
      openNotificationWithIcon(
        "error",
        "Error",
        props.err.error?.message ?? ""
      );
      props.hideToast();
    }
  }, [props.err]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    err: state.errSlice,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    hideToast: () => dispatch({ type: actionTypes.hideErrToast }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
