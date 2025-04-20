'use client'
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Form, Placeholder, Row } from "react-bootstrap";
import _ from "lodash";
import api from "@/plugins/axios";

import Category from "@/components/home/Category";
import Feature from "@/components/home/Feature";
import Banner from "@/components/home/Banner";

export default function Home() {
  const [featureList, setFeatureList] = useState([]);
  const [loadingFeature, setLoadingFeature] = useState(true);

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

  return (
    <>
      <Banner className="mt-34px" />

      <div className="container mt-56px">
        <Form.Control className="max-w-650px mx-auto" placeholder="Buscar..." value={query} onChange={(e) => { setQuery(e.target.value) }} />
      </div>

      <Category className="mt-56px" />
      <Feature className="mt-68px" featureList={featureList} loading={loadingFeature} />

    </>
  );
}
