import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../layout';
import { getPosts } from '../../actions/post';
import PropTypes from 'prop-types';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();

    // eslint-disable-next-line
  }, []);
  return <div></div>;
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
