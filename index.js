import AFRAME from 'aframe'

AFRAME.registerComponent('move-around', {
  init: function () {
    let counter = 0

    let {x, y, z} = this.el.getAttribute('position')

    const step = () => {
      counter += 0.05

      let newX = x * Math.cos(counter)
      let newY = y
      let newZ = z * Math.sin(counter)

      this.el.setAttribute('position', { x: newX, y: newY, z: newZ })

      window.requestAnimationFrame(step)
    }

    window.requestAnimationFrame(step)
  }
})
