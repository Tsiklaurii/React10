import Footer from '../Footer/Footer'

import bg from '../../assets/images/bg.png'
import dots from '../../assets/images/dots.svg'
import Timer from '../Timer/Timer'

const Countdown = () => {
    return (
        <div className="w-full h-screen bg-cover flex flex-col justify-between" style={{ backgroundImage: `url(${bg})` }}>

            <div className="w-full flex flex-col items-center justify-center flex-1 gap-[104px]" style={{ backgroundImage: `url(${dots})` }} >
                <h1 className='text-[#FFFFFF] text-[18px] sm:text-[22px] font-RedHatText font-bold uppercase tracking-[7.5px] text-center'>We’re launching soon</h1>

                <Timer />
            </div>

            <Footer />
        </div>
    )
}

export default Countdown