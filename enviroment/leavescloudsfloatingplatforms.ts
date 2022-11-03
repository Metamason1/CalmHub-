
export function Createleavescloudsfloatingplatforms(): void {


//ANIMATED PASSIVE

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/animated/leaf.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/animated/leaf2.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/cloudparent.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})



// FLOATING PLATFORMS 

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/floatingplatforms/platformc.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/floatingplatforms/platform.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})


const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/floatingplatforms/platform2.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/floatingplatforms/platform2c.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

}