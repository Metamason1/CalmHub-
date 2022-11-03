import { movePlayerTo } from '@decentraland/RestrictedActions'

export function Createclickthroughs(): void
{
    let portalEntranceShape = new GLTFShape('models/portal_entrance.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent(
  new Transform({
    position: new Vector3
      (0, 0, 0),
  })
)
portalEntrance.addComponent(portalEntranceShape)
portalEntrance.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 14, y: 57, z: 41 })
    },
    { hoverText: 'LEDGE' }
  )
)
engine.addEntity(portalEntrance)


let portalEntranceShape = new GLTFShape('models/teleporters/leftdoor.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent(
  new Transform({
    position: new Vector3
      (0, 0, 0),
  })
)
portalEntrance.addComponent(portalEntranceShape)
portalEntrance.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 23.3, y: 54, z: 20 })
    },
    { hoverText: 'Gallery' }
  )
)
engine.addEntity(portalEntrance)

let portalEntranceShape = new GLTFShape('models/teleporters/rightdoor.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent
new Transform({
  position: new Vector3
    (0, 0, 0),
})
)
portalEntrance.addComponent(portalEntranceShape)
portalEntrance.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 20, y: 59, z: 20 })
    },
    { hoverText: 'Calm Hub' }
  )
)
engine.addEntity(portalEntrance)

let portalEntranceShape = new GLTFShape('models/teleporters/calmhubrightdoor.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent
new Transform({
  position: new Vector3
    (0, 0, 0),
})
)
portalEntrance.addComponent(portalEntranceShape)
portalEntrance.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 20, y: 63, z: 20 })
    },
    { hoverText: 'Top Island' }
  )
)
engine.addEntity(portalEntrance)

let portalEntranceShape = new GLTFShape('models/teleporters/calmhubleftdoor.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent
new Transform({
  position: new Vector3
    (0, 0, 0),
})
)
portalEntrance.addComponent(portalEntranceShape)
portalEntrance.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 23.3, y: 54, z: 20 })
    },
    { hoverText: 'Gallery' }
  )
)
engine.addEntity(portalEntrance)

let portalEntranceShape = new GLTFShape('models/teleporters/leftdoorgallery.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent(
  new Transform({
    position: new Vector3
      (0, 0, 0),
  })
)
portalEntrance.addComponent(portalEntranceShape)
portalEntrance.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 14, y: 54, z: 41 })
    },
    { hoverText: 'LEDGE' }
  )
)
engine.addEntity(portalEntrance)

let portalEntranceShape = new GLTFShape('models/teleporters/rightdoorgallery.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent(
  new Transform({
    position: new Vector3
      (0, 0, 0),
  })
  )
  portalEntrance.addComponent(portalEntranceShape)
  portalEntrance.addComponent(
    new OnPointerDown(
      (e) => {
        movePlayerTo({ x: 20, y: 59, z: 20 })
      },
      { hoverText: 'Calm Hub' }
    )
  )
engine.addEntity(portalEntrance)

let portalEntranceShape = new GLTFShape('models/teleporters/calmcavedoorteleporter.glb')

let portalEntrance = new Entity()
portalEntrance.addComponent
new Transform({
  position: new Vector3
    (0, 0, 0),
})
)
portalEntrance.addComponent(portalEntranceShape)
portalEntrance.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 20, y: 59, z: 20 })
    },
    { hoverText: 'Calm Hub' }
  )
)
engine.addEntity(portalEntrance)

}
      