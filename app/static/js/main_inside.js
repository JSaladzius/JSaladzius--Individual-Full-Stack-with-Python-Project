// import * as THREE from 'three'
// import * as dat from 'lil-gui'
// import gsap from "/gsap"

import {
  cameraRotateX, cameraRotateX2, cameraRotateY, cameraRotateY2,
  cubePress, cubePress2, cubePress3, cubePress4, videoRotate, videoRotate2, camRotateX, camRotateX2
} from './myTweens.js'

import {
  ambientLight, directionalLight, directionalLight2,
  pointLightBottomCubes, pointLightBottomCubes1,
  pointLightBottomCubes2
} from './main_lights.js'

import {
  cube, cube3, cube5, cube7, 
  cubeRegister, cubeRegister2, cubeRegister3, cubeRegister4,
  cubeCenter, cubeSubmit20, cubeSubmit2, cubeSubmit22,
  cubeSubmit31, cubeSubmit30, cubeSubmit32,
  cubeSubmit50, cubeSubmit51, cubeSubmit52,
  cubeSubmit60,
  objectsDistance, plane, plane2,
  planeTop, planeButtom
} from './main_geometry.js'

import {
  allMenuGroup, navigationGroup, videoGroup,
  navigationGroup2, navigationGroup3, navigationGroup4,
  navigationGroup5
} from './groups.js'

import {
  createGeometryTopRight, createGeometryBottomLeft,
  createGeometryBottomRight, createGeometryTopLeft,
} from './background_geometry.js'

import { particles } from './particles.js'

import {
  backgroundGroup1, backgroundGroup2, backgroundGroup3,
  backgroundGroup4, allRectangles
} from './background_Groups.js'

import { materialV5 , materialV4 , materialV3 ,materialV1,materialV2 } from './main_materials.js'

import { nextVideo, videoMaterialsUp , videosUp, videoMaterialsLeft, 
         videosLeft, videoMaterialsRight, videosRight } from './nextVideo.js'


// import {enterFullScreen} from './fullscreen.js'
// const element = document.documentElement;
// enterFullScreen(element)


/*** Base ***/

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
export const scene = new THREE.Scene()

//Video
const video = document.getElementById('v1')
const video2 = document.getElementById('v2')
const video3 = document.getElementById('v3')
const video4 = document.getElementById('v4')
const video5 = document.getElementById('v5')
const video8 = document.getElementById('v8')

video3.muted = true
video3.play()
video3.loop = true

video2.muted = true
video2.play()
video2.loop = true;

video4.muted = true
video4.play()
video4.loop = true

video.muted = true
video.play()
video.loop = true

/** CONTROLLERS*/


const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / sizes.width) * 2 - 1
  mouse.y = (event.clientY / sizes.height) * -2 + 1
})

window.addEventListener("mouseout", (event) => {
  mouse.x = 0;
  mouse.y = 0;
})

const title1 = document.getElementById('title1')
const title12 = document.getElementById('title12')
const title13 = document.getElementById('title13')
const nav_container_invisible = document.querySelector('.nav_container_invisible')
const body = document.querySelector('body')


//ON CLICKS
function onClick(passedObject) {
  window.addEventListener("click", (event) => {
    if (currentIntersect) {
      if (currentIntersect.object === passedObject) {
        cubePress2(passedObject)
      }
    }
  })
}
function onClick2(passedObject) {
  window.addEventListener("click", (event) => {
    if (currentIntersect) {
      if (currentIntersect.object === passedObject) {
        cubePress3(passedObject)
      }
    }
  })
}

function onClick3(passedObject) {
  window.addEventListener("click", (event) => {
    if (currentIntersect) {
      if (currentIntersect.object === passedObject) {
        cubePress4(passedObject)
      }
    }
  })
}

onClick(cubeSubmit2)
onClick(cubeSubmit22)

onClick2(cubeSubmit30)
onClick2(cubeSubmit31)
onClick2(cubeSubmit32)

onClick3(cubeSubmit50)
onClick3(cubeSubmit51)
onClick3(cubeSubmit52)



