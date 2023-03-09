import {particles} from './particles.js'


/**sizes*/
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  const camera = new THREE.PerspectiveCamera(
    30,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 4;
  camera.position.y = 0;
  scene.add(camera);

  /** CONTROLERS*/

  /** Mouse events */
  const mouse = new THREE.Vector2();
  window.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = (event.clientY / sizes.height) * -2 + 1;
  });

  window.addEventListener("mouseout", (event) => {
    mouse.x = 0;
    mouse.y = 0;
  });


  window.addEventListener("click", (event) => {
    if (currentIntersect) {
      if (currentIntersect.object === cube) {
        console.log("Click On cube");
      }
      if (currentIntersect.object === cube2) {
        console.log("Click On cube2");
      }
      if (currentIntersect.object === cubeSubmit) {
        console.log("Click On cubeSubmit");
      }
      if (currentIntersect.object === cubeRegister) {
        window.location.href = "k.html"
        console.log("Click On cubeRegister");
      }
    }
  });


  /*** RAYCASTER*/
  const raycaster = new THREE.Raycaster();

  /**Texture*/
  const textureLoader = new THREE.TextureLoader();
  const colorTexture = textureLoader.load("./static/textures/cracked.jpg");
  colorTexture.magFilter = THREE.NearestFilter;

  /**Materials*/
  const material = new THREE.MeshPhongMaterial({
    color: "#ebebeb",
    map: colorTexture,
  });

  const material2 = new THREE.MeshStandardMaterial({
    color: "#d1d1d1",
    map: colorTexture,
  });

  const material3 = new THREE.MeshStandardMaterial({
    color: "#0d0d0d",
  });

  const materialSubmit = new THREE.MeshStandardMaterial({
    color: "#d1d1d1",
    map: colorTexture,
  });
  const materialRegister = new THREE.MeshStandardMaterial({
    color: "#d1d1d1",
    map: colorTexture,
  });

  /*** Geometry*/
  const objectDistance = 2;

  //Log in section geometry
  const width = window.innerWidth;
  const heigth = window.innerHeight;

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(width, heigth),
    material3
    
  );

  plane.position.set(0, -0, 1.5);
  scene.add(particles);

  /**LIGHTS */
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.0);
  const pointLight = new THREE.PointLight(0xffffff, 80 ,0.8); //630000
  pointLight.position.x = 0;
  pointLight.position.y = 0;
  pointLight.position.z = 2;

  scene.add(ambientLight, pointLight);

    // Update sizes
    window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // rendering the scene
  const container = document.querySelector("#threejs-container");
  container.append(renderer.domElement);

  /*** Animate*/
  const clock = new THREE.Clock();
  let currentIntersect = null;

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    //cAST A RAY
    raycaster.setFromCamera(mouse, camera);
    const objects = [/**cube*, cube2, cubeSubmit, cubeRegister*/];
    const intersects = raycaster.intersectObjects(objects); 
    for (const object of objects) {
      object.material.color.set("#d1d1d1");
    }
    for (const intersect of intersects) {
      intersect.object.material.color.set("#872020");
      // i.object.position.z = -0.04
    }

    //Mouse Witness
    if (intersects.length) {
      if (currentIntersect === null) {
        console.log("mouse enter");
      }
      currentIntersect = intersects[0];
    } else {
      if (currentIntersect) {
        console.log("mouse leave");
      }
      currentIntersect = null;
    }

    //Update camera
    camera.position.x = -mouse.x * 1.3;
    camera.position.y = -mouse.y * 1.3;
    camera.lookAt(plane.position);

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
  tick();