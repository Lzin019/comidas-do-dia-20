import * as ComidaModel from './../models/comidaModels.js'

export const listarTodos = async (req, res) => {
    try {
    const comiidas = await ComidaModel.encontreTodas();

    if (!comiidas || comiidas.lenght === 0) {
        res.statu(404).json({
            total: 0,
            mensagem : 'Não há comiidas na lista',
            comiidas
        })
    }

    res.status(200).json({
        total: comiidas.lenght,
        mensagem: 'Lista de comiidas',
        comiidas
    })
    } catch (error) {
     res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
     })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const comida = await ComidaModel.encontreUm(id);

        if (!comida) {
            return res.status(404).json({
                erro: 'Comida não encontrado!',
                mensagem: 'Verifique o id do comida',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'Comida encontrado',
            comida
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const { nome, tipo, preco, descricao} = req.body;

        const  dado = req.body

        const camposObrigatorios = ['nome', 'tipo', 'descricao'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);
        
        if (faltando.length > 0) {
          return res.status(400).json({
            erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
          });
        }

    
    const novaComida = await ComidaModel.criar(req.body)

    res.status(201).json({
        message: "Comida criado com sucesso!",
        comida: novaComida
    })

    } catch (error) {
        res.status(500).json({
            erro: "Erro ao criar comida",
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const comidaExiste = await ComidaModel.encontreUm(id);

        if(!comidaExiste) {
            return res.status(404).json({
                erro: "Comida não encontrado com esse id",
                id: id
            })
        }

        await ComidaModel.deletar(id);

        res.status(200).json({
            message: "Comiga apagada com sucesso!",
            comidaRemovido: comidaExiste
        })
        
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao apagar comida!",
            detalhes: error.mensagem
        })
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const comidaExiste = await ComidaModel.encontreUm(id);
        if(!comidaExiste) {
            return res.status(404).json({
                erro: "Comida não existe!",
                id: id
            })
        }

        if (dados.tipo) {
            const tiposValidos = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
            if (!tiposValidos.includes(dados.tipo)) {
              return res.status(400).json({
                erro: 'tipo inválida! O Chapéu Seletor só reconhece as 4 tipos',
                tiposValidos
              });
            }
        

        const ComidaAtualizado = await ComidaModel.atualizar(id, dados)
        
        res.status(200).json({
            message: "Comida atualizado com sucesso!",
            comida: ComidaAtualizado
        })

        }
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao atualizar comida",
            detalhes: error.message
        })
    }
}