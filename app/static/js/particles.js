/** Particles */
// Geometry
const particlesCount = 70000
const positions = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 250
    positions[i * 3 + 1] = 3 * 0.5 - Math.random() * 3 * -5
    positions[i * 3 + 1] = 3 * 0.5 - Math.random() * 3 * 5
    positions[i * 3 + 2] = (Math.random() - 0.5) * 250
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 4))


// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: "red",
    // map: textureV,
    // sizeAttenuation: textureLoader,
    size: 0.05
})
// Points
export const particles = new THREE.Points(particlesGeometry, particlesMaterial)