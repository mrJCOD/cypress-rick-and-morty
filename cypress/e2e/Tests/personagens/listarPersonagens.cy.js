

describe('Listar todos os personagens', () => {

    const baseUrl = "https://rickandmortyapi.com/api"

    it('Listar todos os personagens - Sucesso', () => {


        cy.api({
            method: 'GET',
            url: baseUrl + '/character',
            headers: { 'Accept-Language': 'pt-BR', },
        }).then((responseGet) => {

            expect(responseGet.status).to.eq(200)
            expect(responseGet.body).is.not.null
            expect(responseGet.body.results[0].id).to.eq(1)
            expect(responseGet.body.results[0].name).to.eq('Rick Sanchez')
            expect(responseGet.body.results[15].name).to.eq('Amish Cyborg')

        })

    })

    it.only('Listar todos os personagens - Falha', () => {

        cy.api({
            method: 'GET',
            url: baseUrl + '/characte',
            failOnStatusCode: false,
            headers: { 'Accept-Language': 'pt-BR', },
        }).then((responseGet) => {

            expect(responseGet.status).to.eq(404)
            expect(responseGet.body).is.not.null
            expect(responseGet.body.error).to.eq('There is nothing here.')


        })



    });
});