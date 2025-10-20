
export const listarTodas = async (req, res) => {
    try {
    const comidas = await ComidaModel.encontreTodas();

    if (!buxos || comidas.lenght === 0) {
        res.statu(404).json({
            total: 0,
            mensagem : 'Não há comidas na lista',
            comidas
        })
    }

    res.status(200).json({
        total: comidas.lenght,
        mensagem: 'Lista de comidas',
        comidas
    })
    } catch (error) {
     res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
     })
    }
}
export const listarUma = async (req, res) => {
    try {
        const id = req.params.id;
        const comida = await ComidaModel.encontreUma(id);

        if (!comida) {
            return res.status(404).json({
                erro: 'comida não encontrado!',
                mensagem: 'Verifique o id do comida',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'comida encontrada',
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