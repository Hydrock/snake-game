import Settings from '../../components/settings';
import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  return {
    size: state.size,
  };
}

export default connect(mapStateToProps)(Settings);