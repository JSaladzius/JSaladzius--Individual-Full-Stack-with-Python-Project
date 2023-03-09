import{materialV1, materialV2 , material0 , material1 , material2 ,
    material3 , material4 , materialSubmit ,materialSubmit20,materialSubmit30,
    materialSubmit40, materialSubmit50,materialSubmit60, materialRegister, backMaterial, materialV3,materialV8,
    materialV4,materialV5, navCubeMaterial,planeBottomMaterial, planeBottomContactsMaterial} from './main_materials.js'

const objectDistance = 2;    

/**MAIN PLAIN */
const planeMain = new THREE.Mesh(
  new THREE.PlaneGeometry(60, 70),
  materialV3
  );
  planeMain.position.set(0, 0, -70);
  
const planeMain2 = new THREE.Mesh(
  new THREE.PlaneGeometry(60, 70),
  materialV5
  );
  planeMain2.position.set(0, 0, 70);
  planeMain2.rotation.y = Math.PI
    
const planeTop = new THREE.Mesh(
  new THREE.PlaneGeometry(110, 110),
  materialV4
  );
  planeTop.position.set(0, 70, 0);
  planeTop.rotation.x = Math.PI/2
  
const planeButtom = new THREE.Mesh(
  new THREE.PlaneGeometry(145, 145),
  // materialV2
  planeBottomContactsMaterial
  );
  planeButtom.position.set(0, -110, 0);
  planeButtom.rotation.x = -Math.PI/2
  
const planeButtomContacts = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  // materialV2
  planeBottomContactsMaterial
  );
  planeButtomContacts.position.set(0, -69, 0);
  planeButtomContacts.rotation.x = -Math.PI/2

/**pilnas pasukimas  RIGHT*/
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(60, 70), //window.innerHeight),//12, 5
  materialV1
);
plane.position.set(70,0,0) 
plane.rotation.y = -Math.PI/2


/**pilnas pasukimas  LEFT*/
const plane2 = new THREE.Mesh(
  new THREE.PlaneGeometry(90, 60), //12, 5
  materialV8
);

plane2.position.set(-70,0,0) 
plane2.rotation.y = Math.PI/2


/**Navigation geometry */
const cubeSubmit20 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.3, 0.01),
  materialSubmit20
);
cubeSubmit20.position.set( 10, 2.2, 0.7); //4, 1, 4 
cubeSubmit20.rotation.y = -Math.PI/2

const cubeSubmit2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit2.position.set( 10, 2.2, 1.8);

const cubeSubmit22 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit22.position.set( 10, 2.2, 2.2);

const cubeSubmit23 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit23.position.set( 10, 2.2, 10.5);

///////////////////////////////////////////////////////////

const cubeSubmit30 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.3, 0.01),
  materialSubmit30
);
cubeSubmit30.position.set( -10 , 2.5, 10.9);  //4, 1, 4  //10.5, 2.2, 0.7
cubeSubmit30.rotation.y = Math.PI/2

const cubeSubmit31 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit31.position.set( -10, 2.5, 9.8);

const cubeSubmit32 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit32.position.set( -10, 2.5, 9.4);

const cubeSubmit33 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit33.position.set( -10, 2.5, 2);
//////////////////////////////////////////////////////////////////////////
const cubeSubmit40 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.3, 0.01),
  materialSubmit40
);
cubeSubmit40.position.set( -10 , 2.1, 11);  //4, 1, 4   //-10, 2.6, -2
cubeSubmit40.rotation.y = Math.PI/2

const cubeSubmit41 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit41.position.set( -10, 2.1, 9.8);

const cubeSubmit42 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit42.position.set( -10, 2.1, 9.4);

const cubeSubmit43 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  materialSubmit
);
cubeSubmit43.position.set( -10, 2.1, 2);


//////////////////////////////////////////////////////////////////////////
// const basic = new THREE.MeshBasicMaterial({
//   color: "#4e4f4f",
//   // map: backTexture,
// }); 

const cubeSubmit50 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.35, 0.01),
  materialSubmit50
);
cubeSubmit50.position.set( -10 , 2, 10.1);  //4, 1, 4   //-10, 2.6, -2
cubeSubmit50.rotation.y = Math.PI/2

const cubeSubmit51 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.35, 0.3),
  navCubeMaterial
);
cubeSubmit51.position.set( -10, 2, 9);

const cubeSubmit52 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.35, 0.3),
  navCubeMaterial
);
cubeSubmit52.position.set( -10, 2, 8.6);

const cubeSubmit53 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3, 0.35, 0.3),
  navCubeMaterial
);
cubeSubmit53.position.set( -10, 1.8, 9.8);
//////////////////////////////////////////////////////////////////////////
// const basic = new THREE.MeshBasicMaterial({
//   color: "#4e4f4f",
//   // map: backTexture,
// }); 

const cubeSubmit60 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.3, 0.01),
  materialSubmit60
);
cubeSubmit60.position.set( 10 , -2, 10.1);  //4, 1, 4   //-10, 2.6, -2
cubeSubmit60.rotation.y = Math.PI/2
cubeSubmit60.rotation.x = Math.PI

const cubeSubmit61 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  navCubeMaterial
);
cubeSubmit61.position.set( 10, -2, 9);

