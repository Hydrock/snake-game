import Snake from '../../components/snake';
import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  return {
    size: state.size,
    snake: state.snake,
  };
}

export default connect(mapStateToProps)(Snake);