export function Createcollidersandconveyors(): void {



///////////////////////////////////////////////////////////////////////// COLLIDERS /////////////////////////////////////////////////////////////////////////////////

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/collider.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/conveyor.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/conveyor2.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})



}