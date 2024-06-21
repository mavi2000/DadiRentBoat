import { Field, ErrorMessage } from 'formik'
import Error from './Error'
const Input = ({ name, label, ...rest }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={Error} />
        </>
    )
}

export default Input
