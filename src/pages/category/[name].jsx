import api from "@/plugins/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Button, Spinner } from "react-bootstrap";

export default function Category() {
    const router = useRouter();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const category = router.query.name;

    useEffect(() => {
        if (category) {
            setLoading(true)
            api.get(`/filter.php?c=${category}`).then((res) => {
                // console.log(res.data)
                setList(res.data.meals)
            }).catch((e) => {
                category = 'Category Not Found!'
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [category])

    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold fs-48px">{category}</h2>

            {
                loading &&
                <div className="text-center mt-4">
                    <Spinner animation="grow" />
                </div>
            }

            <div className="row row-cols-1 row-cols-lg-3 gx-3 gy-5 pt-4">
                {
                    !!list && list.length && list.map((item, i) =>
                        <div key={`${item.strMeal}-${i}`} className="col">
                            <div className="bg-white rounded-3 overflow-hidden h-100 shadow d-flex flex-column gap-3 pb-4">
                                <div className="ratio ratio-4x3 overflow-hidden">
                                    <img src={item.strMealThumb} alt={item.strMeal} className="w-100 h-auto top-50 start-50 translate-middle" />
                                </div>
                                <div className="px-4 flex-grow-1">
                                    <h4 className="fw-semibold">{item.strMeal}</h4>
                                </div>
                                <div className="px-4">
                                    <Button href={`/meal/${item.idMeal}`}>View Recipe</Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    )
}