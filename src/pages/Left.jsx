import './Left.css'
import React from 'react'
import coverpic from '/public/images/cover-pic.png'
import user1 from '/public/images/user-1.png'
import items from '/public/images/items.png'
import premium from '/public/images/premium.png'
import recent from '/public/images/recent.png'
import group from '/public/images/group.png'
import hashtag from '/public/images/hashtag.png'
import more from '/public/images/more.png'
import milogo from '/public/images/mi-logo.png'
import logo from '/public/images/logo.png'
import photo from '/public/images/photo.png'
import video from '/public/images/video.png'
import events from '/public/images/event.png'
import downarrow from '/public/images/down-arrow.png'
import PostCard from '../components/Card'
import { useState,useEffect } from 'react'
import postsData from '../data/posts.json'

function Left(){

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData); 
  }, []);

    return(
        <div className='container'>
            <div className='leftside'>
                <div className='profile-box'>
                    <img src={coverpic} width={'100%'}></img>
                    <div className='info'>
                        <img src={user1}></img>
                        <h1>Sriya</h1>
                        <p>Student</p>
                        <ul>
                            <li>Your profile views<span>25</span></li>
                            <li>Your post views<span>10</span></li>
                            <li>Your connections<span>500+</span></li>
                        </ul>
                    </div>
                    <div className='profile-link'>
                        <a href='#'><img src={items}></img>My items</a>
                        <a href='#'><img src={premium}></img>Try Premium</a>
                    </div>
                </div>
                <div className='activity'>
                    <h3>Recent</h3>
                    <a href='#'><img src={recent}></img>Web development</a>
                    <a href='#'><img src={recent}></img>AI</a>
                    <a href='#'><img src={recent}></img>Machine learning future</a>
                    <a href='#'><img src={recent}></img>Jobs</a>
                    <a href='#'><img src={recent}></img>Cloud</a>
                    <h3>Groups</h3>
                    <a href='#'><img src={group}></img>Web development</a>
                    <a href='#'><img src={group}></img>Google creators</a>
                    <a href='#'><img src={group}></img>Canva</a>
                    <a href='#'><img src={group}></img>Flutter</a>
                    <h3>Hashtags</h3>
                    <a href='#'><img src={hashtag}></img>React</a>
                    <a href='#'><img src={hashtag}></img>AI</a>
                    <a href='#'><img src={hashtag}></img>Deploy</a>
                    
                    <div className='more'>
                        <a href='#'>Discover More</a>
                    </div>
                </div> 
            </div>
            {/* ------------------------------------------------------------------- */}
            <div className='main'>
                <div className='create-post'>
                    <div className='post'>
                        <img src={user1}></img>
                        <textarea rows={2} placeholder='Start a post'></textarea>
                    </div>
                    <div className='post-link'>
                        <li><img src={photo}></img>Photo</li>
                        <li><img src={video}></img>Video</li>
                        <li><img src={events}></img>Event</li>
                        <li>Post</li>
                    </div>
                    <div className='sort'>
                        <hr/>
                        <p>Sort by:<span>top<img src={downarrow}></img></span></p>
                    </div>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
            {/* --------------------------------------------- */}
            <div className="rightside">
                <div className="news">
                    <img src={more} className="info-right"></img>
                    <h3>Trending News</h3>
                    <a href="#">EEEEEEEEEEEEEEEEEE</a>
                    <span>1day ago &middot; 12,123 readers</span>

                    <a href="#">EEEEEEEEEEEEEEEEEE</a>
                    <span>1day ago &middot; 12,123 readers</span>
                    
                    <a href="#">EEEEEEEEEEEEEEEEEE</a>
                    <span>1day ago &middot; 12,123 readers</span>
                    
                    <a href="#">EEEEEEEEEEEEEEEEEE</a>
                    <span>1day ago &middot; 12,123 readers</span>
                    
                    <a href="#">EEEEEEEEEEEEEEEEEE</a>
                    <span>1day ago &middot; 12,123 readers</span>

                    <a href='#' className='read-more'>Read More</a>
                </div>
                <div className='ad'>
                    <small>Ad &middot;&middot;&middot;</small>
                    <p>...................</p>
                    <div>
                        <img src={user1}></img>
                        <img src={milogo}></img>
                    </div>
                    <b>Brand and demand in Xiomi</b>
                    <a href='#' className='ad-link'>Learn More</a>
                </div>
                <div>
                    <div className='useful-link'>
                        <a href='#'>About</a>
                        <a href='#'>About</a>
                        <a href='#'>About</a>
                        <a href='#'>About</a>
                        <a href='#'>About</a>
                        <a href='#'>About</a>
                        <a href='#'>About</a>

                        <div className='copyright'>
                            <img src={logo}></img>
                            <p>LinkedIn &#169; 2025. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Left;

