
import { materialV5 , materialV4 , materialV3 ,materialV1,materialV2, materialV6, materialV7, 
         materialV8, materialV9, materialV10} from './main_materials.js'
import { video, video2, video3, video4, video5, video6, video7, video8, video9, video10 } from './main_textures.js'

// const video = document.getElementById('v1')
// const video2 = document.getElementById('v2')
// const video3 = document.getElementById('v3')
// const video4 = document.getElementById('v4')
// const video5 = document.getElementById('v5')
// const video6 = document.getElementById('v6')

const videoMaterialsUp = [materialV4, materialV5, materialV6 ]   //materialV7
const videosUp = [video4, video5, video6] //video7

const videoMaterialsRight = [materialV1, materialV2, materialV3]
const videosRight = [video, video2, video3]

const videoMaterialsLeft = [materialV8, materialV9, materialV10]
const videosLeft = [video8, video9, video10]

const c = 0
let c1 = c
export function nextVideo(m , object , videoMaterials , videos){
    if(m===1){
        
        if(c1===2){
            c1=-1
        }
        c1++
        object.material = videoMaterials[c1]
        videos[c1].play()
        videos[c1].loop = true
    }

    if(m===2){
        let c2 = c1
        if(c2===0){
            c2+=3
            c1+=3
        }
        c2--
        c1--
        object.material = videoMaterials[c2]
        videos[c2].play()
        videos[c2].loop = true

    }
}

export{ videoMaterialsUp , videosUp , videoMaterialsLeft, videosLeft, videoMaterialsRight, videosRight}
