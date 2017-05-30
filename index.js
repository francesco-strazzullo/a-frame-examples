import AFRAME from 'aframe'

AFRAME.registerComponent('move-around', {
  schema: {
    moveX: {type: 'number', default: 0},
    moveY: {type: 'number', default: 0},
    moveZ: {type: 'number', default: 0}
  },
  init: function () {
    this.counter = 0
    this.originalPosition = this.el.getAttribute('position')
  },
  tick: function (time, timeDelta) {
    this.counter += (0.002 * timeDelta)

    let {x, y, z} = this.originalPosition

    let newX = x + this.data.moveX * Math.cos(this.counter)
    let newY = y + this.data.moveY * Math.cos(this.counter)
    let newZ = z + this.data.moveZ * Math.cos(this.counter)

    this.el.setAttribute('position', { x: newX, y: newY, z: newZ })
  }
})
