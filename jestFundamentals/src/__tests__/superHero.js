import {findAllHeroBySkill} from '../superHeroUtils'

it('findAllHeroBySkill', () => {
  const expectedHeros = findAllHeroBySkill('fly')
  expect(expectedHeros).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "spiderman",
        "skills": Array [
          "fly",
          "premonition",
        ],
      },
      Object {
        "name": "superman",
        "skills": Array [
          "fly",
          "laser-eye",
        ],
      },
    ]
  `)
})
