import{cube,cube2,cube3,cube4,cube5,cube6,cube7,cube8,
    cubeRegister,cubeRegister2,cubeRegister3, cubeRegister4,
    cubeCenter, cubeSubmit, cubeSubmit20 , cubeSubmit2,cubeSubmit22,
    cubeSubmit31,cubeSubmit30,cubeSubmit32,
    cubeSubmit40, cubeSubmit41,cubeSubmit42,cubeSubmit43,
    cubeSubmit50,cubeSubmit51, cubeSubmit52, cubeSubmit53,
    cubeSubmit60, cubeSubmit61,cubeSubmit62,
    mesh1,mesh2,mesh3,objectsDistance, plane , plane2 , 
    planeMain, planeMain2,planeTop, planeButtom, planeButtomContacts} from './main_geometry.js'

import{ambientLight, directionalLight, directionalLight2, 
    pointLight , pointLight2, pointLight3, pointLight4 ,pointLight5, pointLightHelper5,
    pointLight6, pointLightHelper6, pointLight7, pointLightHelper7,
    pointLight8,pointLight9, pointLightHelper8,pointLightHelper9,
    pointLight10, pointLightHelper10, pointLight11, pointLightHelper11, 
    pointLight12, pointLightHelper12, pointLight13, pointLightHelper13,
    pointLightBottomCubes, pointLightBottomCubesHelper, pointLightBottomCubes1,
    pointLightBottomCubesHelper2,pointLightBottomCubesHelper1,pointLightBottomCubes2} from './main_lights.js'

export const cubeGroup = new THREE.Group()
       cubeGroup.add(cube)
       cubeGroup.add(pointLight)
       cubeGroup.add(cubeRegister)
       cubeGroup.position.set(-0.5 , -0.3 , 0)
       cubeGroup.rotation.z = Math.PI/2
       
       //Right menu group
export const cubeGroup2 = new THREE.Group()
       cubeGroup2.add(cube3)
       cubeGroup2.add(cubeRegister2)
       cubeGroup2.add(pointLight2)
       cubeGroup2.position.set(1 , 0.3 , 0)
       cubeGroup2.rotation.z = -Math.PI/2
       
       //TOP menu group
export const cubeGroup3 = new THREE.Group()
       cubeGroup3.add(cube5)
       cubeGroup3.add(cubeRegister3)
       cubeGroup3.add(pointLight3)
       cubeGroup3.position.set(0 , 0.7 , 0)
       // cubeGroup3.rotation.z = -Math.PI/2
       
       //Bottom menu group
export const cubeGroup4 = new THREE.Group()
       cubeGroup4.add(cube7)
       cubeGroup4.add(cubeRegister4)
       cubeGroup4.add(pointLight4)
       cubeGroup4.position.set(0.5, -0.7, 0)
       cubeGroup4.rotation.z = -Math.PI
       
       //All menu Group 
export const allMenuGroup = new THREE.Group()
       allMenuGroup.add(cubeGroup, cubeGroup2, cubeGroup3, cubeGroup4, cubeCenter)
       allMenuGroup.position.set(-0.23, 0 , -6)
       
       //navGroup1 "to the right"
export const navigationGroup = new THREE.Group()
       navigationGroup.add(pointLight5,cubeSubmit20, cubeSubmit2,
                           cubeSubmit22)
       navigationGroup.position.z = -4.76
       navigationGroup.position.y = -0.4
       
       //navGroup2 "to the left"
export const navigationGroup2 = new THREE.Group()
       navigationGroup2.add(pointLight6,pointLight7,cubeSubmit30, 
                            cubeSubmit31,cubeSubmit32)
       navigationGroup2.position.z = -6.85
       navigationGroup2.position.y = -0.65
       
       //navGroup3 "at the back"
export const navigationGroup3 = new THREE.Group()
       navigationGroup3.add(pointLight8,pointLight9, cubeSubmit40, 
                            cubeSubmit41,cubeSubmit42
                            )
       navigationGroup3.position.z = 0
       navigationGroup3.position.x = -6.85
       navigationGroup3.position.y = -0.3
       navigationGroup3.rotation.y = Math.PI/2
       
       //navGroup4 "at the top"
export const navigationGroup4 = new THREE.Group()
       navigationGroup4.add(pointLight10,pointLight11, cubeSubmit50, 
                            cubeSubmit51,cubeSubmit52,
                            )
       navigationGroup4.position.z = 0
       navigationGroup4.position.x = 5.85
       navigationGroup4.position.y = 0.9
       navigationGroup4.rotation.y = -Math.PI/2
       navigationGroup4.rotation.x = Math.PI/2
       
       //navGroup5 "at the Buttom"
export const navigationGroup5 = new THREE.Group()
       navigationGroup5.add(pointLight12,pointLight13, cubeSubmit60, 
                            )
       navigationGroup5.position.z = 0
       navigationGroup5.position.x = 5.85
       navigationGroup5.position.y = -0.9
       navigationGroup5.rotation.y = -Math.PI/2
       navigationGroup5.rotation.x = Math.PI/2
       
       //video planes Group
export const videoGroup = new THREE.Group()
       videoGroup.add(plane, plane2, planeMain ) //planeMain2