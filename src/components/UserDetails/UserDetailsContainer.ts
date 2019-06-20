import { connect } from "react-redux";
import UserDetails, { IStateProps } from "./UserDetails";
import { AppState } from "../../store/reducers";

function mapStateToProps(state: AppState): IStateProps {
  return {
    isLoading: state.isFetching,
    userDetails: state.userDetails
  };
}

export default connect(mapStateToProps)(UserDetails);
