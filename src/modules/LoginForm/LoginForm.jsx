import React from 'react';
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FormStyled, FieldStyled, Button, Label } from '../MyContacts/FormAddCohntacts/Form.styled';
import { InitialState } from './initislState';
import { loginUser} from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';


const id = nanoid(5);

const SignupSchema = Yup.object().shape({
email: Yup.string()
    .min(5, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Please enter an email')
    .email(),
password: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter a password'),
});

const LoginForm  = () => {
    const dispatch = useDispatch();

    const onLogin = (payload, { resetForm }) => {
        Notify.success("I salute you earthling!");
        dispatch(loginUser(payload));
        resetForm();
    } 

    return (
        <Formik
            initialValues={InitialState}
            validationSchema={SignupSchema}
            onSubmit={onLogin}
        >

    {({ errors, touched }) => (
        <FormStyled>
        
        <Label htmlFor="email">Email</Label>
        <FieldStyled
            id={id}
            type="email"
            name="email"
            placeholder="enter email" 
            autoComplete="on"
            />
        {errors.email && touched.email ? (
            <div>{errors.email}</div>
        ) : null}
        
        <Label htmlFor="password">Password</Label>
        <FieldStyled
            id={id}
            type="password"
            name="password"
            placeholder="enter password" />
        {errors.password && touched.password ? (
            <div>{errors.password}</div>
        ) : null}
        <Button type="submit">Login</Button>
        </FormStyled>
    )}
    </Formik>
    )
};

LoginForm.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSubmit:PropTypes.func,
}

export default LoginForm;