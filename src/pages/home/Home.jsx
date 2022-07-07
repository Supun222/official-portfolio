import Logo from '../../assets/images/supunnisalalogo.png';
import ProfileLogo from '../../assets/images/profilepic.png';
import Instagram from '../../assets/icons/instagram';
import Youtube from '../../assets/icons/youtube'
import Github from '../../assets/icons/github'
import Linkind from '../../assets/icons/linkind'
import Behance from '../../assets/icons/behance'
import './Home.scss';
import '../../utils/styles/scroll.scss'

function Home() {

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col h-screen items-center justify-center'>
                <img src={Logo} alt="logo" className='logo' ></img>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold font-Marisa tracking-widepro uppercase'>Supun Nisala</h2>
                    <p className='text-xs md:text-xl lg:text-2xl font-medium uppercase tracking-widepro md:tracking-widepromax lg:tracking-widepromax'>developer | gamer | designer</p>
                </div>
                <div>
                    <a href='#about' className='scroll-smooth'>
                        <svg className='arrows'>
                            <path className="a1" d="M0 0 L30 32 L60 0"></path>
                            <path className="a2" d="M0 20 L30 52 L60 20"></path>
                            <path className="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='flex flex-row aboutwrapper items-center justify-center h-screen'>
                <img src={ProfileLogo} alt='Profile Picture' className='profile_picture'></img>
                <div className='flex flex-col mt-5 md:ml-14'>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold font-Marisa tracking-widepro uppercase text-center' >about me</h3>
                    <p id='about' className='font-Arial aboutContent text-lg md:text-xl font-regular text-center break-all mt-1 md:mt-3'>Programmer, designer, photograper, traveler. Working at the sweet spot between beauty and elegance to answer design problems with honest solutions. I prefer clear logic to decoration.</p>
                    <div className='flex flex-row justify-evenly mt-5 '>
                      <Youtube />
                      <Instagram />
                      <Github />
                      <Behance />
                      <Linkind />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home; 