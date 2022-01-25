import Image from 'next/image';
import { useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';
import TextareaAutosize from 'react-textarea-autosize';
import Container from '../components/Container';
import Message from '../components/Message';
import Shape from '../components/Shape/Shape';
import { thin_scrollbar } from '../config/global-config';

function ChatPage() {
    const router = useRouter();
    return (
        <Container>
            <header className='chat_p_x py-2 border-b border-slate-200 flex gap-1.5 items-center'>
                <Shape
                    onClick={() => router.back()}
                    size={32}
                    className='hover:bg-primary-500/10 cursor-pointer duration-100'
                >
                    <BsArrowLeftShort size={30} className='text-primary-500' />
                </Shape>
                <div className='flex gap-2'>
                    <Shape>
                        <Image src='/me.jpg' width={1178} height={1178} />
                    </Shape>
                    <div>
                        <h3 className='font-medium text-xs'>Saymon</h3>
                        <p className='line-clamp-1 text-[10px] text-slate-500'>
                            Active 36 minutes ago
                        </p>
                    </div>
                </div>
            </header>
            <main className={`flex-grow overflow-auto py-2.5 space-y-0.5 ${thin_scrollbar}`}>
                <Message />
                <Message mine />
                <Message mine />
                <Message mine />
                <Message />
                <Message />
                <Message />
                <Message mine />
                <Message mine />
                <Message mine />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message mine />
                <Message mine />
                <Message mine />
                <Message />
            </main>
            <footer className='flex-shrink-0'>
                <form>
                    <div className='flex items-center chat_p_x py-1.5 gap-1'>
                        <TextareaAutosize
                            autoFocus
                            placeholder='Aa'
                            maxRows={5}
                            className={`grow border-none outline-none text-sm bg-slate-50 rounded-2xl resize-none px-2.5 py-1.5 ${thin_scrollbar}`}
                        />
                        <button
                            type='submit'
                            className='w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-primary-500'
                        >
                            <IoSend size={20} />
                        </button>
                    </div>
                </form>
            </footer>
        </Container>
    );
}

export default ChatPage;
