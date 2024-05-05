describe('add product to cart', () => {
  // Assim que cada teste iniciar
  beforeEach(() => {
    // Visite o site
    cy.visit('/')
  })

  it('should be able to navigate to the product page and it to the cart', () => {
    // Procurando todas as âncoras (tag "a" ou Link do Next) que iniciem com "/products"
    cy.get('a[href^="/products"]')
      .first() // Selecionando o primeiro da lista
      .click() // Clicando nele

    // Verificando se estamos na rota correta, página de produtos
    cy.location('pathname').should('include', '/products')

    // Verificando se o texto "Cart (0)" existe e está visível
    cy.contains('Cart (0)').should('exist', 'be.visible')

    // Procurando o botão com o texto "Adicionar ao carrinho"
    cy.contains(/adicionar ao carrinho/i) // utilizando Regex
      .should('exist') // Verificando se o botão existe
      .should('be.visible') // Verificando se o botão está visível
      .click() // Clicando nele

    // Procurando o texto "Cart (1)"
    cy.contains(/cart \(1\)/i) // utilizando Regex
      .should('exist') // Verificando se o texto existe
      .should('be.visible') // Verificando se o texto está visível

    // Procurando o texto "Cart (1)"
    cy.contains('Cart (1)') // utilizando texto
      .should('exist') // Verificando se o texto existe
      .should('be.visible') // Verificando se o texto está visível
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/products"]').first().click()
    cy.location('pathname').should('include', '/products')

    // Procurando o botão com o texto "Adicionar ao carrinho", com Regex e clicando nele
    cy.contains(/adicionar ao carrinho/i).click()

    // Verificando se o texto "Cart (1)" existe
    cy.contains('Cart (1)').should('exist')

    // Procurando o botão com o texto "Adicionar ao carrinho", com texto e clicando nele
    cy.contains('Adicionar ao carrinho').click()

    // Verificando se o texto "Cart (1)" ainda existe
    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product, submitting form and add it to the cart', () => {
    // Procurando o input de busca, que tem o name="q"
    cy.get('input[name="q"]')
      .type('java') // Digitando 'java'
      .parent('form') // Procurando o formulário pai do input
      .submit() // Submetendo o formulário

    // Validando se estamos na página de busca
    cy.location('pathname').should('include', '/search')

    // Validando se temos um parâmetro de busca
    cy.location('search')
      .should('exist') // Verificando se o parâmetro de busca existe
      .should('include', 'q=java') // Verificando se o parâmetro de busca contém 'java'

    cy.get('a[href^="/products"]').first().click()
    cy.location('pathname').should('include', '/products')
    cy.contains(/adicionar ao carrinho/i).click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product, submitting form with Enter key and add it to the cart', () => {
    // Procurando o input de busca, que tem o name="q"
    cy.get('input[name="q"]')
      .should('exist', 'be.visible') // Verificando se o input existe e está visível
      .type('java{enter}') // Digitando 'java' e apertando Enter

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('exist').should('include', 'q=java')

    cy.get('a[href^="/products"]').first().click()
    cy.location('pathname').should('include', '/products')
    cy.contains(/adicionar ao carrinho/i).click()

    cy.contains('Cart (1)').should('exist')
  })
})
