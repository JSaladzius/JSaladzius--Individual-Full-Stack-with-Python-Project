
/** Textures */ 
export const textureLoader = new THREE.TextureLoader()

const gradientTexture = textureLoader.load("static/textures/gradients/5.jpg")
const blackScratchTexture = textureLoader.load("static/textures/grungeGradien.jpg")
const colorTexture = textureLoader.load('static/textures/cracked_cubes.png')
const contactsTexture = textureLoader.load('static/textures/contacts.png')
const colorTextureCenter = textureLoader.load('static/textures/whats_going_on.png')
const colorTexture1 = textureLoader.load('static/textures/crackedTEXT.png')
const colorTexture2 = textureLoader.load('static/textures/crackedTEXT_ALL_THAT.png')
const colorTexture3 = textureLoader.load('static/textures/crackedTEXT_SOMEDAY.png')
const colorTexture4 = textureLoader.load('static/textures/crackedTEXT_ILL SEE YOU.png')
const backTexture = textureLoader.load('static/textures/crackedTEXT_ILL SEE YOU.png')

const video = document.getElementById( 'v1' );
const video2 = document.getElementById( 'v2' );
const video3 = document.getElementById( 'v3' );
const video4 = document.getElementById( 'v4' );
const video5 = document.getElementById( 'v5' );
const video6 = document.getElementById( 'v6' );
const video7 = document.getElementById( 'v7' );

const video8 = document.getElementById( 'v8' );
const video9 = document.getElementById( 'v9' );
const video10 = document.getElementById( 'v10' );

const textureV1 = new THREE.VideoTexture( video );
const textureV2 = new THREE.VideoTexture( video2 );
const textureV3 = new THREE.VideoTexture( video3 );
const textureV4 = new THREE.VideoTexture( video4 );
const textureV5 = new THREE.VideoTexture( video5 );
const textureV6 = new THREE.VideoTexture( video6 );
const textureV7 = new THREE.VideoTexture( video7 );

const textureV8 = new THREE.VideoTexture( video8 );
const textureV9 = new THREE.VideoTexture( video9 );
const textureV10 = new THREE.VideoTexture( video10 );


gradientTexture.magFilter = THREE.NearestFilter

export {gradientTexture, colorTexture, colorTextureCenter, 
        colorTexture1, colorTexture2 , colorTexture3, 
        colorTexture4 , textureV1, textureV2, textureV3,
        textureV4, textureV5, textureV6, textureV7, textureV8,
        textureV9, textureV10, backTexture, 
        blackScratchTexture, contactsTexture}

export {video, video2, video3, video4, video5, video6, video7, video8, video9, video10}




