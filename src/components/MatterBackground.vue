<template>
  <div id="matter-canvas" />
</template>

<script>
import decomp from 'poly-decomp'
import { Engine, Render, World, Bodies, Body, MouseConstraint, Events, Query } from 'matter-js'
global.decomp = decomp

const p = { x: window.innerWidth, y: window.innerHeight * 0.75 }
const ground = Bodies.rectangle(p.x / 2, p.y + 30, p.x, 60, {
  isStatic: true
})
const left = Bodies.rectangle(-30, p.y / 2, 60, p.y, {
  isStatic: true
})
const right = Bodies.rectangle(p.x + 30, p.y / 2, 60, p.y, {
  isStatic: true
})
const dynamics = []
const INT = 50
const EXT = 1000
for (let i = INT; i < p.x; i += INT) {
  let dim = 20 + (Math.random() * 90)
  let stagger = Math.random() * INT
  let wave = -EXT + Math.random() * EXT
  for (let j = 0; j < 5; j++) {
    dynamics.push(Bodies.rectangle(i - (INT / 2) + stagger, wave - (j * EXT), dim, dim))
  }
}

const listenForResize = function (render) {
  window.addEventListener('resize', function () {
    const n = { x: window.innerWidth, y: window.innerHeight * 0.75 }
    render.canvas.width = n.x
    render.canvas.height = n.y
    Body.scale(ground, n.x / p.x, 1)
    Body.scale(left, 1, n.y / p.y)
    Body.scale(right, 1, n.y / p.y)
    Body.setPosition(ground, { x: n.x / 2, y: n.y + 30 })
    Body.setPosition(left, { x: -30, y: n.y / 2 })
    Body.setPosition(right, { x: n.x + 30, y: n.y / 2 })
    p.x = n.x
  })
}

const listenForMouse = function (engine) {
  const mouse = MouseConstraint.create(engine, {})
  World.add(engine.world, mouse)
  Events.on(mouse, 'mousemove', function (event) {
    let bodies = Query.point(dynamics, event.mouse.position)
    for (const body of bodies) {
      const dir = Math.random() > 0.5 ? 1 : -1
      Body.setVelocity(body, { x: body.velocity.x, y: -3 })
      if (body.angularVelocity < 0.01) {
        Body.setAngularVelocity(body, Math.PI / 24 * dir)
      }
    }
  })
}

export default {
  mounted () {
    const engine = Engine.create()
    const render = Render.create({
      element: document.getElementById('matter-canvas'),
      engine: engine,
      options: {
        background: 'transparent',
        width: p.x,
        height: p.y,
        wireframes: false
      }
    })
    listenForResize(render)
    listenForMouse(engine)
    World.add(engine.world, [ground, left, right].concat(dynamics))
    Engine.run(engine)
    Render.run(render)
  }
}
</script>
