import { Button, Card, Form, Placeholder, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "@/plugins/axios";
import Link from "next/link";
import _ from "lodash";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [featureList, setFeatureList] = useState([]);
  const [loadingFeature, setLoadingFeature] = useState(false);

  // ====== Debounce Search
  const [query, setQuery] = useState('');
  const handleSearch = useCallback(
    _.debounce((val) => {
      // console.log(`SEARCHING::`, val);

      setFeatureList([]);
      setLoadingFeature(true)
      api.get(`/search.php?s=${val}`).then((res) => {
        // console.log(res.data)
        setFeatureList(res.data.meals || [])
      }).finally(() => {
        setLoadingFeature(false);
      })
    }, 500), []
  )
  useEffect(() => {
    handleSearch(query);
    // Cleanup on unmount to avoid memory leaks
    return handleSearch.cancel;
  }, [query, handleSearch]);

  // ======
  const fetchCategory = () => {
    api.get('/categories.php').then((res) => {
      // console.log(res)
      setCategoryList(res.data.categories || [])
    })
  }

  const fetchFeature = () => {
    setLoadingFeature(true);
    api.get('/random.php').then((res) => {
      console.log(res.data)
      setFeatureList((prev) => { return [...prev, res.data.meals[0]] })
    }).finally(() => {
      setLoadingFeature(false)
    })
  }

  useEffect(() => {
    fetchCategory();
    // for (let i = 0; i < 9; i++) {
    //   fetchFeature();
    // }
  }, [])


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
        <Form.Control className="max-w-650px mx-auto" placeholder="Buscar..." value={query} onChange={(e) => { setQuery(e.target.value) }} />
      </div>

      <div className="category mt-56px text-center">
        <h2 className="fw-semibold fs-32px">Categories</h2>

        <div className="mt-4 px-40px">
          <Swiper spaceBetween={24} breakpoints={{ 320: { slidesPerView: 1.5 }, 1024: { slidesPerView: 6.5 }, 1400: { slidesPerView: 8 } }}>
            {
              !categoryList.length ?
                [...Array(8)].map((_, i) =>
                  <SwiperSlide key={`placeholder-${i}`}>
                    <div className="skeleton-glow min-h-126px p-2"></div>
                  </SwiperSlide>
                ) :
                categoryList.map((item, i) =>
                  <SwiperSlide key={`category-${i}`}>
                    <Link href="#" className="item">
                      <div className="rounded-5px bg-card p-2 min-h-126px min-w-129px shadow-sm text-center hover-grow">
                        <img src={item.strCategoryThumb} alt={item.strCategory} className="w-100" />
                        <p className="fw-bold text-dark text-shadow mt-1">{item.strCategory}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                )

            }
          </Swiper>
        </div>
      </div>

      <div className="mt-68px container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-5">

          {
            !loadingFeature && !!featureList.length && featureList.map((item, i) =>
              <div key={`${item.strMeal}-${i}`} className="col">
                <Link href='#' className="d-block hover-jump">
                  <div className="rounded-4px bg-white shadow overflow-hidden">
                    <div className="ratio ratio-4x3">
                      <img src={item.strMealThumb} alt={item.strMeal} className="" />
                    </div>
                    <div className="p-3">
                      <h4 className="fw-bold fs-20px line-clamp-1">{item.strMeal}</h4>
                      <Button className="mt-3 fw-semibold fs-12px shadow rounded-10px">{item.strCategory}</Button>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }

          {
            loadingFeature &&
            [...Array(3)].map((_, i) =>
              <div key={`loading-feature-${i}`} className="col">
                <div className="rounded-4px shadow skeleton-glow w-100 h-100 min-h-360px"></div>
              </div>
            )
          }

          {
            !loadingFeature && !featureList.length &&
            <h4 className="text-danger">No Meal Found!</h4>
          }



        </div>
      </div>
    </>
  );
}