/////// TEXT LETTER BY LETTER onclick ////////////////////////////////
const by_Letter_Speed = 300
window.addEventListener("click", (event) => {
  if (currentIntersect) {
    if (currentIntersect.object === cube ||
      currentIntersect.object === cube3 ||
      currentIntersect.object === cube5
      ) {

      if (currentIntersect.object === cube) {
        const message = document.getElementById('text').textContent
        setTimeout(() => {
          by_Letter(message)
        }, by_Letter_Speed );
      }
      if (currentIntersect.object === cube3) {
        const message = document.getElementById('text2').textContent
        setTimeout(() => {
          by_Letter(message)
        }, by_Letter_Speed );

      }
      if (currentIntersect.object === cube5) {
        const message = document.getElementById('text').textContent
        setTimeout(() => {
          by_Letter(message)
        }, by_Letter_Speed );

      }
     
    

      function by_Letter(message) {
        const textElement = document.getElementById("by_letter_output1")
        textElement.textContent = "";
        let i = 0;
        const interval = setInterval(function () {
          textElement.textContent += message.charAt(i);
          i++;
          if (i > message.length) {
            clearInterval(interval);
          }
          window.addEventListener("click", (event) => {
            if (
              currentIntersect.object === cube ||
              currentIntersect.object === cube3 ||
              currentIntersect.object === cube5 ||
              currentIntersect.object === cubeSubmit20 ||
              currentIntersect.object === cubeSubmit30 ||
              currentIntersect.object === cubeSubmit31 ||
              currentIntersect.object === cubeSubmit50 
            ) {
              clearInterval(interval)
              textElement.innerHTML = "";
            }
          })
        }, 10);

      }
    }
  }else{
    console.log('No intersect');
  }
})

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

/*on click Camera rotates, video play, cubepress*/
//MAIN MENU

window.addEventListener("click", (event) => {
  if (currentIntersect) {
    if (currentIntersect.object === cube) {
      cubePress(cube)
      cameraRotateY2(camera)

      function video2Play() {
        video8.play()
        video8.loop = true;
      }
      setTimeout(video2Play, 400)
    }

    if (currentIntersect.object === cube3) {
      cubePress(cube3)
      cameraRotateY(camera)
      function videoPlay() {
        video.play()
        video.loop = true;
      }
      setTimeout(videoPlay, 400)
    }

    if (currentIntersect.object === cube5) {
      console.log("press cube5")
      cubePress(cube5)
      cameraRotateX2(camera)
      
        

      
      function videoPlay() {
        video4.play()
        video4.loop = true;
      }
      setTimeout(videoPlay, 400)
    }
    

    if (currentIntersect.object === cube7) {
      cubePress(cube7)
      cameraRotateX(camera)
      body.style.overflow = 'scroll'
    }

    //RIGHT navigation
    if (currentIntersect.object === cubeSubmit22) {
        nextVideo(1, plane, videoMaterialsRight , videosRight)
      // cameraRotateY(camera)
      // function video5Play() {
      //   video5.play()
      //   video5.loop = true;
      // }
      // video5Play()
    }
    if (currentIntersect.object === cubeSubmit2) {
        nextVideo(2, plane, videoMaterialsRight , videosRight)
      // cameraRotateY2(camera)
    }


    if (currentIntersect.object === cubeSubmit20) {
      console.log("Click On cube20");
      cubePress2(cubeSubmit20)
      cameraRotateY2(camera)

    }

    //LEFT navigation
    if (currentIntersect.object === cubeSubmit30) {
      console.log("Click On cube30");
      cameraRotateY(camera)
    }

    if (currentIntersect.object === cubeSubmit32) {
        nextVideo(1, plane2, videoMaterialsLeft , videosLeft)
      // cameraRotateY(camera)


    }
    if (currentIntersect.object === cubeSubmit31) {
        nextVideo(2, plane2, videoMaterialsLeft , videosLeft)
      // cameraRotateY2(camera)
      // function video5Play() {
      //   video5.play()
      //   video5.loop = true;
      // }
      // video5Play()
    }

    //BACK navigation
    
    //UP navigation
    if (currentIntersect.object === cubeSubmit50) {
      console.log("Click On cube50");
      camRotateX(camera)
    }

    if (currentIntersect.object === cubeSubmit52) {
        console.log("Click On cube52");
        nextVideo(1, planeTop, videoMaterialsUp , videosUp)
    }

    if (currentIntersect.object === cubeSubmit51) {
      console.log("Click On cube51");
      nextVideo(2,planeTop , videoMaterialsUp , videosUp )
      // camRotateX(camera)
      // planeTop.material = materialV5
      // video5.play()
      // video5.loop = true
      // video4.pause()
    }


    //BUTTOM NAVIGATION
    if (currentIntersect.object === cubeSubmit60) {
      cubePress2(cubeSubmit60)
      camRotateX2(camera)
      // function cameraRot0() {
      //   camera.rotation.x = 0
      // }
      // setTimeout(cameraRot0, 200)
      body.style.overflow = 'hidden'
    }

    if (currentIntersect.object === cubeRegister ||
      currentIntersect.object === cubeRegister2 ||
      currentIntersect.object === cubeRegister3 ||
      currentIntersect.object === cubeRegister4) {
      window.location.href = document.querySelector(".logout")
      console.log("Click On cubeRegister");
    }
  }
})


