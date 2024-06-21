import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import Error from "./Error";
const DatePickerField = ({ label, name, ...rest }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({ field, form: { setFieldValue } }) => {
                        const { value } = field;
                        return <DatePicker id={name} {...rest} {...field} selected={value} onChange={(val) => setFieldValue(name, val)} />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={Error} />
        </>
    )
}

export default DatePickerField