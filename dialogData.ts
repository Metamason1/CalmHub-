import { Dialog } from '@dcl/npc-scene-utils'
import { crystal1, crystal2, crystal3, crystal4, crystal5 } from '../game'

export const Crystal1Dialog: Dialog[] = [
  {
    text: `You are in the right place at the right time, doing the right thing`
  },
  {
    text: `You have the power to be happy`
  },
  {
    text: `Today you are going to be your best self`,
    triggeredByNext: () => {
      myNPC.followPath()
    },
    isEndOfDialog: true
  }
]

export const Crystal2Dialog: Dialog[] = [
  {
    text: `Great things will happen in life today`
  },
  {
    text: `It's okay to take a break`
  },
  {
    text: `There is no such thing as failure, only experiences`,
    triggeredByNext: () => {
      myNPC.followPath()
    },
    isEndOfDialog: true
  }
]

export const Crystal3Dialog: Dialog[] = [
  {
    text: `You have value`
  },
  {
    text: `You are worthy of love and affection`
  },
  {
    text: `Your past mistakes do not define wou you are now`,
    triggeredByNext: () => {
      myNPC.followPath()
    },
    isEndOfDialog: true
  }
]

  export const Crystal4Dialog: Dialog[] = [
    {
      text: `You make good choices`
    },
    {
      text: `Today is going to be a great day`
    },
    {
      text: `You are in control`,
      triggeredByNext: () => {
        myNPC.followPath()
      },
            isEndOfDialog: true
    }
  ]
  
  
  export const Crystal5Dialog: Dialog[] = [
    {
      text: `It's okay to not know everything`
    },
    {
      text: `Yours are talented and intelligent`
    },
    {
      text: `You inspire`,
      triggeredByNext: () => {
        myNPC.followPath()
      },
            isEndOfDialog: true
    }
]
