import React from 'react';
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FormStyled, FieldStyled, Button, Label } from '../MyContacts/FormAddCohntacts/Form.styled';
// import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from './initislState';


const id = nanoid(5);

const SignupSchema = Yup.object().shape({
name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter a name')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
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

const RegisterForm  = () => {
    // const contacts = useSelector(getContacts);

    // const dispatch = useDispatch();
        
    // useEffect(() => {
    //     dispatch(fetchContacts())
    // }, [dispatch]);

    const onRegister = (payload, { resetForm }) => {
        // dispatch(addContacts(payload));
        
        resetForm();

        // return contacts;
    } 

    return (
        <Formik
            initialValues={InitialState}
            validationSchema={SignupSchema}
            onSubmit={onRegister}
        >

    {({ errors, touched }) => (
        <FormStyled>
        <Label htmlFor="name">Name</Label>
        <FieldStyled
            id={id}
            type="text"
            name="name"
            placeholder="enter name"/>
        {errors.name && touched.name ? (
            <div>{errors.name}</div>
        ) : null}
        
        <Label htmlFor="email">Email</Label>
        <FieldStyled
            id={id}
            type="email"
            name="email"
            placeholder="enter email" />
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
        <Button type="submit">Register</Button>
        </FormStyled>
    )}
    </Formik>
    )
};

RegisterForm.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSubmit:PropTypes.func,
}

export default RegisterForm;