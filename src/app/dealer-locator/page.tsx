import Image from "next/image";

export default function DealerLocatorPage() {
  const branches = [
    {
        "name": "Kosmo Tata Jalandhar",
        "address": "Kosmo Tata Motors, GT Road Jalandhar",
        "phone": "+91 70451-69141, +91 75060-21479",
        "hours": "09:30 AM - 07:00 PM (Mon-Sun)",
        "manager": "Umesh Arora",
        "managerPhone": "+91 75270-04021",
        "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.41951559134!2d75.50294103131751!3d31.322384795079632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin"
    },
    {
        "name": "Kosmo JP Mobility - Ludhiana",
        "address": "📍 G.T. Road, Dhandari Kalan, Ludhiana – 141014 | 📍 Ikom Avenue, Chandigarh Road, Samrala – 141114",
        "phone": "+91 9167058038, +91 8291023882",
        "hours": "09:30 AM - 07:00 PM (Mon-Sun)",
        "manager": "Raghav Ahuja",
        "managerPhone": "+91 97800-26839",
        "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109670.36015525946!2d75.77259163273188!3d30.900965039234197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714567890124!5m2!1sen!2sin"
    },
    {
        "name": "Kosmo Dasuya",
        "address": "GT Road Dasuya",
        "phone": "+91 91673-72329, +91 91673-36882, +91 61884-25228",
        "hours": "09:30 AM - 07:00 PM (Mon-Sun)",
        "manager": "Pritpal Mehta",
        "managerPhone": "+91 78883-98875",
        "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108253.2513904975!2d75.59012301032732!3d31.81530948967268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b790d9b4b0ba9%3A0x9d11516fc4ea4a48!2sDasuya%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714567890125!5m2!1sen!2sin"
    },
    {
        "name": "Kosmo Hoshiarpur",
        "address": "245, Main Jalandhar Road, Singriwal Hoshiarpur - 146022",
        "phone": "+91 91673-72329, +91 91673-36882, +91 61884-25228",
        "hours": "09:30 AM - 07:00 PM (Mon-Sun)",
        "manager": "Pawan Naialwal",
        "managerPhone": "Not Available",
        "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.52900742127!2d75.95254130000001!3d31.5332822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b07f87a329d29%3A0x364177b90d346048!2sHoshiarpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714567890126!5m2!1sen!2sin"
    }
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
                    {index === 0 && <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Head Branch</span>}
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
                      {branch.manager.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{branch.manager}</p>
                      <p className="text-sm text-slate-500 mb-1">General Manager</p>
                      {branch.managerPhone !== "Not Available" ? <a href={`tel:${branch.managerPhone}`} className="text-sm font-medium text-slate-900 hover:underline">{branch.managerPhone}</a> : <span className="text-sm font-medium text-slate-500">Not Available</span>}
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
