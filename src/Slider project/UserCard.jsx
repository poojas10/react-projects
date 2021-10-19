import React,{useEffect,useState} from 'react';
import data from './data';
import './style.css'
export default function UserCard() {
    const [people,setPeople] =useState(data)
    const [index,setIndex] = useState(0)
    useEffect(() => {
        const timer = setTimeout(nextSlide, 5000);
        return ()=>{
            clearTimeout(timer)
        }
    }, [index])
    function previousSlide(){
        setIndex(prev=>prev-1)
        if(index<=0){
            setIndex(people.length-1)
        }
    }
    function nextSlide(){
        setIndex(prev=>prev+1)
        if(index>=people.length-1){
            setIndex(0)
        }
    }
    return (
        <section className='slider'>
            <div className='title'>
            <h2>
          <span>/</span>reviews
        </h2>
            </div>
            <div className='section-center'>
                {
                    people.map((user,userIndex)=>{
                        const { id, image, name, title, quote } = user;
                        let position='nextSlide'
                        if(index===userIndex){
                        position='activeSlide'
                        }
                        if(userIndex === index-1 || (index===0 && userIndex ===people.length-1)){
                            position='lastSlide'
                        }
                        return (
                            <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                          </article>
                          );
                    })
                }
                  <button className="prev" onClick={previousSlide}>
                  <i className="fas fa-chevron-left"></i>
        </button>
        <button className="next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
        </button>
            </div>
        </section>
    )
}
