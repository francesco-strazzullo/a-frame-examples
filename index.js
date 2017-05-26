import AFRAME from 'aframe'

AFRAME.registerComponent('move-around', {
  schema: {
    moveX: {type: 'boolean'},
    moveY: {type: 'boolean'},
    moveZ: {type: 'boolean'}
  },
  init: function () {
    this.counter = 0
    this.originalPosition = this.el.getAttribute('position')
  },
  tick: function (time, timeDelta) {
    this.counter += (0.002 * timeDelta)

    let {x, y, z} = this.originalPosition

    let newX = this.data.moveX ? x * Math.cos(this.counter) : x
    let newY = this.data.moveY ? y * Math.cos(this.counter) : y
    let newZ = this.data.moveZ ? z * Math.cos(this.counter) : z

    this.el.setAttribute('position', { x: newX, y: newY, z: newZ })
  }
})
