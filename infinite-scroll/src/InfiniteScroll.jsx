import React, { useEffect, useState } from 'react'
import './App.css'

const InfiniteScroll = () => {
    const [page, setPage] = useState(1);
    const [data , setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
        //   setLoading(true);
          try {
            const response = await fetch(
              `https://picsum.photos/v2/list?page=1&limit=3`
            );
            const result = await response.json();
            setData((oldData) => [...oldData, ...result]);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        //    finally {
        //     // setLoading(false);
        //   }
        };
    
        fetchData();
      }, []);


    useEffect(()=>{

    },[])

    console.log(data)

  return (
    <div>
      {data?.map((item ,index)=>{
        return (
            <div className="container" id={index}>
            <span >this is the author name {item?.author}</span>
            <span >this is id {item?.id}</span>
            </div>
        )
      })}
    </div>
  )
}

export default InfiniteScroll
