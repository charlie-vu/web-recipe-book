import { Card, Form, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <>
      <div className="banner mt-34px py-42px px-3 text-center">
        <div className="text-light">
          <h4 className="fw-bold fs-40px">you don't know what to cook today?</h4>
          <h4 className="fw-semibold fs-32px">Try a surprise recipe</h4>
          <button className="btn btn-primary mt-3 fs-24px">Surprise recipe</button>
        </div>
      </div>

      <div className="container mt-56px">
        <Form.Control className="max-w-650px mx-auto" placeholder="Buscar..." />
      </div>

      <div className="mt-56px text-center">
        <h2 className="fw-semibold fs-32px">Categories</h2>

        <div className="mt-4 px-40px">
          <Swiper spaceBetween={24} slidesPerView={8}>
            {[...Array(10)].map((_, i) =>
              <SwiperSlide key={`category-${i}`}>
                <div className="rounded-5px bg-card p-2 min-h-126px shadow-sm text-center">
                  <div className="d-inline-block" style={{ height: 74, width: 120, backgroundColor: 'gray' }}></div>
                  <p className="fw-bold text-dark text-shadow">Category</p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      <div className="mt-68px container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-5">
          {[...Array(9)].map((_, i) =>
            <div key={`feature-${i}`} className="col">
              <div className="rounded-4px bg-white shadow">
                <div className="d-inline-block" style={{ height: 236, width: "100%", backgroundColor: 'gray' }}></div>
                <div className="p-3">
                  <h4 className="fw-bold fs-20px">Lorem Ipsum</h4>
                  <button className="btn btn-primary mt-3 fw-semibold fs-12px shadow rounded-10px">Category</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
