import { connect } from "react-redux";
import Avatar, { IStateProps } from "./Avatar";
import { AppState } from "../../store/reducers";

function mapStateToProps(state: AppState): IStateProps {
  return {
    src: state.userDetails && state.userDetails.avatar_url
  };
}

export default connect(mapStateToProps)(Avatar);
