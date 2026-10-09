import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      title: "Sales Executive",
      department: "Sales",
      type: "Full-time",
      location: "Jalandhar",
      experience: "1-3 Years"
    },
    {
      title: "Service Advisor",
      department: "Service",
      type: "Full-time",
      location: "Jalandhar",
      experience: "2+ Years"
    },
    {
      title: "Showroom Host",
      department: "Customer Experience",
      type: "Full-time",
      location: "Jalandhar",
      experience: "0-2 Years"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Join Our Team</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Build a rewarding career with Kosmo Tata, a leading dealership committed to excellence and customer satisfaction.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 block">{job.department}</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{job.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {job.type}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="mailto:customercare@kosmotata.in?subject=Application for ${job.title}" 
                  className="inline-block w-full md:w-auto px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}

          <div className="mt-12 bg-slate-50 p-8 rounded-2xl text-center border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Don't see a perfect fit?</h3>
            <p className="text-slate-600 mb-6">We're always looking for talented individuals. Send us your resume and we'll keep it on file.</p>
            <a 
              href="mailto:customercare@kosmotata.in?subject=General Application" 
              className="inline-block px-8 py-3 bg-white border border-gray-300 text-slate-900 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              Submit Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
