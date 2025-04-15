'use client'
import api from "@/plugins/axios";
import { useEffect, useState } from "react"
import { Button, Modal, Spinner } from "react-bootstrap"

export default function Banner(props) {
    const {
        className = '',
    } = props

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const [item, setItem] = useState(null);
    const fetchRandom = () => {
        setItem(null)
        setLoading(true)
        api.get('/random.php').then((res) => {
            console.log(res.data)
            setItem(res.data.meals[0])
        }).catch((e) => {
            setShowModal(false)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        if (showModal) {
            fetchRandom()
        }
    }, [showModal])

    return (
        <>
            <div className={`banner py-42px px-3 ${className}`}>
                <div className="text-light text-center">
                    <h4 className="fw-bold fs-40px">you don't know what to cook today?</h4>
                    <h4 className="fw-semibold fs-32px">Try a surprise recipe</h4>
                    <button className="btn btn-primary mt-3 fs-24px" onClick={() => { setShowModal(true) }}>Surprise recipe</button>
                </div>
            </div>

            <Modal show={showModal} onHide={() => { setShowModal(false) }} contentClassName="rounded-0 bg-white min-h-700px min-w-lg-640px d-flex flex-column pb-5">
                <div className="py-2 px-3 text-end">
                    <i className="bi bi-x-circle text-danger fs-2 hover-scale d-inline-block cursor-pointer" onClick={() => { setShowModal(false) }}></i>
                </div>
                {
                    loading || !item ?
                        <div className="skeleton-glow min-h-360px"></div> :
                        <div className="ratio ratio-16x9 overflow-hidden">
                            <img src={item.strMealThumb} alt={item.strMeal} className="top-50 start-50 translate-middle h-auto w-100" />
                        </div>

                }
                <div className="px-40px flex-grow-1">
                    {
                        !loading && item &&
                        <>
                            <h4 className="fs-1 fw-bold text-center mt-4">{item.strMeal}</h4>
                            <div className="mt-40px">
                                <Button className="fw-semibold fs-20px">{item.strCategory}</Button>
                            </div>
                        </>
                    }
                </div>

                <div className="px-40px mt-3">
                    <div className="d-flex flex-wrap flex-column flex-lg-row gap-3 justify-content-between mt-4">
                        <Button className="fw-bold fs-26px py-2 px-4">View recipe</Button>
                        <Button className="fw-bold fs-26px py-2 px-4 text-primary" variant="secondary" onClick={fetchRandom}>
                            <i class="bi bi-arrow-left-right me-2"></i>
                            Change
                        </Button>
                        <Button className="fw-bold fs-26px py-2 px-4" variant="outline-danger" onClick={() => { setShowModal(false) }}>Close</Button>
                    </div>
                </div>


            </Modal>
        </>
    )
}