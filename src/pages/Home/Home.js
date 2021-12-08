import React, { useState, useEffect,useRef,createRef } from 'react'
import './home.css'
import './responsive.css'
import phonemockup from '../../assets/images/phonemockup.png'
import goldmanSachs from '../../assets/images/image9.png'
import ubs from '../../assets/images/image11.png'
import juliusbar from '../../assets/images/image12.png'
import mckinsey from '../../assets/images/image13.png'

import NavBar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'

import { BsArrowRightShort } from 'react-icons/bs'
import { MdOutlinePlayArrow } from 'react-icons/md'

import checkCircle from '../../assets/images/check-circle.svg'
import cpu from '../../assets/images/cpu.svg'
import lock from '../../assets/images/lock.svg'
import linkedin from '../../assets/images/linkedin.svg'
import avatar from '../../assets/images/Ellipse16.png'
import vid from '../../assets/vids/vid 2.MP4'
import { comments } from '../../Utils/data'
import gsap from 'gsap'
import "aos/dist/aos.css";
import aos from 'aos'
import locomotive from 'locomotive-scroll'

// const NavBar = React.lazy(()=> import('../../components/NavBar/Navbar'))
// const Footer = React.lazy(()=> import('../../components/Footer/Footer'))




const HomePage = () => {
    const scrollRef = createRef()
    const timeline = gsap.timeline()
    // eslint-disable-next-line
    const [name, setName] = useState("")
    // eslint-disable-next-line
    const [email, setEmail] = useState("")
    
    let h1 = useRef(null);
    let pText = useRef(null);
    let btns = useRef(null);
    let imgs = useRef(null);
    let phoneImg = useRef(null);

    useEffect(() => {
        aos.init()
        timeline.from([h1, pText, btns,imgs],{
            opacity:0,
            y:"100",
            skewY:10,
            stagger:{
                amount:.4
            }
        },"-=1")
        timeline.from(phoneImg,1.2,{
            y:-240,
            ease:10,
            opacity:0
        },"-=1.2")
         // eslint-disable-next-line
        // const scroll = new locomotive({
        //     el:scrollRef.current,
        //     smooth:true
        // })
        // eslint-disable-next-line
    }, [])
    return (
        <div  className="home_container" >
                <NavBar timeline={timeline} />
                <div className="section_1">
                    <div className="container">
                        <div className="texts">
                            <h1 ref={el => h1 = el}>AI-Powered Virtual Data Room</h1>
                            <p ref={el => pText = el} className="app_summary">Cubicle offers a modern deal and data room technology designed with sophisticated simplicity for M&A, divestments, capital raising, IPOs, and restructure.</p>
                            <div ref={el => btns = el} className="btns">
                                <a href="/" className="try_btn">
                                    <p>Try Cubicle for free</p>
                                    <span><BsArrowRightShort color="#fff" size={20} /></span>
                                </a>
                                <a href="/" className="demo_btn">
                                    <span><MdOutlinePlayArrow color="#000" size={20} /></span>
                                    <p>Book a demo</p>
                                </a>
                            </div>
                            <div ref={el => imgs = el} className="row_imgs">
                                <ul>
                                    <li><img src={ubs} alt="ubs" className="sponsor_img" /></li>
                                    <li><img src={goldmanSachs} alt="goldmanSachs" className="sponsor_img" /></li>
                                    <li><img src={mckinsey} alt="mckinsey" className="sponsor_img" /></li>
                                    <li><img src={juliusbar} alt="juliusbar" className="sponsor_img" /></li>
                                </ul>
                            </div>
                        </div>
                        <div ref={el => phoneImg = el} className="app_img">
                            <img src={phonemockup} alt="phonemockup" className="phonemockup" />
                        </div>
                    </div>
                </div>
                {/* section 2 features*/}
                <div className="section_2">
                    <div className="container">
                        <h1 data-aos="fade-up" data-aos-duration="1000">Built for efficiency</h1>
                        <div className="row_features">
                            <div data-aos="fade-up" data-aos-duration="1000" className="item">
                                <img src={checkCircle} alt="Circle" className="icon" />
                                <h1>Simple modern design</h1>
                                <p>Intuitive, fast, mobile freindly, and easy-to use, even for first-timers</p>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1600" className="item">
                                <img src={lock} alt="Circle" className="icon" />
                                <h1>Ultimate security</h1>
                                <p>Save and access controls. Track usage and self destruct files</p>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2400" className="item">
                                <img src={cpu} alt="Circle" className="icon" />
                                <h1>AI automation & insights</h1>
                                <p>World-first AI tools automate processes and deliver intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 3  testimonials*/}
                <div className="section_3">
                    <div className="container">
                        <h1 data-aos="fade-up" data-aos-duration="8000">Testimonials</h1>
                        <div className="row">
                            <div data-aos="fade-up" data-aos-duration="1000" className="item_one" id="one">
                                <div className="vid_data">
                                    <div className="vid_details">
                                        <span><MdOutlinePlayArrow color="#fff" size={30} /></span>
                                        <div className="vid_contact">
                                            <p className="name">Tony Flanagan</p>
                                            <p className="role">VP, UBS</p>
                                        </div>
                                    </div>
                                    <div className="vid_text">
                                        <p>“Data room technology does not get any better than this.”</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1600" className="item_two" id="two">
                                <div className="vid_data">
                                    <div className="vid_details">
                                        <span><MdOutlinePlayArrow color="#fff" size={30} /></span>
                                        <div className="vid_contact">
                                            <p className="name">Kuukua Banson</p>
                                            <p className="role">Associate, Goldman Sachs</p>
                                        </div>
                                    </div>
                                    <div className="vid_text">
                                        <p>“Cubicle has greatly improved the workflow for my team.”</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2400" className="item_three" id="three">
                                <div className="vid_data">
                                    <div className="vid_details">
                                        <span><MdOutlinePlayArrow color="#fff" size={30} /></span>
                                        <div className="vid_contact">
                                            <p className="name">Olu Adebisi</p>
                                            <p className="role">MD, Credit Suisse</p>
                                        </div>
                                    </div>
                                    <div className="vid_text">
                                        <p>“The security and data insights of Cubicle are brilliant.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 4 comments */}
                <div className="section_4">
                    <div className="container">
                        <div className="row">
                            {
                                comments.map(comment => {
                                    return (
                                        <div data-aos="fade-up" data-aos-duration="1000" key={comment.id} className="comment_container">
                                            <div className="item_header">
                                                <div className="profile_details">
                                                    <div className="avatar_container">
                                                        <img src={avatar} alt="asd" className="avatar" />
                                                    </div>
                                                    <div className="credentials">
                                                        <p className="profile_name">{comment.profileName}</p>
                                                        <p className="user_name">{comment.userName}</p>
                                                    </div>
                                                </div>
                                                <div className="company_logo">
                                                    <img src={linkedin} alt={comment.companyLogo} className="compLogo" />
                                                </div>
                                            </div>
                                            <div className="comment_area">
                                                <p className="comment">{comment.comment}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* section 5 */}
                <div className="section_5">
                    <div className="container">
                        <div className="text_area">
                            <h1 data-aos="fade-up" data-aos-duration="800">Get free access</h1>
                            <input data-aos="fade-up" data-aos-duration="500" type="text" placeholder="Name" className="input" onChange={(e) => { setName(e.target.value) }} />
                            <input data-aos="fade-up" data-aos-duration="500" type="email" placeholder="Email address" className="input" onChange={(e) => { setEmail(e.target.value) }} />
                            <a data-aos="fade-up" data-aos-duration="500" href="/" className="try_btn">
                                <p>Try Cubicle for free</p>
                                <span><BsArrowRightShort color="#fff" size={20} /></span>
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" className="video_area">
                            <video
                                controls className="vid">
                                <source src={vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <h1>Get started with Cubicle now!</h1>
                        </div>
                    </div>
                </div>
                <Footer />
        </div>
    )
}

export default HomePage
