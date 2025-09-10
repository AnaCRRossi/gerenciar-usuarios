const {retornarUsuarios, adicionarNovoUsuario} = require('../src/gerenciarUsuarios')
const {expert, expect} = require('chai');

    describe('Testar as funções de Gestão de Usuários', function() {
        it('Validar que posso adicionar um novo nome de usuário na lista', function () {
            // 1. Adicionar um novo nome na lista de usuários
            adicionarNovoUsuario({
                nome:'Maria',
                email:'maria@gmail.com'
            });

            // 2. Retornar a lista de usuários na caixa lista de usuários
            const listaDeUsuarios = retornarUsuarios();

            // 3. Comparar se o novo nome está no fim da lista de usuários
            //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
            //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com')
            expect(listaDeUsuarios.at(-1)).to.eql({ // O eql serve para comparar o objeto inteiro ao inves de um item avulso
                nome:'Maria',
                email: 'maria@gmail.com'
            })
        });
    });