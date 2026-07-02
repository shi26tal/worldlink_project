
import Logo from '../assets/worldLinkLogo.png'
import SearchIcon from '../assets/icon/search.png'
import Bell from '../assets/icon/belli.png'
import Profile from '../assets/icon/profile-icon.png'

const HomePage = () => {
  return (
    <>
    <div className='flex flex-row'>

    
    <section>
      <div className="bg-[#4251B6] fixed top-0 left-0 z-40 w-64 h-full flex flex-col p-6 text-white font-bold text-[16px]">

        {/* logo */}
        <div className='py-8'>
          
          <img src={Logo} alt="worldlink logo" />
        </div>

        {/* dashboard */}
        <div className='ml-4 my-4'>
          <a href="/">Dashboard</a>
        </div>

        <div className='ml-4 my-4'>
         <a href="/my-plan">My Plan</a>
        </div>

        <div className='ml-4 my-4'>
          <a href="/bills-and-payments">Bills & Payments</a>
        </div>

        <div className='ml-4 my-4'>
          
          <a href="/supports">Supports</a>
        </div>

        <div className='ml-4 my-4'>
          
          <a href="/router-settings">Router Settings</a>
        </div>

       

      </div>
    </section>

    <header className='fixed top-0 flex flex-row justify-end gap-6 w-full bg-[#f8f9fc] p-5'>
      <div className='flex gap-2 w-68 bg-[#E7E8EB] py-2 px-5 rounded-3xl'>
          <input type="text" placeholder='Search devices or settings...' className='w-full text-[14px] placeholder:text-[14px]'/>
          <img src={SearchIcon} alt="Search" className='w-6 h-6'/>
      </div>
      <div className='flex items-center'>
        <img src={Bell} alt="Notification" className='w-6 h-6 '/>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        <p className='text-[12px] font-semibold'> Choi Beomgyu</p>
        <img src={Profile} alt="Profile" className='w-8 h-8 rounded-full'/>
      </div>
      

    </header>

    <main className='bg-[#f8f9fc] ml-64 mt-20 p-6 h-255'>
      <div>
        <div>
          line network status
        </div>
        <div>
          current download speed
        </div>
        <div>
          active subscription 
        </div>

      </div>
    </main>

    </div>
    </>
   
  )
}

export default HomePage