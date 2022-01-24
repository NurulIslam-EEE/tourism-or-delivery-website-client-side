import React from 'react';
import { useHistory } from 'react-router';
import Header from '../Header/Header';
import './Blogs.css';

const Blogs = () => {
    const history = useHistory();
    console.log(history)
    return (
        <>
            <Header style={{ backgroundColor: 'black' }}></Header>
            <div className='p-5 m-0 row d-flex'>

                <h1>BLOGS</h1>
                <div className="col-md-9">
                    <div className="row ">

                        <div className="py-4 my-3 p-md-0 py-md-0 d-md-flex blog-card">
                            <div >
                                <img className='blog-img' src="http://www.royaladventuretourism.com/thumbs/270x220r/abudhabi-city-tour-by-royal-adventure-travel-and-tourism.jpg" alt="" />
                            </div>
                            <div className='text-start ms-2 blog-text'>
                                <h3>ABU DHABI CITY TOUR</h3>
                                <p>Abu Dhabi is the capital and the second most populous city in the UAE.It is the 68th most expensive city in the world. There is a lot of activities to traverse, because of the high-rise buildings and state-of-the-art malls and mosques.</p>
                            </div>
                            <div className='ms-2 blog-btn'>
                                <p>FROM AED 230</p>
                                <button>View More</button>
                            </div>
                        </div>
                        <div className="py-4 my-3 p-md-0 py-md-0 d-md-flex blog-card">
                            <div>
                                <img className='blog-img' src="http://www.royaladventuretourism.com/thumbs/270x220r/wonder-bus-dubai-city-tour.jpg" alt="" />
                            </div>
                            <div className='text-start ms-2 blog-text'>
                                <h3>DUBAI CITY TOUR IN WONDER BUS</h3>
                                <p>Wonder bus is an amphibious bus that runs from one of Dubai’s commercial centers passing through the ancient archaeological landmarks of the city and then goes down into the creek water by turning from a bus to a boat.</p>
                            </div>
                            <div className='ms-2 blog-btn'>
                                <p>FROM AED 330</p>
                                <button>View More</button>
                            </div>
                        </div>
                        <div className="py-4 my-3 p-md-0 py-md-0 d-md-flex blog-card">
                            <div>
                                <img className='blog-img' src="http://www.royaladventuretourism.com/thumbs/270x220r/aqua-venture-royal-adventure-tickets.jpg" alt="" />
                            </div>
                            <div className='text-start ms-2 blog-text'>
                                <h3>ATLANTIS AQUAVENTURE</h3>
                                <p>Get the adrenaline pumping with record-breaking rides and slides, get up close and personal with sharks and rays or kick back and relax on 700 meters of the pristine private beach or in the new exclusive reserved seating areas .</p>
                            </div>
                            <div className='ms-2 blog-btn'>
                                <p>FROM AED 450</p>
                                <button>View More</button>
                            </div>
                        </div>
                        <div className="py-4 my-3 p-md-0 py-md-0 d-md-flex blog-card">
                            <div>
                                <img className='blog-img' src="http://www.royaladventuretourism.com/thumbs/270x220r/burj-al-arab-with-lunch.jpg" alt="" />
                            </div>
                            <div className='text-start ms-2 blog-text'>
                                <h3>BURJ AL ARAB TOUR WITH LUNCH</h3>
                                <p>Enjoy spectacular views of the Arab Gulf during the daytime and a romantic intimate dining room at night, this spectacular restaurant adjacent to the tallest atrium in the world is the perfect place to be pampered with traditional Arab cuisine.</p>
                            </div>
                            <div className='ms-2 blog-btn'>
                                <p>FROM AED 550</p>
                                <button>View More</button>
                            </div>
                        </div>
                        <div className="py-4 my-3 p-md-0 py-md-0 d-md-flex blog-card">
                            <div>
                                <img className='blog-img' src="http://www.royaladventuretourism.com/thumbs/270x220r/ferrari-world-experience-royal-adventure.jpg" alt="" />
                            </div>
                            <div className='text-start ms-2 blog-text'>
                                <h3>FERRARI WORLD ADMISSION TICKETS</h3>
                                <p>Explore a world of Ferrari fun with an entry ticket to Ferrari World in Abu Dhabi. Make tracks to this thrilling, Ferrari-branded attraction, the world’s largest indoor theme park, and enjoy its white-knuckle and family-friendly entertainments at leisure. </p>
                            </div>
                            <div className='ms-2 blog-btn'>
                                <p>FROM AED 640</p>
                                <button>View More</button>
                            </div>
                        </div>
                        <div className="py-4 my-3 p-md-0 py-md-0 d-md-flex blog-card">
                            <div>
                                <img className='blog-img' src="http://www.royaladventuretourism.com/thumbs/270x220r/dream-land-aqua-park-entry-royal-adventure.jpg" alt="" />
                            </div>
                            <div className='text-start ms-2 blog-text'>
                                <h3>DREAMLAND AQUA PARK</h3>
                                <p>Dreamland Aqua Park is the largest water park in the Middle East. The park offers more rides, more rides and more fun than any other tourist destination in the UAE.</p>
                            </div>
                            <div className='ms-2 blog-btn'>
                                <p>FROM AED 575</p>
                                <button>View More</button>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="mt-3 ms-2 catagories text-start">
                            <h2>CATAGORIES</h2> <hr />
                            <h5>CITY TOURS</h5>
                            <h5>DESERT SAFARI</h5>
                            <h5>THEME PARK</h5>
                            <h5>BURJ KHALIFA</h5>
                            <h5>BURJ AL ARAB</h5>
                            <h5>QUAD BIKE AND BUGGY</h5>
                            <h5>MUSANDAM DAY TOUR</h5>
                            <h5>FERARI WORLD ABU DHABI</h5>
                            <h5>HELICOPTER RIDE</h5>
                        </div>

                    </div>



                </div>

            </div >
        </>
    );
};

export default Blogs;