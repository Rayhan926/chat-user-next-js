type MessageProps = {
    mine?: boolean;
};

function Message({ mine }: MessageProps) {
    return (
        <div className={`chat_p_x text-sm flex ${mine ? 'justify-end' : ''}`}>
            <div
                className={`inline-block p-1.5 px-2.5 rounded-2xl ${
                    mine ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-900'
                }`}
            >
                Lorem ipsum
            </div>
        </div>
    );
}

export default Message;
