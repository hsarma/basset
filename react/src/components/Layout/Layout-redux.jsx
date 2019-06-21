import { connect } from 'react-redux';

import { getUser } from '../../redux/user/selectors.js';
import { logout } from '../../redux/user/actions.js';

import Layout from './Layout.jsx';

const mapState = state => ({
  user: getUser(state),
});
const mapActions = dispatch => ({
  onLogout: () => dispatch(logout()),
});

export default connect(
  mapState,
  mapActions,
)(Layout);
