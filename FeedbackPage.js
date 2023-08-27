// import 'swiper/css';
// import './Feedback.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { EffectFade } from 'swiper/modules';
// import 'swiper/css/effect-fade';

// function Feedback() {

//     return (
//         <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
//         spaceBetween={10}
//         slidesPerView={1}
//         effect="fade"
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//     >
//        <div>
//       <SwiperSlide>
//         <img src='logo192.png'></img>
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src='logo192.png'></img>
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src='logo192.png'></img>
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src='logo192.png'></img>
//       </SwiperSlide>
//       </div>
//       <div>Feedback page</div>
//     </Swiper>
//     );
// }
// export default Feedback;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const feedbackData = [
  {
    id: 1,
    text: "Great service! I'm very satisfied.",
    rating: 5,
  },
  {
    id: 2,
    text: "Good experience. Prompt delivery.",
    rating: 4,
  },
  {
    id: 3,
    text: "Awesome customer support!",
    rating: 5,
  },
  // Add more feedback objects as needed
];

class Feedback extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Top 3 Recent Feedback</h2>
            <div id="feedbackCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {feedbackData.map((feedback, index) => (
                  <div key={feedback.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <p className="feedback-text">{feedback.text}</p>
                    <div className="rating">
                      {[...Array(feedback.rating)].map((_, starIndex) => (
                        <span key={starIndex} className="star">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div id="feedbackCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {feedbackData.map((feedback, index) => (
                  <div key={feedback.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <p className="feedback-text">{feedback.text}</p>
                    <div className="rating">
                      {[...Array(feedback.rating)].map((_, starIndex) => (
                        <span key={starIndex} className="star">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="feedbackCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {feedbackData.map((feedback, index) => (
                  <div key={feedback.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <p className="feedback-text">{feedback.text}</p>
                    <div className="rating">
                      {[...Array(feedback.rating)].map((_, starIndex) => (
                        <span key={starIndex} className="star">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Leave Your Feedback</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="feedbackText" className="form-label">Your Feedback:</label>
                <textarea id="feedbackText" className="form-control" rows="4" required></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating:</label>
                <select id="rating" className="form-select" required>
                  <option value="5">5 stars</option>
                  <option value="4">4 stars</option>
                  <option value="3">3 stars</option>
                  <option value="2">2 stars</option>
                  <option value="1">1 star</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
