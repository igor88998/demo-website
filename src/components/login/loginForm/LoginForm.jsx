import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/formsControls/FormsControls';
import { maxLengthCreator, minLengthCreator, required } from '../../../utils/validators/validators';
import classes from '../../common/formsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, captchaUrl, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder='Email' name='email' component={Input} validate={[required, maxLengthCreator(30)]} />
                </div>
                <div>
                    <Field placeholder='Password' name='password' type='password'
                        component={Input} validate={[required, maxLengthCreator(20), minLengthCreator(4)]} />
                </div>
                <div>
                    <Field type='checkbox' name='rememberMe' component={Input} /> Remember me
                </div>

                {captchaUrl && (
                    <div>
                        <div>
                            <img src={captchaUrl} alt="Captcha" />
                        </div>
                        <Field placeholder="Enter captcha" name="captcha" component={Input} validate={[required]} />
                    </div>
                )}
                {error && <div className={classes.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;