import AFRAME from 'aframe'

const START_X = -4
const START_Y = 3
const Z = -3
const WIDTH = 1
const SPACING = 0.5

let index = 0

AFRAME.registerComponent('exer', {
  schema: {type: 'string'},
  init: function () {
    const x = START_X + ((WIDTH + SPACING) * index)
    this.el.setAttribute('position', {x, y: START_Y, z: Z})
    this.el.setAttribute('width', WIDTH)
    this.el.setAttribute('height', WIDTH)
    this.el.setAttribute('material', {src: `#${this.data}`})

    index++
  }
})
