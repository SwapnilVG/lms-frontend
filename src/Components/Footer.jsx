import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'
function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return(
        <>
            <footer className = 'relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20' >
                <section className='text-lg'>
                    Copyright {year} | All rights reserved
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a href='https://www.facebook.com/people/Swapnil-Gadekar/100006984345274/'  className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsFacebook/>
                    </a>
                    <a href='https://www.instagram.com/swapnilvg/' className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram/>
                    </a>
                    <a href='https://www.linkedin.com/in/swapnil-gadekar-810879217/' className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsLinkedin/>
                    </a>
                    <a href='https://github.com/SwapnilVG' className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsGithub/>
                    </a>
                </section>
            </footer>
        </>
    )
}
export default Footer;