import ContactForm from "@/components/forms/ContactForm";
import { use } from "react";

export default function ContactUsPage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string }>;
}) {
  const resolvedSearchParams = use(searchParams);
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch with Kosmo Tata. Whether you have a question about our vehicles, need assistance with your current car, or want to explore finance options, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Head Office</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Address</h4>
                  <p className="text-slate-900 font-medium">
                    Kosmo Tata Motors<br />
                    G.T. Road, Jalandhar<br />
                    Punjab 144001, India
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</h4>
                  <a href="mailto:customercare@kosmotata.in" className="text-slate-900 font-medium hover:underline">
                    customercare@kosmotata.in
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone</h4>
                  <a href="tel:+917045169141" className="text-slate-900 font-medium hover:underline">
                    +91 70451-69141
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Working Hours</h4>
                  <p className="text-slate-900 font-medium">
                    Monday - Sunday<br />
                    09:30 AM - 07:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-slate-300 mb-6">Our dedicated support team is available 24/7 for emergency roadside assistance.</p>
              <a href="tel:18002097979" className="inline-block px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition">
                Call Toll Free: 1800 209 7979
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <ContactForm preselectedModel={resolvedSearchParams.model} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
