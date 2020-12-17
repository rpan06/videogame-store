import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { signInAction } from '../../actions';
import { signIn } from '../../actions/user';
import ErrorMessage from '../shared/error_message';

function SignInForm(props) {
  const { register, errors, handleSubmit, setError } = useForm();
  let submitting = false;

  const onSubmit = async (data) => {
    submitting = true;
    const response = await signIn(data);
    if (response.success) {
      await props.signInAction(data);
      window.location.href = '/';
    } else {
      response.error.forEach((errorItem) => {
        setError(errorItem.param, {
          type: 'serverError',
          message: errorItem.msg,
        });
      });
    }
    submitting = false;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-4">
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          disabled={submitting}
          name="email"
          className="form-control"
          ref={register({ required: true, maxLength: 30 })}
        />
        <ErrorMessage error={errors.email} />
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          disabled={submitting}
          name="password"
          className="form-control"
          type="password"
          ref={register({ required: true, maxLength: 30 })}
        />
        <ErrorMessage error={errors.password} />
      </div>

      <Button
        disabled={submitting}
        variant="primary"
        type="submit"
        className="mt-5 mb-3"
        block
      >
        SUBMIT
      </Button>

      <Link
        to="/register"
        className="signIn-link d-flex justify-content-center"
      >
        Don't have an account?&nbsp;<b>Create an account.</b>
      </Link>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    redux: state.redux,
  };
}

export default connect(mapStateToProps, { signInAction })(SignInForm);
