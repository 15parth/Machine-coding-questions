import React, { useEffect, useState } from 'react'
import './App.css'

const InfiniteScroll = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [loading ,setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
              setLoading(true);
            try {
                const response = await fetch(
                    `https://picsum.photos/v2/list?page=${page}&limit=3`
                );
                const result = await response.json();
                setData((oldData) => [...oldData, ...result]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
               finally {
                setLoading(false);
              }
        };

        fetchData();
    }, [page]);


    useEffect(() => {
     const handleScroll =()=>{
        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -100;

        if(nearBottom && !loading){
            setPage((prevPage)=> prevPage +1)
        }

     }

     window.addEventListener('scroll' , handleScroll);

    }, [loading])

    // console.log(data)

    return (
        <div className="post-container">
        {data.map((item) => (
          <div key={item.id} className="container">
            <span>this is id {item.id}</span>
            <span>this is the author name {item.author}</span>
            <img
              className="image-post"
              src={item.download_url}
              alt="Post"
            />
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      
    )
}

export default InfiniteScroll
