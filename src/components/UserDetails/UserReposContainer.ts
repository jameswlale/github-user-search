import { connect } from "react-redux";
import UserRepos, { IStateProps } from "./UserRepos";
import { AppState } from "../../store/reducers";

function mapStateToProps(state: AppState): IStateProps {
  return {
    isLoading: state.isFetching,
    repos: state.repos,
    error: state.error
  };
}

export default connect(mapStateToProps)(UserRepos);
