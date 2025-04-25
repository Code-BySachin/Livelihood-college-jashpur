import nic from '../assets/nicLogo.png';
import digitalIndia from '../assets/digitalIndia.png';
import navgurukul from '../assets/navgurukulLogo.png';

export default function CompanyLogoDisplay() {
    return (
        <marquee behavior="" direction="">
            <div className='flex h-30'>
                <a href="https://www.digitalindia.gov.in/" target="_blank">
                    <img src={digitalIndia} alt="Digital-India" className='mx-10 h-full' />
                </a>
                <a href="https://www.digitalindia.gov.in/" target="_blank">
                    <img src={navgurukul} alt="Digital-India" className='mx-10 h-full' />
                </a>
                <a href="https://www.digitalindia.gov.in/" target="_blank">
                    <img src={nic} alt="Digital-India" className='mx-10 h-full' />
                </a>
            </div>
        </marquee>
    )
}