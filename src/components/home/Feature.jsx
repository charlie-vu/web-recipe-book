import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Form, Placeholder, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Feature(props) {
    const {
        className = "",
        featureList = [],
        loading = false,

    } = props;

    const router = useRouter();
    return (
        <div className={`container ${className}`}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-5">

                {
                    !loading && !!featureList.length && featureList.map((item, i) =>
                        <div key={`${item.strMeal}-${i}`} className="col">

                            <div className="rounded-4px bg-white shadow overflow-hidden">
                                <Link href={`/meal/${item.idMeal}`}>
                                    <div className="ratio ratio-4x3 overflow-hidden">
                                        <img src={item.strMealThumb} alt={item.strMeal} className="hover-scale" />
                                    </div>
                                    <h4 className="fw-bold fs-20px line-clamp-1 mt-3 px-3">{item.strMeal}</h4>

                                </Link>
                                <div className="px-3 pb-3">
                                    <Button className="mt-3 fw-semibold fs-12px shadow rounded-10px" onClick={() => { router.push(`/category/${item.strCategory}`) }}>{item.strCategory}</Button>
                                </div>
                            </div>

                        </div>
                    )
                }

                {
                    loading &&
                    [...Array(3)].map((_, i) =>
                        <div key={`loading-feature-${i}`} className="col">
                            <div className="rounded-4px shadow skeleton-glow w-100 h-100 min-h-360px"></div>
                        </div>
                    )
                }

                {
                    !loading && !featureList.length &&
                    <h4 className="text-danger">No Meals Found!</h4>
                }

            </div>
        </div>
    )
}