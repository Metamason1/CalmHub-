export function Createwater(): void {

  
    // Create shape component
    const waterPlane = new PlaneShape()
    
    // Create material
    const waterMaterial = new Material()
    let waterTexture = new Texture("images/textures/water.png", {wrap: 1})
    waterMaterial.albedoTexture = waterTexture
    waterMaterial.albedoColor = new Color4(1,1.5,3,4)
    waterMaterial.metallic = 0.8
    waterMaterial.roughness = 1
    waterMaterial.reflectivityColor = new Color3(0,0,0)
    
    let currentScroll = 3 // Current scrolling amount (move this value to scroll)
    
    // Calculated variables
    let yFactor = 0.5
    let xFactor = 0.5
    
    // Set the starting UV's
    let xStart = 2 - Math.floor((currentScroll-1)/2)
    let yStart = ((currentScroll-1)%2)
    
    waterPlane.uvs = [
      (yStart+1)*yFactor, (xStart-1)*xFactor,
      yStart*yFactor, (xStart-1)*xFactor,
      
      yStart*yFactor, xStart*xFactor,
      (yStart+1)*yFactor, xStart*xFactor,
      
      (yStart+1)*yFactor, (xStart-1)*xFactor,
      yStart*yFactor, (xStart-1)*xFactor,
      
      yStart*yFactor, xStart*xFactor,
      (yStart+1)*yFactor, xStart*xFactor
    ]
    
      // Position
      const water = new Entity()
      water.addComponent(waterPlane)
      water.addComponent(new Transform({
        position: new Vector3(11, 0.93, 19.8),
        rotation: Quaternion.Euler(90, 0,45),
        scale: new Vector3(11,11)
      }))
      water.addComponentOrReplace(waterMaterial)
      engine.addEntity(water)
    
      const TILING_FACTOR = 2  // How much texture repeats
      const SCROLL_SPEED = 0.0004  // How fast water scrolls
    
    
      class Update {
      
        ticks     = 0
        seconds   = 0
        camPos    = Camera.instance.position
        leafPos   = new Vector3(12.25, 5.75, 19.25)
        animPlayed  = false
        
        update(dt: number): void {
          this.ticks    += 1
          this.seconds  += dt
    
          currentScroll += SCROLL_SPEED
    
          // Check if player is on leaf, then start ride
          if (this.ticks % 48 == 0)
          {
            if (distance(this.camPos, this.leafPos) < 12 && !this.animPlayed)
            {
              leafBoatAnim.play()
              this.animPlayed = true
            }
          }
    
          let currRowStart = 2 - ((currentScroll-1)/2)
          let currColStart = ((currentScroll-1)%2)
    
          waterPlane.uvs = [
            (currColStart+1)*yFactor*TILING_FACTOR, (currRowStart-1)*xFactor*TILING_FACTOR,
            currColStart*yFactor*TILING_FACTOR, (currRowStart-1)*xFactor*TILING_FACTOR,
            currColStart*yFactor*TILING_FACTOR, currRowStart*xFactor*TILING_FACTOR,
            (currColStart+1)*yFactor*TILING_FACTOR, currRowStart*xFactor*TILING_FACTOR,
            (currColStart+1)*yFactor*TILING_FACTOR, (currRowStart-1)*xFactor*TILING_FACTOR,
            currColStart*yFactor*TILING_FACTOR, (currRowStart-1)*xFactor*TILING_FACTOR,
            currColStart*yFactor*TILING_FACTOR, currRowStart*xFactor*TILING_FACTOR,
            (currColStart+1)*yFactor*TILING_FACTOR, currRowStart*xFactor*TILING_FACTOR
          ]
    
        }
        
      }
      
      engine.addSystem(new Update())
    
    }
    }
    