import { useFormikContext } from 'formik';
import { fontSize } from '../Input/Input';
import { InputSizes } from '../Input/Input.types';

type FormikErrorMessageProps = {
    name: string;
    fontSize?: InputSizes;
};
function FormikErrorMessage({ name, fontSize: font_size }: FormikErrorMessageProps) {
    const { errors, touched } = useFormikContext<any>();
    const isError = errors[name] && touched[name];
    if (!isError) return null;
    const input_font_size = fontSize(font_size);
    return (
        <div className='flex items-center pl-0.5 text-red-600 text-sm mt-1.5'>
            <span className={`mt-[-3px] ${input_font_size}`}>{errors[name]}</span>
        </div>
    );
}

export default FormikErrorMessage;
