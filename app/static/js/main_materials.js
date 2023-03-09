import {gradientTexture, colorTexture, colorTextureCenter, 
        colorTexture1, colorTexture2 , colorTexture3, 
        colorTexture4 ,backTexture, textureV1 , textureV2, 
        textureV3, textureV4, textureV5, textureV6, textureV7, textureV8,
        textureV9, textureV10, blackScratchTexture,
        contactsTexture} from './main_textures.js'
  
  
/**Materials*/
const materialV1 = new THREE.MeshToonMaterial({
    color: "#cccfcd",
    // gradientMap: gradientTexture,
    map:textureV1
})

const materialV2 = new THREE.MeshToonMaterial({
    color: "#cccfcd",
    // gradientMap: gradientTexture,
    map:textureV2
})
const materialV3 = new THREE.MeshToonMaterial({
    color: "#cccfcd",
    // gradientMap: gradientTexture,
    map:textureV3
})

const materialV4 = new THREE.MeshToonMaterial({
    color: "white",
    // gradientMap: gradientTexture,
    map:textureV4
})
const materialV5 = new THREE.MeshToonMaterial({
    color: "white",
    // gradientMap: gradientTexture,
    map:textureV5
})
const materialV6 = new THREE.MeshToonMaterial({
    color: "white",
    // gradientMap: gradientTexture,
    map:textureV6
})
const materialV7 = new THREE.MeshToonMaterial({
    color: "white",
    // gradientMap: gradientTexture,
    map:textureV7
})
const materialV8 = new THREE.MeshToonMaterial({
    color: "white",
    // gradientMap: gradientTexture,
    map:textureV8
})
const materialV9 = new THREE.MeshToonMaterial({
    color: "white",
    // gradientMap: gradientTexture,
    map:textureV9
})
const materialV10 = new THREE.MeshToonMaterial({
    color: "white",
    // gradientMap: gradientTexture,
    map:textureV10
})
const material0 = new THREE.MeshStandardMaterial({
    color: "#333232",
    map: colorTextureCenter
})

const material1 = new THREE.MeshStandardMaterial({
    // color:parameters.materialColor,
    color: "#ebebeb",
    map: colorTexture1,
    // side: THREE.DoubleSide
  });
  
  const material2 = new THREE.MeshStandardMaterial({
    // color:parameters.materialColor,
    color: "#d1d1d1",
    map: colorTexture2,
  });
  
  const material3 = new THREE.MeshStandardMaterial({
    // color:parameters.materialColor,
    color: "#dcdcdc",
    map: colorTexture3,
  });

  const material4 = new THREE.MeshStandardMaterial({
    // color:parameters.materialColor,
    color: "#dcdcdc",
    map: colorTexture4,
  });
  
  const materialSubmit = new THREE.MeshStandardMaterial({
    color: "#ff2e2e",
    map: colorTexture,
  });

  const materialSubmit20 = new THREE.MeshStandardMaterial({
    color: "#ff2e2e",
    map: colorTexture2,
  });
  const materialSubmit30 = new THREE.MeshStandardMaterial({
    color: "#ff2e2e",
    map: colorTexture1,
  });
  const materialSubmit40 = new THREE.MeshStandardMaterial({
    color: "#ff2e2e",
    map: backTexture,
  });
  
  const materialSubmit50 = new THREE.MeshStandardMaterial({
    color: "#ff2e2e",
    map: colorTexture3,
  });
  
  const materialSubmit60 = new THREE.MeshStandardMaterial({
    color: "#ff2e2e",
    map: colorTexture4,
  });

  const materialRegister = new THREE.MeshStandardMaterial({
    color: "#ebebeb",
    map: colorTexture,
  });
  
  const navCubeMaterial = new THREE.MeshStandardMaterial({
    color: "#ebebeb",
    map: colorTexture,
  }); 
  const seeYouCubes = new THREE.MeshStandardMaterial({
    color: "#000000",
    map: blackScratchTexture,
  }); 

  const backMaterial = new THREE.MeshPhongMaterial({
    color: "#4e4f4f",
    // map: backTexture,
  });  
  
  const planeBottomMaterial = new THREE.MeshPhongMaterial({
    color: "#f0023a",
    map: colorTexture,
  });  
  
  const planeBottomContactsMaterial = new THREE.MeshPhongMaterial({
    color: "#f0023a",
    map: contactsTexture,
  });  

  export{material0 , material1 , material2 ,
         material3 , material4 , materialSubmit ,
         materialRegister , backMaterial, materialV1 ,
         materialV2, materialV3,materialV4,materialV5, materialV6,materialV7,
         materialV8, materialV9, materialV10,
         materialSubmit20, materialSubmit30, materialSubmit40,
         materialSubmit50, materialSubmit60, navCubeMaterial,
         seeYouCubes,planeBottomMaterial, planeBottomContactsMaterial
         }
