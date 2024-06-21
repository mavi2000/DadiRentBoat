import { Field, ErrorMessage } from "formik"
import Error from "./Error"
const Select = ({ label, name, options, ...rest }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} {...rest}>
                {
                    options.map(option => <option key={option.value} value={option.value}>{option.key}</option>)
                }
            </Field>
            <ErrorMessage name={name} component={Error} />
        </>
    )
}

export default Select