export function Createhalos(): void {

//////////HALOS\\\\\\\\\\\\\


const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/halo1.glb"))
const transform = new Transform({
  position: new Vector3(0 , -3 , 0),
  rotation: new Quaternion(0, 3, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/halo2.glb"))
const transform = new Transform({
  position: new Vector3(0 , -3 , 0),
  rotation: new Quaternion(0, 3, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/halo3.glb"))
const transform = new Transform({
  position: new Vector3(0 , -3 , 0),
  rotation: new Quaternion(0, 3, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/halo4.glb"))
const transform = new Transform({
  position: new Vector3(0 , -3 , 0),
  rotation: new Quaternion(0, 3, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/halo5.glb"))
const transform = new Transform({
  position: new Vector3(0 , -3 , 0),
  rotation: new Quaternion(0, 3, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})
  
} 