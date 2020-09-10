import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />


            <Content>
                <p>Hello, my name is Rakibul Hasan. I'm a full stack engineer with hands on experience in Django, MySQL and React.</p>



                <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

                <p>My latest project, Exam-Player.com, is an Online MCQ exam platform . You can check it out <a href="https://exam-player.com/" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Django, REST API and React. </p>

                <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="https://www.youtube.com/channel/UCsTFNtDg6bV562bxWdD3p4A" target="_blank" rel="noopener noreferrer">here</a></p>
                <br></br> <br></br> <br></br> <br></br> <br></br>
            </Content>
        </div>
    );

}

export default AboutPage;