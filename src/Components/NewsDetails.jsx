import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from './Header';
import RightAside from './HomeLayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({})
    useEffect(() => {
        const news = data.find((singleNews) => singleNews.id == id )
        setNews(news);
    }, [data, id]);
    return (
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <section className=" grid grid-cols-12">
          <main className="col-span-9">
            <h1 className="mb-4 font-bold text-2xl">Bear News</h1>
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </main>
          <aside className="col-span-3 top-0 h-screen">
            <RightAside></RightAside>
          </aside>
        </section>
      </div>
    );
};

export default NewsDetails;