export default {
  sounds: {
    alice: new AudioClip('sounds/alice.mp3'),
    bob: new AudioClip('sounds/bob.mp3'),
    charlie: new AudioClip('sounds/charlie.mp3')
  },
  models: {
    standard: {
      baseScene: new GLTFShape('models/standard/baseScene.glb')
    },
    robots: {
      alice: 'models/robots/alice.glb',
      bob: 'models/robots/bob.glb',
      charlie: 'models/robots/charlie.glb',
      crystal4: 'models/robots/crystal4.glb',
      crystal5: 'models/robots/crystal5.glb'
    }
  },
  textures: {
    blank: new Texture('images/ui/blank.png'),
    buttonE: new Texture('images/ui/buttonE.png'),
    buttonF: new Texture('images/ui/buttonF.png'),
    leftClickIcon: new Texture('images/ui/leftClickIcon.png'),
    textPanel: new Texture('images/ui/textPanel.png')
  }
}
