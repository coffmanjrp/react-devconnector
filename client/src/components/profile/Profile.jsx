import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ProfileAbout,
  ProfileEducation,
  ProfileExperience,
  ProfileTop,
} from './';
import { Spinner } from '../layout';
import { getProfileById } from '../../actions/profile';
import PropTypes from 'prop-types';

const Profile = ({
  auth,
  match,
  profile: { profile, loading },
  getProfileById,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);

    //eslint-disable-next-line
  }, []);

  return (
    <>
      {!profile || loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            !auth.loading &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />

            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

            <div className="profile-github">
              <h2 className="text-primary my-1">
                <i className="fab fa-github" /> Github Repos
              </h2>
              <div className="repo bg-white p-1 my-1">
                <div>
                  <h4>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      Repo One
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, laborum!
                  </p>
                </div>
                <div>
                  <ul>
                    <li className="badge badge-primary">Stars: 44</li>
                    <li className="badge badge-dark">Watchers: 21</li>
                    <li className="badge badge-light">Forks: 25</li>
                  </ul>
                </div>
              </div>
              <div className="repo bg-white p-1 my-1">
                <div>
                  <h4>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      Repo Two
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, laborum!
                  </p>
                </div>
                <div>
                  <ul>
                    <li className="badge badge-primary">Stars: 44</li>
                    <li className="badge badge-dark">Watchers: 21</li>
                    <li className="badge badge-light">Forks: 25</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
