import Image from 'next/image';

type ProfileAvatarProps = {
    src: string;
    status?: 'online' | 'offline';
};

function ProfileAvatar({ src, status }: ProfileAvatarProps) {
    return (
        <div className='relative rounded-full'>
            {/* Status --Start-- */}
            <div className='w-3.5 h-3.5 border-[2.5px] border-white z-10 rounded-full bg-green-500 absolute bottom-0 right-0'></div>
            {/* Status --End-- */}
            <div className='flex-shrink-0 w-[45px] h-[45px] overflow-hidden rounded-full'>
                <Image src={src} className='rounded-full' width={1178} height={1178} />
            </div>
        </div>
    );
}

export default ProfileAvatar;
