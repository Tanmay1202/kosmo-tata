import Image from "next/image";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Rahul Sharma",
      vehicle: "Tata Nexon",
      rating: 5,
      text: "Excellent experience at Kosmo Tata. The staff was very knowledgeable and helped me choose the right variant of Nexon. The delivery process was smooth and memorable.",
      date: "October 2023"
    },
    {
      name: "Priya Singh",
      vehicle: "Tata Punch",
      rating: 5,
      text: "Very professional team! From test drive to final delivery, Mr. Raghav Ahuja's team ensured everything was transparent and fast. Highly recommended dealership in Jalandhar.",
      date: "September 2023"
    },
    {
      name: "Amit Patel",
      vehicle: "Tata Safari",
      rating: 4,
      text: "Great showroom with all models on display. The sales executive patiently explained all features of the Safari. Only taking one star off because of a slight delay in delivery, but overall very happy.",
      date: "August 2023"
    },
    {
      name: "Neha Gupta",
      vehicle: "Tata Tiago EV",
      rating: 5,
      text: "Bought my first EV from Kosmo Tata. They explained the charging infrastructure and EV benefits perfectly. The car is amazing and the service team is always helpful.",
      date: "July 2023"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Customer Reviews</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Read what our happy customers have to say about their experience with Kosmo Tata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-500">Purchased: <span className="font-semibold">{review.vehicle}</span></p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className={`w-5 h-5 ${j < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow">"{review.text}"</p>
              <div className="text-sm text-slate-400 border-t border-gray-100 pt-4">
                {review.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://g.page/kosmotata/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition"
          >
            Leave a Review on Google
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
