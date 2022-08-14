


describe('Listar varios personagens', () => {
    it('Listar dois personagens - Sucesso', () => {

        const baseUrl = "https://rickandmortyapi.com/api"
        cy.request({
            method: 'GET',
            url: baseUrl + '/character/50,183',
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body).is.not.null
            expect(response.body[0].name).to.eq('Blim Blam')
            expect(response.body[1].name).to.eq('Johnny Depp')



        })

    });

    it('Listar tres personagens - Sucesso', () => {

        const baseUrl = "https://rickandmortyapi.com/api"
        cy.request({
            method: 'GET',
            url: baseUrl + '/character/10,50,183',
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body).is.not.null
            expect(response.body[0].name).to.eq('Alan Rails')
            expect(response.body[1].name).to.eq('Blim Blam')
            expect(response.body[2].name).to.eq('Johnny Depp')



        })

    });

    it('Listar varios personagens endpoint errado - FALHA', () => {

        const baseUrl = "https://rickandmortyapi.com/api"
        cy.request({
            method: 'GET',
            url: baseUrl + '/character/perso10,perso50,perso183',
            failOnStatusCode: false,
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.equal(500)
            expect(response.body).is.not.null
            expect(response.body.error).to.eq('Cast to Number failed for value \"NaN\" at path \"id\" for model \"Character\"')



        })

    });

    it.only('Listar varios personagens baseUrl errada - FALHA', () => {

        const baseUrl = "https://rickandmortyapi.com/aip"
        cy.request({
            method: 'GET',
            url: baseUrl + '/character/10,50,183',
            failOnStatusCode: false,
            headers: { 'Accept-Language': 'en-us', },
        }).then((response) => {

            expect(response.status).to.equal(404)
            expect(response.body).is.not.null




        })

    });
});