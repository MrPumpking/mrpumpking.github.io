const desc = new TypeIt('.desc', {
  strings: [
    'Software Developer, computer science student, sleepaholic.',
    'In his free time writes songs about sleeping and makes code happen.',
    '> <a href="https://github.com/mrpumpking">GitHub Profile</a>'
  ],
  speed: 100,
  deleteSpeed: 70,
  cursorSpeed: 500,
  cursorChar: '<div class="desc__cursor"></div>',
  waitUntilVisible: true
})

const brand = new TypeIt('.brand', {
  speed: 100,
  deleteSpeed: 70,
  cursorSpeed: 500,
  cursorChar: '<div class="brand__cursor"></div>',
  waitUntilVisible: true,
  afterComplete: (instance) => {
    instance.$e.classList.add('js-typeit-done')
    desc.go()
  }
})

brand
  .type('MrPumpking')
  .pause(1000)
  .delete(10)
  .type('Michał Bar (@MrPumpking)')
  .go()


