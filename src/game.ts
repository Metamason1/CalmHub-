/////// visualmesh/videoscreens
import { Createvisualmesh } from "./visualmeshcode/visualmesh" 
import { Createcollidersandconveyors} from "./visualmeshcode/collidersandconveyors"
import { Createvideoscreens } from "./screencode/videoscreens"

/////// animalcode
import { Createanimals } from "./animalcode/animals"
import { Createflytraps  } from "./animalcode/flytraps"

/////// enviroment
import { scene } from "./scene"
import { distance } from "./modules/utilities/utilities"

import { Createlava } from "./enviroment/lava"
import { Createwater } from "./enviroment/water" 
import { Createleavescloudsfloatingplatforms } from "./enviroment/leavescloudsfloatingplatforms"
import { Createlava2 } from "./enviroment/lava2"
import { Createlava3 } from "./enviroment/lava3"

import {Createhalos} from "./enviroment/halos"
import { Createfairylights } from "./enviroment/fairylights"


/////////
import { Createclickthroughs } from "./guides/clickthroughs"


/////visualmesh/colliders/videoscreens
Createvisualmesh();
Createvideoscreens();
Createcollidersandconveyors();

//////animalcode
Createanimals();
Createflytraps();

//////enviroment
Createwater();  
Createlava();
Createlava2();
Createlava3();


Createfairylights();
Createleavescloudsfloatingplatforms();

//////////////////////////////////////

Createclickthroughs();

/////scene define 
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)


/////////////////////////////////////////////

import { movePlayerTo } from '@decentraland/RestrictedActions'
import { Dash_TriggerZone } from 'dcldash'
import * as utils from '@dcl/ecs-scene-utils'

///////////INSTANT TELEPORTS////////////////////////////////////////////////////////////////////////

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(11.7,2.5,8),
    scale: new Vector3(5,5,5),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => {movePlayerTo({ x: 14, y: 57, z: 41 })
    log('User has entered the zone')
}
myTriggerZone.onExit = () => {
    log('User has left the zone')
}

//Left door to Gallery
const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(25.9,52.7,30.4),
    scale: new Vector3(1.7,3,1),
}))

// Turn the trigger events on
myTriggerZone.enable()

// Turn the trigger events off
// testTriggerZone.disable()

myTriggerZone.onEnter = ( ) => movePlayerTo({ x: 23.3, y: 54, z: 20 })
    log('User has entered the zone')
}

myTriggerZone.onExit = () => {
    log('User has left the zone')
}

//Right Door to Calm Gallery
const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(21.2,52.7,30.4),
    scale: new Vector3(1.7,3,1),
}))

// Turn the trigger events on
myTriggerZone.enable()

// Turn the trigger events off
// testTriggerZone.disable()

myTriggerZone.onEnter = ( ) => movePlayerTo({ x: 20, y: 59, z: 20 })
    log('User has entered the zone')
}

myTriggerZone.onExit = () => {
    log('User has left the zone')
}

//Left Door from gallery to ledge
const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(28.5,52,7.5),
    scale: new Vector3(1.7,3.5,1),
}))

// Turn the trigger events on
myTriggerZone.enable()

// Turn the trigger events off
// testTriggerZone.disable()

myTriggerZone.onEnter = ( ) => movePlayerTo({ x: 14, y: 54, z: 41 })
    log('User has entered the zone')
}

myTriggerZone.onExit = () => {
    log('User has left the zone')
}

//Right Door from gallery to Calm Hub
const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(19.1,51.8,7.5),
    scale: new Vector3(1.7,3.5,1),
}))
// Turn the trigger events on
myTriggerZone.enable()

// Turn the trigger events off
// testTriggerZone.disable()

myTriggerZone.onEnter = ( ) => movePlayerTo({ x: 20, y: 59, z: 20 })
    log('User has entered the zone')
}

myTriggerZone.onExit = () => {
    log('User has left the zone')
}

//Left Door from Calm Hub to Gallery
const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(19.2,57.5,29.7),
    scale: new Vector3(1.7,3.5,1),
}))

\
// Turn the trigger events on
myTriggerZone.enable()

// Turn the trigger events off
// testTriggerZone.disable()

myTriggerZone.onEnter = ( ) => movePlayerTo({x: 23.3, y: 54, z: 20 })
    log('User has entered the zone')
}

myTriggerZone.onExit = () => {
    log('User has left the zone')
}

//Right Door from Calm Hub to top Island
const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(28.4,57.5,29.7),
    scale: new Vector3(1.7,3.5,1),
}))

// Turn the trigger events on
myTriggerZone.enable()

// Turn the trigger events off
// testTriggerZone.disable()

myTriggerZone.onEnter = ( ) => movePlayerTo({x: 20, y: 63, z: 20  })
    log('User has entered the zone')
}

