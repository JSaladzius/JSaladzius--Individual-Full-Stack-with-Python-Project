

export const backgroundGroup1 = new THREE.Group()
export const backgroundGroup2 = new THREE.Group()
export const backgroundGroup3 = new THREE.Group()
export const backgroundGroup4 = new THREE.Group()

backgroundGroup1.position.set(0,-18, 4) 
backgroundGroup2.position.set(0,-26, 4) 
backgroundGroup3.position.set(0,-26, 4) 
backgroundGroup4.position.set(0,-26, 4)


const rectangles = backgroundGroup1.children
const rectangles2 = backgroundGroup2.children
const rectangles3 = backgroundGroup3.children
const rectangles4 = backgroundGroup4.children

export const allRectangles = [rectangles,rectangles2,rectangles3,rectangles4]
allRectangles.forEach(rects => {
      rects.forEach(element => {
      let randomRotation = Math.random() * 100
          console.log(element);
          element.rotation.z = randomRotation
          element.rotation.x = randomRotation
          element.rotation.y = randomRotation
  }) 
})