import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import api from "@/plugins/axios";
import Link from "next/link";

export default function Category(props) {
    const {
        className = "",
    } = props;
    const [categoryList, setCategoryList] = useState([]);

    const fetchCategory = () => {
        api.get('/categories.php').then((res) => {
            // console.log(res)
            setCategoryList(res.data.categories || [])
        })
    }

    useEffect(() => {
        fetchCategory();
    }, [])

    return (
        <div className={`category ${className}`}>
            <h2 className="fw-semibold fs-32px text-center">Categories</h2>

            <div className="mt-4 px-40px">
                <Swiper spaceBetween={24} breakpoints={{ 320: { slidesPerView: 1.5 }, 1024: { slidesPerView: 6.5 }, 1400: { slidesPerView: 8.5 } }}>
                    {
                        !categoryList.length ?
                            [...Array(8)].map((_, i) =>
                                <SwiperSlide key={`placeholder-${i}`}>
                                    <div className="skeleton-glow min-h-126px p-2"></div>
                                </SwiperSlide>
                            ) :
                            categoryList.map((item, i) =>
                                <SwiperSlide key={`category-${i}`}>
                                    <Link href={`/category/${item.idCategory}`} className="item">
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
    )
}