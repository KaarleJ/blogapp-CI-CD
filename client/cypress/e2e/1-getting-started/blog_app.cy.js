describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3003')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})