const cubeSubmit62 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 0.3, 0.3),
  navCubeMaterial
);
cubeSubmit62.position.set( 10, -2, 8.6);

const cubeSubmit63 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3, 0.3, 0.3),
  navCubeMaterial
);
cubeSubmit63.position.set( 10, -1.8, 9.8);


//////////////////////////////////////////////////////////////////////////
/**MAIN MENU geometry */
  const cubeCenter = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.9, 0.9),
    material0
  );

  //LEFT MENU geo
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.45, 0.45),
  material1
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.45, 0.45),
  material1
);

const cubeSubmit = new THREE.Mesh(
  new THREE.BoxGeometry(0.35, 0.35, 0.35),
  materialSubmit
);

const cubeRegister = new THREE.Mesh(
  new THREE.BoxGeometry(0.40, 0.40, 0.40),
  materialRegister
);


 //RIGHT MENU geo
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.45, 0.45),
  material2
);

const cube4 = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.45, 0.45),
  material2
);
const cubeRegister2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.40, 0.40, 0.40),
  materialRegister
);

//TOP MENU geo
const cube5 = new THREE.Mesh(
 new THREE.BoxGeometry(1.7, 0.45, 0.45),
 material3
);

const cube6 = new THREE.Mesh(
 new THREE.BoxGeometry(1.7, 0.45, 0.45),
 material3
);

const cubeRegister3 = new THREE.Mesh(
 new THREE.BoxGeometry(0.40, 0.40, 0.40),
 materialRegister
);

//Bottom MENU geo
const cube7 = new THREE.Mesh(
 new THREE.BoxGeometry(1.7, 0.45, 0.45),
 material4
);

const cube8 = new THREE.Mesh(
 new THREE.BoxGeometry(1.7, 0.45, 0.45),
 material4
);

const cubeSubmit4 = new THREE.Mesh(
 new THREE.BoxGeometry(0.35, 0.35, 0.35),
 materialSubmit
);

const cubeRegister4 = new THREE.Mesh(
 new THREE.BoxGeometry(0.40, 0.40, 0.40),
 materialRegister
);


//CENTER Menu geo positions
cubeCenter.position.set(0.23, 0 ,-1.5)
cubeCenter.rotation.set(0, 0 , 0)

//LEFT Menu geo positions
cube.position.set(0, 0, -1.5)
cube.position.y = objectDistance * 0.15;

cube2.position.set(0, 0, -1.5)
cube2.position.y = -objectDistance * 0.15;

cubeSubmit.position.set(-0.4, -0.6, -1.5);
cubeSubmit.position.y = -objectDistance * 0.15;
cubeRegister.position.set(0.4, 0.6, -1.5);
cubeRegister.position.y = objectDistance * 0.45;


//RIGHT Menu geo positions
cube3.position.set(0,0,-1.5)
cube3.position.y = objectDistance * 0.15;

cube4.position.set(0,0,-1.5)
cube4.position.y = -objectDistance * 0.15;

cubeRegister2.position.set(0.4, 0.6, -1.5);
cubeRegister2.position.y = objectDistance * 0.45;


//TOP Menu geo positions
cube5.position.set(0,0,-1.5)
cube5.position.y = objectDistance * 0.15;

cube6.position.set(0,0,-1.5)
cube6.position.y = -objectDistance * 0.15;


cubeRegister3.position.set(0.4, 0.6, -1.5);
cubeRegister3.position.y = objectDistance * 0.45;


//BOTTOM Menu geo positions
cube7.position.set(0,0,-1.5)
cube7.position.y = objectDistance * 0.15;
cube7.rotation.z = Math.PI

cube8.position.set(0,0,-1.5)
cube8.position.y = -objectDistance * 0.15;

cubeSubmit4.position.set( 0, 0, -1.5);
cubeSubmit4.position.y = -objectDistance * 0.4;
cubeRegister4.position.set(0.4, 0.6, -1.5);
cubeRegister4.position.y = objectDistance * 0.45;


/**Section Objects */
const objectsDistance = 4
const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    materialV1
)
const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    materialV1
)
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    materialV1
)

mesh1.position.x = 2
mesh2.position.x = - 2
mesh3.position.x = 2

mesh1.position.y = - objectsDistance * 0
mesh2.position.y = - objectsDistance * 1
mesh3.position.y = - objectsDistance * 2


export{cube,cube2,cube3,cube4,cube5,cube6,cube7,cube8,
       cubeRegister,cubeRegister2,cubeRegister3, cubeRegister4,
       cubeCenter, cubeSubmit, cubeSubmit20, cubeSubmit2, cubeSubmit22, cubeSubmit23,
       cubeSubmit31,cubeSubmit30,cubeSubmit32,cubeSubmit33,cubeSubmit4,
       mesh1,mesh2,mesh3 ,objectsDistance,plane, 
       plane2, planeMain, planeMain2, planeTop, planeButtom,planeButtomContacts,
       cubeSubmit40, cubeSubmit41,cubeSubmit42,cubeSubmit43,cubeSubmit50 ,cubeSubmit51,
       cubeSubmit52,cubeSubmit53, cubeSubmit60, cubeSubmit61, cubeSubmit62}