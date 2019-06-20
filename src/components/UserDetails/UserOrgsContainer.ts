import { connect } from "react-redux";
import UserOrgs, { IStateProps } from "./UserOrgs";
import { AppState } from "../../store/reducers";

function mapStateToProps(state: AppState): IStateProps {
  return {
    isLoading: state.isFetching,
    orgs: state.userDetails && state.userDetails.orgs
  };
}

export default connect(mapStateToProps)(UserOrgs);
