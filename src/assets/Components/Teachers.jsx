import Navbar from "./Navbar" 
import Footer from "./Footer"
import teacherImg from "./Teachers/c.jpg"
import teacherImg2 from "./Teachers/a.avif"
import teacherImg3 from "./Teachers/e.jpg"
import teacherImg4 from "./Teachers/f.jpg"

const teach = [
    {
        image : teacherImg ,
        name : 'Ninad '
    },
    {
        image: teacherImg2,
        name : 'Kalai'
    },
    {
        image:teacherImg3,
        name: 'Vaishali'
    },
    {
        image:teacherImg4 ,
        name: 'Neha'
    },

    {
        image : teacherImg ,
        name : 'Ninad '
    },
    {
        image: teacherImg2,
        name : 'Kalai'
    },
    {
        image:teacherImg3,
        name: 'Vaishali'
    },
    {
        image:teacherImg4 ,
        name: 'Neha'
    },

    {
        image : teacherImg ,
        name : 'Ninad '
    },
    {
        image: teacherImg2,
        name : 'Kalai'
    },
    {
        image:teacherImg3,
        name: 'Vaishali'
    },
    {
        image:teacherImg4 ,
        name: 'Neha'
    }

]

const Teachers = ()=>{
    return(
        <>
           <Navbar/>
           <header id="teach-head" >
            <h1 className="p-4 text-3xl">
            <i className="ri-user-2-fill"></i>
                Our Teachers</h1>
            </header> 
            <section className="flex flex-wrap bg-rose-600 w-[90%] mx-auto justify-center gap-4 " >
               {
                teach.map((item , index )=>{
                    return(
                        <div  className="teach-img-container "  key={index}>
                        <img src={item.image} width="100%" />
                        <h2 className="teach-text text-2xl">{item.name}</h2>
                    </div>
                    )
                })
               }
            </section>
           <Footer/>
        </>
    )
}

export default Teachers