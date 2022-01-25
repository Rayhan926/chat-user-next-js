import { Field } from 'formik';
import Input from '../../Input';
import FormikErrorMessage from '../FormikErrorMessage';
import { FormikInputProps } from './FormikInput.types';
function FormikInput({ disabledErrorMessage, ...props }: FormikInputProps) {
    return (
        <div>
            <Field {...props} component={MyInput} />
            {!disabledErrorMessage && <FormikErrorMessage fontSize={'small'} name={props.name} />}
        </div>
    );
}

export default FormikInput;

const MyInput = ({ field, form, ...props }: any) => {
    const isError = form.errors[field.name] && form.touched[field.name];
    return (
        <Input
            {...field}
            {...props}
            floatingLabelClass={`${
                isError ? '!text-red-500 peer-placeholder-shown:!text-slate-400' : ''
            } ${props.className || ''}`}
        />
    );
};
