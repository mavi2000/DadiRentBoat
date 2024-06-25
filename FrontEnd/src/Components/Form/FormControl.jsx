import DatePickerField from "./DatePicker"
import Input from "./Input"
import Select from "./Select"

const FormControl = ({ control, ...rest }) => {
    switch (control) {
        case "input":
            return <Input {...rest} />
        case "select":
            return <Select {...rest} />
        case "date":
            return <DatePickerField {...rest} />
        default: return null
    }

}

export default FormControl
