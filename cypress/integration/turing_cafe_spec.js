describe('Turing Cafe', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy
    .fixture('resyData.json')
    .then((reservations) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 200,
        body: reservations.resys
      })
    })
    
    cy.visit(baseUrl)
  });

  it ('Should display the site heading ', () => {
    cy.get('.app-title').should('contain', 'Turing Cafe')
  });

  it ('Should display the reservation form with four inputs and a button', () => {
  cy.get('.reservation-form')
    .find('input[type=text]').should('have.length', 3)

    .get('.reservation-form')
    .find('input[type=number]').should('have.length', 1)

    .get('.reservation-form')
    .find('button').should('contain', 'Make A Reservation')
  });

  it('Should load the page with the correct number of cards', () => {
    cy.get('.resy-container')
      .find('.single-resy').should('have.length', 5)
  })

   it('Each card should have the correct information displayed as well as a cancel button', () => {
    cy.get('.resy-container .single-resy')
      .get('.resy-name').should('have.length', 5)

    cy.get('.resy-container .single-resy')
      .get('.resy-date').should('have.length', 5)

    cy.get('.resy-container .single-resy')
      .get('.resy-time').should('have.length', 5)

    cy.get('.resy-container .single-resy')
      .get('.resy-number').should('have.length', 5)

    cy.get('.resy-container .single-resy')
      .get('.resy-btn').should('have.length', 5)
  })

})
