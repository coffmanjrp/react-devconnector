import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CommentForm, CommentItem } from './';
import { Spinner } from '../layout';
import { PostItem } from '../posts';
import { getPost } from '../../actions/post';
import PropTypes from 'prop-types';

const Post = ({ post: { post, loading }, getPost, match }) => {
  useEffect(() => {
    getPost(match.params.id);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading || !post ? (
        <Spinner />
      ) : (
        <>
          <Link to="/posts" className="btn">
            Back To Posts
          </Link>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <div className="comments">
            {post.comments.map((comment) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
