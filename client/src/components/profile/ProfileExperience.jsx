import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileExperience = ({
  experience: { company, description, from, to, current, location, title },
}) => {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>{location}</p>
      <p>
        <Moment format={'YYYY/MM/DD'}>{from}</Moment> -{' '}
        {current ? 'Now' : <Moment format={'YYYY/MM/DD'}>{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
