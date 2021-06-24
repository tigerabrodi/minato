it('simple user flow searching for burgers in dusseldorf', () => {
  cy.visit('/')

  cy.findByRole('heading', { name: 'Minato' }).should('exist')
  cy.findByLabelText('Find').type('Burgers')
  cy.findByLabelText('Where').type('Dusseldorf')
  cy.findByRole('button', { name: 'search' }).click()

  cy.findByText('Hunsrückenstr. 19, 40213 Dusseldorf, Germany').should('exist')
  cy.findByText('4 out of 5 stars rating').should('exist')
  cy.findByRole('img', { name: 'Beef Brothers' }).should('exist')
  cy.findByRole('link', { name: 'Beef Brothers' }).click()

  cy.findByRole('heading', { name: 'Beef Brothers' }).should('exist')
  cy.findByRole('img', { name: 'Beef Brothers' }).should('exist')
  cy.findByText('4 out of 5 stars rating').should('exist')
  cy.findByText('Hunsrückenstr. 19, 40213 Dusseldorf, Germany').should('exist')

  cy.findByText('Company is open').should('exist')
  cy.findByRole('link', { name: 'Read More' }).click()
})
