

# Introduction

"Personal what's going on page" 
- Final individual project for FullStack with Python course at Code Academy Online.
- Personal goal - to investigate 3D possibilities in web programming, using programming 
  languages learned over the course. 
- Discover and learn other tricks for web visuals along the way.


# Getting Started

1.Create Virtual Environment in project folder.  Terminal: python -m venv venv
2.Install packages from requirements.txt in to project directory. Terminal: pip install -r requirements.txt
3.Run seed_data.py file - it will create db file with names of video files and section discriptions.
4.Run run.py. file, then in terminal press: CTrl+C to stop it
5.In terminal write command: source .env.local
6.Run run.py again.

Project uses Python and flask as backend, so the page starting point is run.py file.

Front-end uses THREE.js 3D library to build  3d scene with all its objects.
Library is reached through CDN link in base.html and base_in.html files. 
No installing needed.

Camera motions are made by using Tween.js - JavaScript tweening engine.
Reached through CDN link in base_in.html files as well.


# Build

Project has Flask like structure as it is built on it:

 * Main directory - keeps run , documentation, and env files. App and venv folders.
   -Venv is virtual environment folder - it keeps all installed packages for the project.
   -App folder keeps all application files.  

 * Py files are devided to modules. And imported to other py files if dependency occurs.
   -Forms are keeping input forms,
   -routes are managing all routing of views with each other
   -and functions that involve talking with backend. 

 * Db_Modules are keeping database blueprints.
 * Templates folder - keeps all html files.
 * Static folder - holds folders with js, css, pictures ,video files.

 * All JavaScript files are dependant on THREE.js cdn link in base and base_in folders.
 

Making:

* Configure flask
* create base html file template
* Add THREE.js cdn links. in base html file
* Add main.js file to base.html
* Build three js scene in main javascript file.Outputing it through DOM "canvas" element.

Refer to:
Three.js documentation: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
Flask documentation: https://flask.palletsprojects.com/en/2.2.x/
Other available online resources like google ":)"
 





