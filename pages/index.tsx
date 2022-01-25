import Image from 'next/image';
import { useRouter } from 'next/router';
import SwiperCore, { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../components/Container';
import ProfileAvatar from '../components/ProfileAvatar';
import Shape from '../components/Shape/Shape';
import { thin_scrollbar } from '../config/global-config';

SwiperCore.use([FreeMode, Pagination]);

export default function Home() {
    const router = useRouter();
    return (
        <Container>
            {/* Chat Header Start */}
            <header className='chat_p_x py-2 pt-2.5 flex gap-2.5 items-center border-b border-slate-200 flex-shrink-0'>
                <Shape>
                    <Image src='/me.jpg' width={1178} height={1178} />
                </Shape>
                <h1 className='font-bold text-lg'>Chats</h1>
            </header>
            {/* Chat Header End */}

            <div className={`flex-grow overflow-auto ${thin_scrollbar}`}>
                {/* Active People List Start */}
                <div className='flex items-center gap-3 overflow-auto chat_p_x pt-3'>
                    <Swiper
                        slidesPerView={4.8}
                        spaceBetween={0}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        className='mySwiper'
                    >
                        {[...new Array(20).keys()].map((e) => (
                            // Active People Single List
                            <SwiperSlide key={e}>
                                <div className='flex flex-col items-center'>
                                    <ProfileAvatar src='/me.jpg' />
                                    <h3 className='text-center font-medium mt-1.5 text-xs'>
                                        Saymon
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Active People List End */}

                {/* Chat Lists Start */}
                <div className='py-3 pt-4'>
                    {[...new Array(20).keys()].map((e) => (
                        // Active People Single List
                        <div
                            className='flex gap-3 chat_p_x py-1.5 cursor-pointer hover:bg-slate-50'
                            key={e}
                            onClick={() => router.push('/sfsf')}
                        >
                            <ProfileAvatar src='/me.jpg' />
                            <div className='flex-grow w-full'>
                                <h3 className='font-medium mt-1.5 text-sm mb-0.5'>Saymon</h3>
                                <p className='line-clamp-1 text-xs text-slate-700'>
                                    Lorem ipsum dolor sit, amet cons ectet ur adipisicing elit.
                                    Sequi, cupiditate!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Chat Lists End */}
        </Container>
    );
}
