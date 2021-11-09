import { useRef, useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const submitHandler = e => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add Validation

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBS70kZtGdAvvAC-wRniiHJOYFYWnNiBtg',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
      }
    ).then(res => {
      // assumption: Always succeeds!
      history.replace('/');
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
