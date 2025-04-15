import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Form, Placeholder, Row } from "react-bootstrap";
import Link from "next/link";

export default function Feature(props) {
    const {
        className = "",
        featureList = [],
        loading = false,

    } = props;
    return (
        <div className={`container ${className}`}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-5">

                {
                    !loading && !!featureList.length && featureList.map((item, i) =>
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