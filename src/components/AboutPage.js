import React from "react";

function AboutPage() {
    return (
        <div className="container mt-5">
                <h1>About Me</h1>
                <div className="video-container">
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/2Z4m4lnjxkY?si=p7HNhyKA94kG2vCp" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                </div>
        </div>
    );
}

export default AboutPage;