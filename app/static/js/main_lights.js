
    const ambientLight = new THREE.AmbientLight(0xffffff, 0);
    const directionalLight = new THREE.DirectionalLight('#ffffff',1)
    directionalLight.position.set(-1, 1, 0)
    const directionalLight2 = new THREE.DirectionalLight('#ffffff',0.3)
    directionalLight2.position.set(1, 1, 0)
    const pointLight = new THREE.PointLight('#ffffff', 4, 1.9)
    pointLight.position.set(0, 0.15, 0)
    const pointLight2 = new THREE.PointLight('#ffffff', 4, 1.9)
    const pointLight3 = new THREE.PointLight('#ffffff', 4, 1.9)
    const pointLight4 = new THREE.PointLight('#ffffff', 4, 1.9)
    

    const sphereSize = 1;

    const pointLightBottomCubes = new THREE.PointLight('#ffffff',5, 15)
    const pointLightBottomCubesHelper = new THREE.PointLightHelper( pointLightBottomCubes, sphereSize );
    pointLightBottomCubes.position.set(-10, -26, 0) //-2,-26, 4
    
    const pointLightBottomCubes1 = new THREE.PointLight('#ffffff',5 , 15)
    const pointLightBottomCubesHelper1 = new THREE.PointLightHelper( pointLightBottomCubes1, sphereSize );
    pointLightBottomCubes1.position.set(0, -26, 2) //0,-26, 4
    
    const pointLightBottomCubes2 = new THREE.PointLight('#ffffff',5, 15)
    const pointLightBottomCubesHelper2 = new THREE.PointLightHelper( pointLightBottomCubes2, sphereSize );
    pointLightBottomCubes2.position.set(10, -26, 0) //2,-26, 4
    
    const pointLight5 = new THREE.PointLight('#ffffff', 2, 3)
    pointLight5.position.set(8, 2.6, 2)
    const pointLightHelper5 = new THREE.PointLightHelper( pointLight5, sphereSize );

    const pointLight6 = new THREE.PointLight('#ffffff', 2, 2)
    pointLight6.position.set(-9, 2.6, 9.4)
    const pointLightHelper6 = new THREE.PointLightHelper( pointLight6, sphereSize );
    
    const pointLight7 = new THREE.PointLight('#ffffff', 2, 3.2)
    pointLight7.position.set(-8, 2.6, 11)
    const pointLightHelper7 = new THREE.PointLightHelper( pointLight7, sphereSize );
    
    const pointLight8 = new THREE.PointLight('#ffffff', 1.5, 3)
    pointLight8.position.set(-8.8, 2.6, 10)
    const pointLightHelper8 = new THREE.PointLightHelper( pointLight8, sphereSize );
    
    const pointLight9 = new THREE.PointLight('#ffffff', 1.5, 3)
    pointLight9.position.set(-9.5, 2.6, 11)
    const pointLightHelper9 = new THREE.PointLightHelper( pointLight9, sphereSize );
    
    const pointLight10 = new THREE.PointLight('#ffffff', 1.5, 3)
    pointLight10.position.set(-9, 2.6, 9.2)
    const pointLightHelper10 = new THREE.PointLightHelper( pointLight10, sphereSize );
    
    const pointLight11 = new THREE.PointLight('#ffffff', 1.5, 3)
    pointLight11.position.set(-9, 2.6, 11)
    const pointLightHelper11 = new THREE.PointLightHelper( pointLight11, sphereSize );
    
    
    const pointLight12 = new THREE.PointLight('#ffffff', 1.5, 3)
    pointLight10.position.set(-9, 2.6, 9.2)
    const pointLightHelper12 = new THREE.PointLightHelper( pointLight12, sphereSize );
    
    const pointLight13 = new THREE.PointLight('#ffffff', 1.5, 3)
    pointLight11.position.set(-9, 2.6, 11)
    const pointLightHelper13 = new THREE.PointLightHelper( pointLight13, sphereSize );


    export {ambientLight, directionalLight, directionalLight2, 
            pointLight , pointLight2, pointLight3, pointLight4, 
            pointLight5, pointLightHelper5, pointLight6, pointLightHelper6 ,
            pointLight7, pointLightHelper7, pointLight8, pointLightHelper8, 
            pointLight9,pointLightHelper9, pointLight10, pointLightHelper10,
            pointLight11,pointLightHelper11,pointLight12,pointLightHelper12,
            pointLight13, pointLightHelper13, pointLightBottomCubes, pointLightBottomCubesHelper,
            pointLightBottomCubes1,pointLightBottomCubesHelper1,pointLightBottomCubes2,
            pointLightBottomCubesHelper2 }
