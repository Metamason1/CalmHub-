
export function Createvisualmesh(): void { 

/////////////////////////////////////////////////////////////// VISUAL MESH ///////////////////////////////////////////////////////////////
 
const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/trees.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})


const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/gallery.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})


const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/floatingvolcano.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/cavesfloors.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/objectsfloatingvolcano.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/leafpngs.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

  const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/green.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})

const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/plants.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
})


const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape("models/animated/calmlogo.glb"))
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8, 0.8, 0.8)
}) 
}