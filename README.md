<div align="center">
    <img alt="NASA Logo" src="./public/images/nasa-logo.png" />
</div>

<h1 align="center">
    NASA Mission Control
</h1>

<h6 align="center">
    Habitable planents data gathered from the <a href="https://exoplanetarchive.ipac.caltech.edu/docs/data.html">NASA Exoplanet Archive</a> 
</h6>

<h6 align="center">
    Launch data from an open-source <a href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a> by the subreddit community <a href="https://www.reddit.com/r/spacex/">r/SpaceX</a>
</h6>

## About
👉&nbsp; **[Live Preview](http://54.151.58.121:8000/index.html "NASA Control Center")**

NASA Mission Control is a full-stack web application where users can schedule space flight missions to potentially habitable planets flagged as a Kepler Object of Interest(KOI) on the NASA Exoplanet Archive. 

The mission control dashboard also contains past launch missions all the way back to year 2006 with data such as the date of launch, mission & rocket name and the customer(s) of each mission. All data of past mission launches are obtained from an open-source SpaceX API.

For removal of any scheduled missions, simply click on the :x:&nbsp; button found on the left-hand side of each mission in the upcoming section of the mission dashboard.

## :gear: Core Tech Stack
**Backend**
* :sauropod:&nbsp; Deno
* :chipmunk:&nbsp; Oak
* :lock_with_ink_pen:&nbsp; TypeScript

**Frontend**
* :framed_picture:&nbsp; HTML5 & CSS3
* :cupcake:&nbsp; Vanilla JS

**Production & Deployment**
* :whale:&nbsp; Docker
* :orange_square:&nbsp; AWS EC2

## :calling: Main Features
* Schedule new space launch missions to a selection of KOI habitable planets.
* View all previous and upcoming space flights with a color-coded tag that indicates a failed or success mission.  
* Remove any upcoming missions _**(This will automatically tag the removed mission as a failed mission)**_

## :memo: License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the MIT license. For more information, please refer to the license [documentation](LICENSE.md).

## :warning: Disclaimer
This program uses an unofficial API that bares no official association, affiliation, authorization or endorsement of any kind to Space Exploration Technologies Corp (SpaceX) or any of its subsidiaries or its affiliates.

The contents of these pages are provided as an information guide only. While every effort is made in preparing the material for publication, no responsibility is accepted by or on behalf of the owner(s) for any errors, omissions or misleading statements on these pages or any site to which these pages connect. Although every effort is made to ensure the reliability of listed sites this cannot be taken as an endorsement of these sites.