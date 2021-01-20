import React from 'react';
import '../App.css';
import './Navigator.css';
import twitch from '../resources/twitch-icon.svg';
import discord from '../resources/discord-icon.svg';
import feed from '../resources/feed-icon.jpg';
import steam from '../resources/steam-icon.svg';
import tiktok from '../resources/tiktok-icon.svg';

import {Navbar, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigator() {

   return(
      <Navbar sticky="top" className="Nav-bar">
         <Navbar.Brand href={process.env.PUBLIC_URL + '/'}>
            <Image className="Home-link" src={feed}/>
         </Navbar.Brand>
         <Navbar.Text className="Home-title">
            Feed's Replay Analysis Tool
         </Navbar.Text>
         <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                  <Image  className="Button-link" src={twitch} onClick={(e) => {
                     e.preventDefault();    
                     window.open('https://twitch.tv/feedrl', '_blank');
                     }} rounded />
            </Navbar.Text>
            <Navbar.Text>
                  <Image className="Button-link" src={discord} onClick={(e) => {
                     e.preventDefault();
                     window.open('https://discord.gg/fKK2YJZZVH', '_blank');
                     }} rounded />
            </Navbar.Text>
            <Navbar.Text>
                  <Image className="Button-link" src={tiktok} onClick={(e) => {
                     e.preventDefault();
                     window.open('https://www.tiktok.com/@feedrl?lang=en', '_blank'); 
                     }} rounded />
            </Navbar.Text>
            <Navbar.Text>
                  <Image className="Button-link" src={steam} onClick={(e) => {
                     e.preventDefault();
                     window.open('https://steamcommunity.com/profiles/76561198262193029/', '_blank'); 
                     }} rounded />
            </Navbar.Text>
         </Navbar.Collapse>
      </Navbar>
   );

   /*
    return(
       <nav className="Main-nav">
         <Link className="Link-style" to="/">
            Home
         </Link>
         <div className="title">
            RL Replay Analysis Tool
        </div>
         <Link className="Link-style" to="/about">
            About
         </Link>
       </nav>    
    );
    */
}

export default Navigator;