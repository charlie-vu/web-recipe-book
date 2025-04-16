import api from "@/plugins/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function MealId() {
    const router = useRouter();
    const id = router.query.id;
    const [item, setItem] = useState(null);
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        if (!id) return
        api.get(`lookup.php?i=${id}`).then((res) => {
            // console.log(res.data)
            setItem(res.data.meals[0])
        })
    }, [id])

    useEffect(() => {
        if (item) {
            for (let i = 1; i <= 20; i++) {
                const ingredient = item[`strIngredient${i}`];
                const measure = item[`strMeasure${i}`];
                if (ingredient && measure) {
                    setIngredients((prev) => { return [...prev, { name: ingredient, amount: measure, imgurl: `https://www.themealdb.com/images/ingredients/${ingredient}.png` }] })
                }
            }
        }
    }, [item])

    return (
        <div className="container py-74px">
            <h2 className="text-center fw-bold fs-48px">{item?.strMeal}</h2>
            <div className="mt-5 px-5">
                {
                    !item ?
                        <div className="skeleton-glow min-h-540px"></div> :
                        <div className="ratio ratio-16x9 overflow-hidden">
                            <img src={item?.strMealThumb} alt={item?.strMeal} className="w-100 h-auto top-50 start-50 translate-middle" />
                        </div>
                }

                <div className="mt-4 text-end">
                    <Button>{item?.strCategory}</Button>
                </div>
            </div>

            <div className="mt-56px">
                <h4 className="fw-semibold fs-36px text-center">Ingredients</h4>
                <div className="mt-32px row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
                    {
                        ingredients.length ? ingredients.map((item, i) =>
                            <div key={`${item.name}-${i}`} className="col">
                                <div className="bg-white rounded-4 p-3 text-center fw-semibold h-100 min-h-200px d-flex flex-column justify-content-between">
                                    <img src={item.imgurl} alt={item.name} className="w-100" />
                                    <div className="mt-3">
                                        <p>{item.name}</p>
                                        <p>({item.amount})</p>
                                    </div>
                                </div>
                            </div>
                        ) :
                            [...Array(5)].map((_, i) =>
                                <div key={`loadingIngredient-${i}`} className="col">
                                    <div className="skeleton-glow min-h-200px rounded-3"></div>
                                </div>
                            )
                    }
                </div>
            </div>

            {
                !item ? "" :
                    <div className="mt-80px">
                        <h4 className="fw-semibold fs-36px text-center">Instructions</h4>
                        <p className="mt-32px fs-34px">{item.strInstructions}</p>
                    </div>
            }

        </div>
    )
}