


describe('Filtro de Personagens', () => {
    it('Filtra personagens por nome e status - Sucesso', () => {
        const baseUrl = "https://rickandmortyapi.com/api"
        cy.request({
            method: 'GET',
            url: baseUrl + '/character/?name=Albert&status=Dead',
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body).is.not.null
            expect(response.body.results[0].name).to.eq('Albert Einstein')
            expect(response.body.results[0].status).to.eq('Dead')


        })

    });

    it('Filtra personagens por nome e status endpoint errado - FALHA', () => {
        const baseUrl = "https://rickandmortyapi.com/api"
        cy.request({
            method: 'GET',
            url: baseUrl + '/character/name=Albert&status=Dead',
            failOnStatusCode: false,
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.eq(500)
            expect(response.body).is.not.null
            expect(response.body.error).to.eq('Hey! you must provide an id')


        })

    });

    it.only('Filtra personagens por especies e genero - SUCESSO', () => {
        const baseUrl = "https://rickandmortyapi.com/api"
        cy.request({
            method: 'GET',
            url: baseUrl + '/character/?gender=Male&species=Human',
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body).is.not.null
            expect(response.body.results).to.a('array').is.not.null
        })

    });


});