"use client";
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    if(!localStorage.getItem("auth-token")){
      router.push("/login");
    }
  },[]);

  const CustomeBox = ({img,title,desc})=>{
    return(
      <>
          <article className='mx-6 lg:mx-28 lg:h-[20rem]  my-10 rounded-lg gap-10 w-[90%] flex flex-col overflow-hidden lg:flex-row backdrop-blur-xl bg-transparent justify-center items-center border-2 border-solid border-dark dark:border-light' >
            <div className='w-full lg:w-[40%] rounded-xl' >
            <Image src={img} width={3000} height={2000} alt="backgorund"  className=' rounded-xl  ' />
            </div>
            <div className='flex gap-4 flex-col justify-center lg:w-[50%] text-center lg:text-left ' >
              <h1 className='text-xl lg:text-6xl capitalize font-bold  ' >{title}</h1>
              <p className='lg:text-lg  ' >{desc}</p>
              <button className='border-2 w-min px-3  rounded-xl border-light hover:border-dark hover:bg-light hover:text-dark font-bold self-center lg:self-start '   >Buy</button>
            </div>
          </article>
      </>
    ) 
  }




  return (
    <>
    
      <div>
        
          <CustomeBox  img="/image1.avif" title="Car Name" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolores eius reprehenderit nisi quos voluptatum accusantium dolor ea sed, cumque id consequatur, amet sapiente! Repellat saepe praesentium hic recusandae non?" />
          <CustomeBox  img="/image2.webp" title="Car Name" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolores eius reprehenderit nisi quos voluptatum accusantium dolor ea sed, cumque id consequatur, amet sapiente! Repellat saepe praesentium hic recusandae non?" />
          <CustomeBox  img="/image3.avif" title="Car Name" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolores eius reprehenderit nisi quos voluptatum accusantium dolor ea sed, cumque id consequatur, amet sapiente! Repellat saepe praesentium hic recusandae non?" />
         

    
      </div>
    </>
  )
}
