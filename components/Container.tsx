type ContainerProps = {
    children?: React.ReactNode;
};

function Container({ children }: ContainerProps) {
    return (
        <section className=' h-screen sm:h-[90vh] aspect-[3/5] bg-white sm:rounded-2xl overflow-hidden flex flex-col'>
            {children}
        </section>
    );
}

export default Container;