/*** RAYCASTER */
const raycaster = new THREE.Raycaster();
/*** Add Lights from main_lights.js */
scene.add(ambientLight, directionalLight, directionalLight2,
  pointLightBottomCubes,
  pointLightBottomCubes1, pointLightBottomCubes2,
)

/**ADD GEOMETRY TO SCENE */
scene.add(allMenuGroup, navigationGroup, videoGroup,
  navigationGroup2, navigationGroup4,
  navigationGroup5, planeTop, planeButtom);

for (let i = 1; i < 100; i++) {
  scene.add(backgroundGroup1.add(createGeometryTopRight()))
  scene.add(backgroundGroup2.add(createGeometryBottomLeft()))
  scene.add(backgroundGroup3.add(createGeometryBottomRight()))
  scene.add(backgroundGroup4.add(createGeometryTopLeft()))
}

/**TWEEN animation */
const animate = (t) => {
  requestAnimationFrame(animate)
  TWEEN.update(t)
}
animate()

/**ADD PARTICLES */
scene.add(particles)

/**Window Sizes*/
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}


/** Camera */

// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000)
cameraGroup.add(camera, navigationGroup4, navigationGroup, navigationGroup2, navigationGroup5)
// camera.rotation.x = -Math.PI/2

/** Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/** Scroll LISTEn*/
let scrollY = window.scrollY

let currentSection = 0
window.addEventListener('scroll', () => {
  scrollY = window.scrollY
  const newSection = Math.round(scrollY / sizes.height)
})


/** Cursor */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = event.clientY / sizes.height - 0.5
})


/**************************************************************************************
 *************************************************************************************/
/** Animate */
const clock = new THREE.Clock()
let previousTime = 0
let currentIntersect = null;



const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - previousTime
  previousTime = elapsedTime

  // Animate camera
  camera.position.y = - scrollY / sizes.height * objectsDistance * 2
  const parallaxX = cursor.x * 0.5
  const parallaxY = - cursor.y * 0.5
  cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
  cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

  //cAST A RAY
  raycaster.setFromCamera(mouse, camera);
  const objects = [cube, cube3, cube5, cube7, cubeRegister,
    cubeRegister2, cubeRegister3, cubeRegister4,
    cubeSubmit20, cubeSubmit2, cubeSubmit22,
    cubeSubmit30, cubeSubmit31, cubeSubmit32,
    cubeSubmit50, cubeSubmit51, cubeSubmit52,cubeSubmit60];
  const intersects = raycaster.intersectObjects(objects);


  for (const object of objects) {
    object.material.color.set("#d1d1d1");
    cubeSubmit2.material.color.set("#ff2e51")
    cubeSubmit22.material.color.set("#ff2e51")
    cubeSubmit20.material.color.set("#ff2e51")
    cubeSubmit30.material.color.set("#ff2e51")
    cubeSubmit50.material.color.set("#ff2e51")
    cubeSubmit51.material.color.set("#ff2e51")
    cubeSubmit52.material.color.set("#ff2e51")
    cubeSubmit60.material.color.set("#ff2e51")
  }

  for (const intersect of intersects) {
    intersect.object.material.color.set("red");
  }

  //Mouse Witness
  if (intersects.length) {
    if (currentIntersect === null) { console.log("mouse enter") }
    currentIntersect = intersects[0]
  }
  else {
    if (currentIntersect) { console.log("mouse leave") }
    currentIntersect = null
  }

  // Animate Center Cube

  cubeCenter.rotation.y += deltaTime * 0.07

  /**background rotations */
  allRectangles.forEach(rect => {
    rect.forEach(element => {
      let randomRotation = Math.random() * 5
      element.rotation.x += deltaTime * 0.1 * randomRotation
      element.rotation.y += deltaTime * 0.12 * randomRotation
    });
  })

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}
tick()

/**************************************************************************************
 *************************************************************************************/