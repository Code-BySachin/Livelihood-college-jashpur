import nic from '../assets/nicLogo.png';
import digitalIndia from '../assets/digitalIndia.png';
import navgurukul from '../assets/navgurukulLogo.png';

export default function CompanyLogoDisplay() {
    const logos=[{
        id: 1, // No need of id here.
        src: digitalIndia,// Drive or cloud links of images
        alt: "Digital-India",
        link: "https://www.digitalindia.gov.in/"
    },
    {
        id: 2,
        src: navgurukul,
        alt: "Navgurukul",
        link: "https://www.digitalindia.gov.in/"
    },
    {   
        id: 3,
        src: nic,
        alt: "NIC",
        link: "https://www.digitalindia.gov.in/"
    }]
    return (
        <marquee behavior="" direction="">
            <div className='flex h-30'>
               {logos.map((obj,index)=><a key={index} href={obj.link} target="_blank">
                    <img src={obj.src} alt={obj.alt} className='mx-10 h-full' />
                </a>)}
            </div>
        </marquee>
    )
}