export function Createflytraps(): void {

///////////////////////////////////////////////////////////////////////////////// FLYTRAPS/////////////////////////////////////////////////////////////////////////


const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/flytraps/flytraptop2.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/flytraps/flytraptop1.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})


const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/flytraps/flytrapbody1.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})



const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/flytraps/flytrapbody2.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/flytraps/flytrapcollider.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

}
