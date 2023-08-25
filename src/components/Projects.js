import React from 'react';
import portfolio from "../assests/portfolio.png"
import todo from "../assests/todo.png"
import blog from "../assests/blog.png"
export default function Projects() {
  return (
    
    <div id='projects' className=" bg-zinc-800">
        <div>
            <h1 className='text-center text-5xl p-10'> <a href="#home">Projects</a></h1>
        </div>
        <div className=' flex md:flex-row flex-col align-middle w-full justify-center md:justify-evenly md:align-items text-white '>
            <div className="project1 flex flex-col items-center h-auto my-6 w-96 m-auto border-2 rounded-2xl mb-20">
                <h1 className=' text-3xl text-center my-6'>My Portfolio Website</h1>
              <img className=' h-40 w-64' src={portfolio} alt="" />
                <ul className=' px-14 py-4'>
                  <li>-It is a personal portfolio that gives a Short Description of me.</li>
                  <li>-I have made it using ReactJS</li>
                  <li>-This website is fully responsive</li>
                  
                </ul>
            </div>
            <div className="project2 flex flex-col items-center h-auto my-6 w-96 m-auto border-2 rounded-2xl mb-20">
              <h1 className=' text-3xl text-center my-6'>The Journal Website</h1>
              <img className=' h-40 w-64 align-middle justify-center' src={blog} alt="" />
                
                <ul className=' px-14 py-4'>
                    <li>-I created it using expressJS</li>
                    <li>-You can write blogs and compose them.</li>
                    <li>-Blogs will show up on the home page</li>                 
                </ul>

            </div>
            <div className="project3 flex flex-col items-center h-auto my-6 w-96 m-auto border-2 rounded-2xl mb-20">
                <h1 className=' text-3xl text-center my-6'>To-Do-List Website</h1>
              <img className=' h-40 w-64 align-middle justify-center' src={todo} alt="" />
                <ul className=' px-14 py-4'>
                  <li>-I have created it using expressJS.</li>
                  <li>-You can write tasks which you have to perform.</li>
                  <li>-If the task is completed you can also mark it.</li>
                </ul>

            </div>
        </div>
    </div>
  )
}
