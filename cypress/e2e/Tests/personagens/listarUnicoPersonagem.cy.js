



describe('Listar Unico personagem', () => {
    it('Listar um personagem - Sucesso', () => {
        const baseUrl = "https://rickandmortyapi.com/api"
        cy.api({
            method: 'GET',
            url: baseUrl + '/character/15',
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body).is.not.null
            expect(response.body.id).to.eq(15)
            expect(response.body.name).to.eq('Alien Rick')
            expect(response.body.status).to.eq('unknown')
            expect(response.body.species).to.eq('Alien')
            expect(response.body.type).to.eq('')
            expect(response.body.gender).to.eq('Male')
            expect(response.body.origin.name).to.eq('unknown')
            expect(response.body.origin.url).to.eq('')
            expect(response.body.location.name).to.eq('Citadel of Ricks')
            expect(response.body.location.url).to.eq('https://rickandmortyapi.com/api/location/3')
            expect(response.body.image).to.eq('https://rickandmortyapi.com/api/character/avatar/15.jpeg')
            expect(response.body.url).to.eq('https://rickandmortyapi.com/api/character/15')
            expect(response.body.created).to.eq('2017-11-04T20:56:13.215Z')
        })

    });

    it('Listar um personagem que nao existe - Falha', () => {
        const baseUrl = "https://rickandmortyapi.com/api"
        cy.api({
            method: 'GET',
            url: baseUrl + '/character/3209',
            failOnStatusCode: false,
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.eq(404)
            expect(response.body).is.not.null
            expect(response.body.error).to.eq('Character not found')

        })

    });

    it('Listar um personagem endpoint errado - Falha', () => {
        const baseUrl = "https://rickandmortyapi.com/api"
        cy.api({
            method: 'GET',
            url: baseUrl + '/character/perso1',
            failOnStatusCode: false,
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.eq(500)
            expect(response.body).is.not.null
            expect(response.body.error).to.eq('Hey! you must provide an id')

        })

    });


});