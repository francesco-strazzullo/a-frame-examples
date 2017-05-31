import AFRAME from 'aframe'

const CODING_TOS = {
  violini: 'work out',
  strazzullo: 'enjoy',
  dellava: 'create',
  dluconi: 'rock',
  mluconi: 'disrupt',
  mandolini: 'make',
  massacci: 'build',
  focanti: 'feel good',
  deluca: 'interface',
  tosi: 'discover',
  morresi: 'evolve',
  ceccacci: 'improve',
  pomili: 'math',
  vesprini: 'design'
}

const START_X = -4
const START_Y = 3
const Z = -4
const WIDTH = 1
const SPACING = 0.5
const ELEMENTS_IN_A_ROW = 6

let index = 0

const onExerClick = exer => {
  const codingTo = `coding to ${CODING_TOS[exer]}`

  document.querySelectorAll('[role="message"]').forEach(message => {
    const textAttribute = message.getAttribute('text')
    const newTextAttribute = Object.assign({}, textAttribute, {value: codingTo})
    message.setAttribute('text', newTextAttribute)
  })
}

AFRAME.registerComponent('exer', {
  schema: {type: 'string'},
  init: function () {
    const x = START_X + ((WIDTH + SPACING) * (index % ELEMENTS_IN_A_ROW))
    const y = START_Y - ((WIDTH + SPACING) * Math.floor(index / ELEMENTS_IN_A_ROW))

    this.el.setAttribute('position', {x, y, z: Z})
    this.el.setAttribute('width', WIDTH)
    this.el.setAttribute('height', WIDTH)
    this.el.setAttribute('material', {src: `#${this.data}`})

    this.el.addEventListener('click', () => { onExerClick(this.data) })

    index++
  }
})
