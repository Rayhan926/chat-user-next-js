import { Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { BiLock } from 'react-icons/bi';
import { BsCameraFill, BsEnvelope } from 'react-icons/bs';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import * as Yup from 'yup';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Container from '../components/Container';
import FormikInput from '../components/Formik_Form/FormikInput';
import Input from '../components/Input';
import Shape from '../components/Shape/Shape';

const stepOneValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().trim().label('Email'),
});

const stepTwoValidationSchema = Yup.object().shape({
    password: Yup.string().required().trim().label('Password'),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password'), null], 'Confirm password not matched with password')
        .trim()
        .label('Confirm Password'),
});

function SignupPage() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profileImageSrc: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    {
        /* Steps Initial Values --Start-- */
    }
    const stepOneInitialValues = {
        email: formData.email,
    };

    const stepTwoInitialValues = {
        password: formData.password,
        confirmPassword: formData.confirmPassword,
    };
    {
        /* Steps Initial Values --End-- */
    }

    const goToNextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };
    const goToPreviousStep = () => {
        setCurrentStep((prev) => prev - 1);
    };
    return (
        <Container>
            <div className='h-full grid place-items-end p-0.5 py-[3px] bg-white '>
                <div
                    className='w-full chat_p_x rounded-xl overflow-hidden py-5 flex flex-col justify-center h-full bg-slate-50'
                    style={{ boxShadow: 'inset 0px 0px 20px 0px #fff' }}
                >
                    <div className='chat_p_x mb-6'>
                        <h1 className='font-medium text-slate-800 text-xl text-center'>
                            {currentStep === 1
                                ? 'Create Account'
                                : currentStep === 2
                                ? 'Setup your password'
                                : ''}
                        </h1>
                        <p className='text-sm text-slate-600 text-center mt-1.5 px-10'>
                            Hey, be our friends.
                        </p>
                    </div>
                    <div className='w-full'>
                        {currentStep === 1 && (
                            <Formik
                                initialValues={stepOneInitialValues}
                                validationSchema={stepOneValidationSchema}
                                onSubmit={(values) => {
                                    setFormData((prev) => ({
                                        ...prev,
                                        email: values.email,
                                    }));
                                    goToNextStep();
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                        className='px-2'
                                    >
                                        <FormikInput
                                            name='email'
                                            type='email'
                                            placeholder='Email or Phone'
                                            widthFull
                                            varient='contained'
                                            className='!bg-white'
                                            startAdornment={<BsEnvelope size={16} />}
                                        />
                                        <Button
                                            type='submit'
                                            endIcon={<MdNavigateNext size={20} />}
                                            className='block mt-4 w-full shadow-lg hover:shadow-none shadow-primary-500/30'
                                        >
                                            Next
                                        </Button>
                                    </form>
                                )}
                            </Formik>
                        )}
                        {currentStep === 2 && (
                            <Formik
                                initialValues={stepTwoInitialValues}
                                validationSchema={stepTwoValidationSchema}
                                onSubmit={(values) => {
                                    setFormData((prev) => ({
                                        ...prev,
                                        password: values.password,
                                        confirmPassword: values.confirmPassword,
                                    }));
                                    goToNextStep();
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <form
                                        className='px-2'
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                    >
                                        <div className='space-y-3'>
                                            <FormikInput
                                                name='password'
                                                placeholder='Password'
                                                widthFull
                                                varient='contained'
                                                className='!bg-white'
                                                startAdornment={<BiLock size={18} />}
                                                type={showPassword ? 'text' : 'password'}
                                            />
                                            <FormikInput
                                                name='confirmPassword'
                                                placeholder='Confirm Password'
                                                widthFull
                                                varient='contained'
                                                className='!bg-white'
                                                startAdornment={<BiLock size={18} />}
                                                type={showPassword ? 'text' : 'password'}
                                            />
                                            <Checkbox
                                                onChange={(e) => setShowPassword(e.target.checked)}
                                                checked={showPassword}
                                                label={`${showPassword ? 'Hide' : 'Show'} password`}
                                            />
                                        </div>

                                        <div className='flex gap-3 mt-4'>
                                            <Button
                                                type='button'
                                                className='shrink-0 hover:shadow-none shadow-slate-500/30'
                                                color='slate'
                                                onClick={goToPreviousStep}
                                                startIcon={<MdNavigateBefore size={20} />}
                                            />
                                            <Button
                                                type='submit'
                                                endIcon={<MdNavigateNext size={20} />}
                                                className='block w-full shadow-lg hover:shadow-none shadow-primary-500/30'
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        )}
                        {currentStep === 3 && (
                            <div className='flex flex-col items-center gap-4'>
                                <label>
                                    <input type='file' className='sr-only' />
                                    <Shape
                                        size={100}
                                        className='bg-slate-200 hover:bg-slate-300 duration-100 cursor-pointer'
                                    >
                                        <BsCameraFill size={30} />
                                    </Shape>
                                </label>
                                <Input
                                    placeholder='Your name'
                                    widthFull
                                    varient='contained'
                                    className='!bg-white text-center'
                                />
                                <div className='flex gap-3 w-full'>
                                    <Button
                                        type='button'
                                        className='shrink-0 shadow-lg hover:shadow-none shadow-slate-500/30'
                                        color='slate'
                                        onClick={goToPreviousStep}
                                        startIcon={<MdNavigateBefore size={20} />}
                                    />
                                    <Button
                                        type='submit'
                                        className='block w-full shadow-lg hover:shadow-none shadow-primary-500/30'
                                        onClick={goToNextStep}
                                    >
                                        Finsih
                                    </Button>
                                </div>
                            </div>
                        )}
                        <div>
                            <p className='text-xs mt-10 text-slate-700 text-center'>
                                Already a member?{' '}
                                <Link href='/login'>
                                    <a className='text-blue-500 hover:text-blue-700'>Login here</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default SignupPage;
