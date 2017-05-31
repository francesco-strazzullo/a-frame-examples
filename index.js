import AFRAME from 'aframe'

const START_X = -4
const START_Y = 3
const Z = -3
const WIDTH = 1
const SPACING = 0.5
const ELEMENTS_IN_A_ROW = 6

let index = 0

AFRAME.registerComponent('exer', {
  schema: {type: 'string'},
  init: function () {
    const x = START_X + ((WIDTH + SPACING) * (index % ELEMENTS_IN_A_ROW))
    const y = START_Y - ((WIDTH + SPACING) * Math.floor(index / ELEMENTS_IN_A_ROW))
    this.el.setAttribute('position', {x, y, z: Z})
    this.el.setAttribute('width', WIDTH)
    this.el.setAttribute('height', WIDTH)
    this.el.setAttribute('material', {src: `#${this.data}`})

    index++
  }
})
