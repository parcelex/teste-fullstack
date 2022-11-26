import yup from 'yup';

const userValidated = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .required('E-mail is required'),
  birthDate: yup
    .date()
    .required('Birth date is required'),
});

export default userValidated;
