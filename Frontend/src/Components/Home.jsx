import NotificationBox from "./NotificationBox";
import Carousel from "./Carousel";
import About from "./About";
import AlertTicker from "./AlertTicker";
import AboutPrincipal from "./AboutPrincipal";
import CompanyLogoDisplay from "./CompanyLogoDisplay";
import UpdateNews from "./UpdateNews";
function Home() {
    return (
        <>
            <Carousel />
            <AlertTicker />
            <About />
            <section className="flex flex-col md:flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 px-4">
                <AboutPrincipal />
                <UpdateNews />
            </section>
            <CompanyLogoDisplay />
            {/* <NotificationBox /> */}
        </>
    )
}
export default Home;