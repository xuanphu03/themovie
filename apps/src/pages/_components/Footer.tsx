import BackgroundMovie from '@/assets/footer-bg.jpg'
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <div className="mt-10 h-113 relative">
      <div className="absolute z-10 text-secondary flex flex-col gap-5 items-center justify-center w-full h-full">
        <img src={logo} alt="logo page" width={200} />
        <div className='flex gap-16 text-xl'>
          <ul className='space-y-2 cursor-default'>
            <li>Home</li>
            <li>Contact us</li>
            <li>Team of services</li>
            <li>About us</li>
          </ul>
          <ul className='space-y-2 cursor-default'>
            <li>Live</li>
            <li>FAQ</li>
            <li>Premium</li>
            <li>Privacy policy</li>
          </ul>
          <ul className='space-y-2 cursor-default'>
            <li>You must watch</li>
            <li>Recent release</li>
            <li>Top IMDB</li>
          </ul>
        </div>
      </div>
      <img className="w-full h-full object-cover " src={BackgroundMovie} alt="Background movie" />
    </div>
  )
}
