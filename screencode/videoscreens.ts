export function Createvideoscreens(): void { 

    ////////////////////////////////////////////////////////////////////// VIDEO SCREENS////////////////////////////////////////////////////////////////////// 




//Bottom Screen 
const myVideoClip = new VideoClip(
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)

const myVideoTexture = new VideoTexture(myVideoClip)

const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0
  
  const baseScene = new Entity()
  engine.addEntity(baseScene)
  baseScene.addComponent(new PlaneShape())
  baseScene.addComponent(
    new Transform({
      position: new Vector3(25, 2.6, 39.8), scale: new Vector3(6.3, 4, 1)
    })
  
  baseScene.addComponent(myMaterial)
  baseScene.addComponent( new OnPointerDown(() => {
        myVideoTexture.playing = !myVideoTexture.playing
      })
    )
  engine.addEntity(baseScene)
  
  myVideoTexture.play()
  myVideoTexture.loop = true
  
  // Top Screen
  
  //Video 2
  const myVideoClip = new VideoClip(
    'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
  )
  
  const myVideoTexture = new VideoTexture(myVideoClip)
  
  const myMaterial = new Material()
  myMaterial.albedoTexture = myVideoTexture
  myMaterial.roughness = 1
  myMaterial.specularIntensity = 0
  myMaterial.metallic = 0
  
  const baseScene = new Entity()
  engine.addEntity(baseScene)
  baseScene.addComponent(new PlaneShape())
  baseScene.addComponent(
    new Transform({
      position: new Vector3(21.7, 53, 40), scale: new Vector3(4.2, 2.1, 1)
    })
  
  baseScene.addComponent(myMaterial)
  baseScene.addComponent(
      new OnPointerDown(() => {myVideoTexture.playing = !myVideoTexture.playing
      })
    )
  engine.addEntity(baseScene)
  
  myVideoTexture.play()
  myVideoTexture.loop = true

 }
