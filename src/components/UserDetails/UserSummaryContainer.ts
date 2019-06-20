import { connect } from "react-redux";
import UserSummary, { IStateProps } from "./UserSummary";
import { AppState } from "../../store/reducers";

function mapStateToProps(state: AppState): IStateProps {
  return {
    isLoading: state.isFetching,
    userDetails: state.userDetails
  };
}

export default connect(mapStateToProps)(UserSummary);
