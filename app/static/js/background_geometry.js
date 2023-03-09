import { materialV5,seeYouCubes } from "./main_materials.js";

const backMaterial = new THREE.MeshToonMaterial({
    color: "grey",
})

export function createGeometryTopRight(){
    let randomSize = Math.random()
        let randomPosition = Math.random() * 15 
        const backgroundCube2 = new THREE.Mesh(
          new THREE.BoxGeometry(randomSize * 2, randomSize * 2, randomSize * 2),
          seeYouCubes
          );
        backgroundCube2.position.x = randomPosition* Math.random()*5
        backgroundCube2.position.y = randomPosition* Math.random()*-8
        backgroundCube2.position.z = -randomPosition* Math.random()*5
        return backgroundCube2
      }

      export function createGeometryBottomRight(){
        let randomSize = Math.random()
        let randomPosition = Math.random() * 15
        const backgroundCube2 = new THREE.Mesh(
          new THREE.BoxGeometry(randomSize * 2, randomSize * 2, randomSize * 2),
          seeYouCubes
          );
        backgroundCube2.position.x = randomPosition* Math.random() *2
        backgroundCube2.position.y = -randomPosition* Math.random()*2
        backgroundCube2.position.z = -randomPosition* Math.random()+5
        return backgroundCube2
      }

export function createGeometryBottomLeft(){
        let randomSize = Math.random()
        let randomPosition = Math.random() * -15
        const backgroundCube2 = new THREE.Mesh(
          new THREE.BoxGeometry(randomSize * 2, randomSize * 2, randomSize * 2),
          seeYouCubes
          );
        backgroundCube2.position.x = randomPosition* Math.random()*2
        backgroundCube2.position.y = randomPosition* Math.random()*2
        backgroundCube2.position.z = randomPosition* Math.random() -5 
        return backgroundCube2
      }
      


export function createGeometryTopLeft(){
        let randomSize = Math.random()
        let randomPosition = Math.random() * 15
        const backgroundCube2 = new THREE.Mesh(
          new THREE.BoxGeometry(randomSize * 1, randomSize * 1, randomSize * 1),
          seeYouCubes
          );
        backgroundCube2.position.x = -randomPosition* Math.random() *4
        backgroundCube2.position.y = randomPosition* Math.random()*-2
        backgroundCube2.position.z = randomPosition* Math.random()-3
        return backgroundCube2
      }





      
    


      

