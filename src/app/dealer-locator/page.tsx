import Image from "next/image";

export default function DealerLocatorPage() {
  const branches = [
    {
      name: "Kosmo Tata Jalandhar (Head Branch)",
      address: "G.T. Road, Jalandhar, Punjab 144001",
      phone: "+91 98765 43210",
      hours: "09:30 AM - 07:00 PM (Mon-Sun)",
      manager: "Mr. Ramesh Kumar",
      managerPhone: "+91 98765 43211",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.41951559134!2d75.50294103131751!3d31.322384795079632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin"
    },
    // Add more branches if needed
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Dealership Locator</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Find your nearest Kosmo Tata dealership and service center.
          </p>
        </div>

        <div className="grid gap-12">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
              {/* Branch Details */}
              <div className="p-8 lg:w-1/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Head Branch</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">{branch.name}</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <p className="text-slate-600">{branch.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <a href={`tel:${branch.phone}`} className="text-slate-900 font-medium hover:underline">{branch.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <p className="text-slate-600">{branch.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Leadership Team</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl">
                      {branch.manager.charAt(4)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{branch.manager}</p>
                      <p className="text-sm text-slate-500 mb-1">General Manager</p>
                      <a href={`tel:${branch.managerPhone}`} className="text-sm font-medium text-slate-900 hover:underline">{branch.managerPhone}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embedded */}
              <div className="h-[400px] lg:h-auto lg:w-2/3 bg-slate-100">
                <iframe 
                  src={branch.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
