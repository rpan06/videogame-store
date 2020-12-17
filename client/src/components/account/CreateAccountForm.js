import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { createAccountAction } from '../../actions';
import { createAccount } from '../../actions/user';
import ErrorMessage from '../shared/error_message';

function CreateAccountForm(props) {
  const { register, errors, handleSubmit, setError } = useForm();
  let submitting = false;

  const onSubmit = async (data) => {
    submitting = true;
    const response = await createAccount(data);
    if (response.success) {
      await props.createAccountAction(data);
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
      <div className="row">
        <div className="form-group col-12 col-lg-6">
          <label className="form-label">First Name</label>
          <input
            disabled={submitting}
            name="firstName"
            className="form-control"
            ref={register({ required: true, maxLength: 30 })}
          />
          <ErrorMessage error={errors.firstName} />
        </div>
        <div className="form-group col-12 col-lg-6">
          <label className="form-label">Last Name</label>
          <input
            disabled={submitting}
            name="lastName"
            className="form-control"
            ref={register({ required: true, maxLength: 30 })}
          />
          <ErrorMessage error={errors.lastName} />
        </div>
      </div>

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

      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <input
          disabled={submitting}
          name="confirmPassword"
          className="form-control"
          type="password"
          ref={register({ required: true, maxLength: 30 })}
        />
        <ErrorMessage error={errors.confirmPassword} />
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

      <Link to="/login" className="login-link d-flex justify-content-center">
        Have an account? &nbsp;<b>Sign in.</b>
      </Link>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    redux: state.redux,
  };
}

export default connect(mapStateToProps, { createAccountAction })(
  CreateAccountForm
);
