

const RouterSettingPage = () => {
  return (
    <div className="bg-[#f8f9fc] ml-64 mt-20 p-6 min-h-screen">
        <div className="mb-2">
            <h1 className="text-[#24389C] text-4xl font-bold tracking-wide mb-2">Router Settings</h1>
            <p className="text-[#454652] text-sm">Network Hardware &gt; <span className="text-[#24389C]">Nokia G-2425G-A</span></p>
        </div>

        <div className="grid grid-cols-12 gap-6">
        
        <div className="col-span-7 flex flex-col gap-6">
          {/* Band steering */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-24">
            Band Steering
          </div>

          {/* WiFi configuration */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-95">
            Wi-Fi Configuration
          </div>

          {/* About router */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-75">
            About Router
          </div>
        </div>

       
        <div className="col-span-5 flex flex-col gap-6">
          {/* Online card */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-48">
            Online
          </div>

          {/* Connected devices */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex-1 min-h-100">
            Connected Devices
          </div>
        </div>
      </div>

    </div>
  )
}

export default RouterSettingPage