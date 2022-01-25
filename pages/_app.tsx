import 'swiper/css';
import 'swiper/css/free-mode';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <main className='min-h-screen flex justify-center items-center bg-gray-100'>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
