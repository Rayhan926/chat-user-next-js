import Link from 'next/link';
import { BiLock } from 'react-icons/bi';
import { BsEnvelope } from 'react-icons/bs';
import Button from '../Button';
import Input from '../Input';

function Login() {
    return (
        <div className='h-full grid place-items-end p-0.5 py-[3px] bg-white '>
            <div
                className='w-full chat_p_x rounded-xl overflow-hidden py-5 flex flex-col justify-center h-full bg-slate-50'
                style={{ boxShadow: 'inset 0px 0px 20px 0px #fff' }}
            >
                <div className='chat_p_x mb-6'>
                    <h1 className='font-medium text-slate-800 text-xl text-center'>Hello Again!</h1>
                    <p className='text-sm text-slate-600 text-center mt-1.5 px-10'>
                        Welcome back, we missed you.
                    </p>
                </div>
                <form>
                    <div className='w-full space-y-3 px-2'>
                        <Input
                            placeholder='Email or Phone'
                            widthFull
                            varient='contained'
                            className='!bg-white'
                            startAdornment={<BsEnvelope size={16} />}
                        />
                        <div>
                            <Input
                                className='!bg-white'
                                placeholder='Password'
                                widthFull
                                varient='contained'
                                type='password'
                                enablePasswordShoHideButton
                                startAdornment={<BiLock size={18} />}
                            />
                            <p className='text-right mt-2'>
                                <Link href='#'>
                                    <a className='text-xs font-medium text-slate-500 hover:text-slate-700 text-center'>
                                        Forgot password?
                                    </a>
                                </Link>
                            </p>
                        </div>
                        <Button
                            type='submit'
                            className='block w-full shadow-lg hover:shadow-none shadow-primary-500/30'
                        >
                            Sing In
                        </Button>
                        <div>
                            <p className='text-xs mt-10 text-slate-700 text-center'>
                                Not a member?{' '}
                                <Link href='/signup'>
                                    <a className='text-blue-500 hover:text-blue-700'>
                                        Register now
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
