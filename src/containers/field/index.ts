import Field from '../../components/field';
import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  return {
    size: state.size,
  };
}

export default connect(mapStateToProps)(Field);