myTriggerZone.onExit = () => {
    log('User has left the zone')
}


//Right Door from gallery to Calm Hub
const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(35.9,0,42.6),
    scale: new Vector3(3,3.5,1.7),
}))
// Turn the trigger events on
myTriggerZone.enable()

// Turn the trigger events off
// testTriggerZone.disable()

myTriggerZone.onEnter = ( ) => movePlayerTo({ x: 20, y: 59, z: 20 })
    log('User has entered the zone')
}

myTriggerZone.onExit = () => {
    log('User has left the zone')
}


/////tracking eyes



export let myNPC = new NPC({ position: new Vector3(0 , 0 , 0) }, 'models/animals/octopus/octohead2.glb', () => {
  log('NPC activated!') 
}

  {
    faceUser: false,
    coolDownDuration: 1,
    hoverText: 'CHAT',
    onlyClickTrigger: false,
    onlyExternalTrigger: false,
    reactDistance: 1,
    continueOnWalkAway: false,
    onWalkAway: () => {
      log('walked away')
    }
  }



export let myNPC = new NPC({ position: new Vector3(11.85 , 2.8 , 21.7) }, 'models/animals/octopus/eyer.glb', () => {
  log('NPC activated!')
}
{
  faceUser: true,
  coolDownDuration: 1,
  hoverText: 'CHAT',
  onlyClickTrigger: false,
  onlyExternalTrigger: false,
  reactDistance: 12,
  continueOnWalkAway: false,
  onWalkAway: () => {
    log('walked away')
  }
}

export let myNPC = new NPC({ position: new Vector3(11.8 , 3.2 , 20.3) }, 'models/animals/octopus/eyel.glb', () => {
  log('NPC activated!')
}
{
  faceUser: true,  coolDownDuration: 1,
  hoverText: 'CHAT',
  onlyClickTrigger: false,
  onlyExternalTrigger: false,
  reactDistance: 12,
  continueOnWalkAway: false,
  onWalkAway: () => {
    log('walked away')
  }
}

///////////////////////////////////////////////////////CRYSTAL//////////////////////////////////////////////////////////


import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import resources from './resources'
import { Crystal1Dialog, Crystal2Dialog, Crystal3Dialog, Crystal4Dialog, Crystal5Dialog } from './modules/dialogData'


// Alice
export const alice = new NPC(
  {
    position: new Vector3(31.5 , 46.9 , 23.2),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.alice,
  () => {
   
    // dialog UI
    alice.talk(Crystal1Dialog)
  },
  {
    faceUser: false,
    reactDistance: 1.6,
    hoverText: '???',
    coolDownDuration: 0.1,
    portrait: {
      path: 'images/portraits/alice.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
      
    }
    ,
    onWalkAway: () => {
      alice.playAnimation('Goodbye', true, 1)
    }
  }
)

// // Bob
export const bob = new NPC(
  {
    position: new Vector3(27 , 46.8 , 28.5),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.bob,
  () => {
    

    // dialog UI
    bob.talk(Crystal2Dialog)
  },
  {
    faceUser: false,
    reactDistance: 1,
    hoverText: '???',
    coolDownDuration: 0.1,
    portrait: {
      path: 'images/portraits/bob.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
            charlie.playAnimation('Goodbye', true, 1)
          }
  }
)

// // Charlie
export const charlie = new NPC(
  {
    position: new Vector3(23, 46.8, 30),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.charlie,
  () => {
    

    // dialog UI
    charlie.talk(Crystal3Dialog)
  },
  {
    faceUser: false,
    reactDistance: 1,
    hoverText: '???',
    coolDownDuration: 0.1,
    portrait: {
      path: 'images/portraits/charlie.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      charlie.playAnimation('Goodbye', true, 2)
    }
  }
)

// Crystal4
export const crystal4 = new NPC(
  {
    position: new Vector3(24.3 , 46.8 , 20.3),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.crystal4,
  () => {
    
    // sound
    alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
    alice.getComponent(AudioSource).playOnce()

    // dialog UI
    crystal4.talk(Crystal4Dialog)
  },
  {
    faceUser: false,
    reactDistance: 1,
    hoverText: '???',
    coolDownDuration: 0.1,
    portrait: {
      path: 'images/portraits/charlie.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  }
)

// Crystal5
export const crystal5 = new NPC(
  {
    position: new Vector3(28 , 46.8 , 22.25),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.crystal5,
  () => {
    
    // sound
    alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
    alice.getComponent(AudioSource).playOnce()

    // dialog UI
    crystal5.talk(Crystal5Dialog)
  },
  {
    faceUser: false,
    reactDistance: 1,
    hoverText: '???',
    coolDownDuration: 0.1,
    portrait: {
      path: 'images/portraits/charlie.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  }
)




////////////////////////////////////////////////////////Sound For Crystal Cavern/////////////////////////////////////////////

const crystal1sound = new Entity()
crystal1sound.addComponent(new AudioSource(new AudioClip('sounds/a.mp3')))
crystal1sound.addComponent(new Transform())
engine.addEntity(crystal1sound)
crystal1sound.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(31.5 , 46.3, 23),
    scale: new Vector3(3, 1.5, 3),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => crystal1sound.getComponent(AudioSource).playOnce()

myTriggerZone.onExit = () => crystal1sound.getComponent(AudioSource).playing = false

/////

const crystal2sound = new Entity()
crystal2sound.addComponent(new AudioSource(new AudioClip('sounds/b.mp3')))
crystal2sound.addComponent(new Transform())
engine.addEntity(crystal2sound)
crystal2sound.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(27 , 46.3 , 28.5),
    scale: new Vector3(3, 1.5, 3),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => crystal2sound.getComponent(AudioSource).playOnce()

/////

const crystal3sound = new Entity()
crystal3sound.addComponent(new AudioSource(new AudioClip('sounds/c.mp3')))
crystal3sound.addComponent(new Transform())
engine.addEntity(crystal3sound)
crystal3sound.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(23 , 46.3 , 30),
    scale: new Vector3(3, 1.5, 3),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => crystal3sound.getComponent(AudioSource).playOnce()

/////

const crystal4sound = new Entity()
crystal4sound.addComponent(new AudioSource(new AudioClip('sounds/d.mp3')))
crystal4sound.addComponent(new Transform())
engine.addEntity(crystal4sound)
crystal4sound.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(24 , 46.3, 20.5),
    scale: new Vector3(3, 1.5, 3),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => crystal4sound.getComponent(AudioSource).playOnce()

//////

const crystal5sound = new Entity()
crystal5sound.addComponent(new AudioSource(new AudioClip('sounds/e.mp3')))
crystal5sound.addComponent(new Transform())
engine.addEntity(crystal5sound)
crystal5sound.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(28.6 , 46.3 , 22.25),
    scale: new Vector3(3, 1.5, 3),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => crystal5sound.getComponent(AudioSource).playOnce() 

//////////////////////////////////Griffin//////////////

const snooring = new Entity()
snooring.addComponent(new AudioSource(new AudioClip('sounds/snoore.mp3')))
snooring.addComponent(new Transform())
engine.addEntity(snooring)
snooring.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(35 , 53, 28.5),
    scale: new Vector3(6, 1.5, 5.5),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => snooring.getComponent(AudioSource).playOnce()


//////////////////////////////// Sleeeping calm cave

const snooring2 = new Entity()
snooring2.addComponent(new AudioSource(new AudioClip('sounds/snoore.mp3')))
snooring2.addComponent(new Transform())
engine.addEntity(snooring2)
snooring.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(24 , 7, 42),
    scale: new Vector3(3, 1.5, 3),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => snooring2.getComponent(AudioSource).playOnce()


////////////////////////////////  sleeping yellow dragon

const snooring3 = new Entity()
snooring3.addComponent(new AudioSource(new AudioClip('sounds/snoore.mp3')))
snooring3.addComponent(new Transform())
engine.addEntity(snooring3)
snooring.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(35 , 62, 32.5),
    scale: new Vector3(18, 3.5, 18),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => snooring3.getComponent(AudioSource).playOnce()


///////////////////////////////////// Snooring Dragon ////////////////////////

const snooring4 = new Entity()
snooring4.addComponent(new AudioSource(new AudioClip('sounds/snoore.mp3')))
snooring4.addComponent(new Transform())
engine.addEntity(snooring4)
snooring4.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(19 , 46.8 , 22.5),
    scale: new Vector3(6, 1.5, 8),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => snooring4.getComponent(AudioSource).playOnce()

////////////////////////////////////////// TRIGGERED ////////////////////// 


const triggergrowl = new Entity()
triggergrowl.addComponent(new AudioSource(new AudioClip('sounds/snoore.mp3')))
triggergrowl.addComponent(new Transform())
engine.addEntity(triggergrowl)
triggergrowl.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(10 , 22 , 32),
    scale: new Vector3(6, 1.5, 8),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => triggergrowl.getComponent(AudioSource).playOnce()


///////////////////////////////// GREY DINOSAUR /////////////////////


const greydino = new Entity()
greydino.addComponent(new AudioSource(new AudioClip('sounds/snoore.mp3')))
greydino.addComponent(new Transform())
engine.addEntity(greydino)
greydino.setParent(Attachable.AVATAR)

const myTriggerZone = new Dash_TriggerZone()
myTriggerZone.addComponent(new Transform({
    position: new Vector3(6 , 40 , 27),
    scale: new Vector3(9, 3, 6),
}))
myTriggerZone.enable()
myTriggerZone.onEnter = ( ) => greydino.getComponent(AudioSource).playOnce()


///////////////////////////////// NPC //////////////////////////////

 
export let myNPC = new NPC({ position: new Vector3(17, 0.5, 40) }, 'models/NPCFemale.glb', () => {
  log('NPC activated!'), myNPC.talk(NPCFemale, 0) 
},

{
  idleAnim: `0WaveLOOP.002`,
  faceUser: true,
  portrait: { path: 'images/npc.png', height: 128, width: 128 },
  coolDownDuration: 3,
  hoverText: 'Can I help you?',
  onlyClickTrigger: true,
  onlyExternalTrigger: false,
  reactDistance: 12,
  continueOnWalkAway: true,
  onWalkAway: () => {
    log('walked away')
  }
}

export let NPCFemale: Dialog[] = [
  {
    text: `Hello I'm a calm helper`
  },
  {
    text: `Make sure to explore the entire map`
  },
  {
    text: `There's a lot to discover!!`,
    triggeredByNext: () => {
      myNPC.followPath()
    },
    isEndOfDialog: true
  }

  ////////////////// Upstairs NPC2 /////////////////////////////////////////////

  export let myNPC = new NPC({ position: new Vector3(29, 56, 11) }, 'models/NPCFemale.glb', () => {
    log('NPC activated!'), myNPC.talk(NPCFemale, 0) 
  },
  
  {
    idleAnim: `Wave.Action`,
    faceUser: true,
    coolDownDuration: 3,
    portrait: { path: 'images/npc.png', height: 128, width: 128 },
    hoverText: 'Can I help you?',
    onlyClickTrigger: true,
    onlyExternalTrigger: false,
    reactDistance: 4,
    continueOnWalkAway: true,
    onWalkAway: () => {
      log('walked away')
    }
  }

  export const NPCFemale: Dialog[] = [
    {
      text: "Hi, welcome to the Calm Hub!"
      triggeredByNext: () => {myNPC.changeIdleAnim(`0WaveLOOP.002`, true)
        
      }
    },
    {
      text: 'Would you like to learn more about this place?',
      isQuestion: true,
      buttons: [
        { label: 'Yes', goToDialog: 3 },
        { label: 'No', goToDialog: 2 }
      ]
    },
    {
      text: "Okay, I'll be around if you get curious!",
      isEndOfDialog: true,
      triggeredByNext: () => {myNPC.changeIdleAnim(`0WaveLOOP.002`, true)
        
    
      }
    },
    {
      text: 'We’re currently in the center of the Genesis City map, the roads fan out in all directions from here.'
      triggeredByNext: () => {myNPC.changeIdleAnim(`0ThinkLoop`, true)
      
    },
    {
      text: 'Genesis Plaza is built and maintained by the Decentraland Foundation but is still in many ways a community project.'
    },
    {
      text: 'If you venture out into the world, you’ll see that the content is created by our growing community.'
    },
    {
      text: 'Do you want to explore the rest of Genesis Plaza or explore the rest of the world?',
      isQuestion: true,
            triggeredByNext: () => {myNPC.changeIdleAnim(`0WaveLOOP.002`, true)

      buttons: [
        { label: 'PLAZA', goToDialog: 7 },
        { label: 'WORLD', goToDialog: 18 }
      ]
    },
    {
      text: 'Great! There’s a lot to see right here.'
    },
    {
      text: 'If you walk around you might run into my buddies and each is an expert on a different topic.'
    },
    {
      text: 'You can learn a lot from them about how Decentraland works and what makes it special.'
    },
    {
      text: 'I recommend you start at that boat-shaped building to the North!'
    },
    {
      text: "Do you also want to learn about what's beyond Genesis Plaza?",
      isQuestion: true,
      buttons: [
        { label: 'YES', goToDialog: 12 },
        { label: 'NO', goToDialog: 28 }
      ]
    },
    {
      text: 'There’s a big world to explore out there!',
      offsetY: 18
    },
    {
      text: "Around Genesis Plaza you'll find several teleports that can take you directly to special scenes marked as points of interest."
    },
    {
      text: "There's also the 'crowd' teleport, which takes you to the biggest gathering of people in Decentraland so you can meet up and hang out."
    },
    {
      text: "If you press the 'M' key, you’ll open the map. You'll see markers for points of interest that are worth visiting."
    },
    {
      text: "Or simply explore the virtual world by foot and plot your own adventure. Just keep in mind that there's a LOT of ground to cover."
    },
    {
      text: 'So what are you waiting for? Go and explore the world!',
      isEndOfDialog: true,
      triggeredByNext: () => {}

    }


  