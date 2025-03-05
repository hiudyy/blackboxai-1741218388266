const menurpg = (prefix) => {
  return `
╭━━━『 🎮 RPG 』━━━╮
┃ *COMANDOS DE RPG*
┃
┃ *MINERAÇÃO* ⛏️
┃ ${prefix}minerar
┃ ${prefix}picareta
┃ ${prefix}mochila
┃ ${prefix}minerios
┃ ${prefix}upminerador
┃ ${prefix}skillminerador
┃ ${prefix}minas
┃
┃ *FAZENDA* 🌾
┃ ${prefix}plantar
┃ ${prefix}fazenda
┃ ${prefix}colher
┃ ${prefix}clima
┃ ${prefix}plantacoes
┃ ${prefix}upfazendeiro
┃ ${prefix}skillfazendeiro
┃ ${prefix}tratamentos
┃ ${prefix}ferramentas
┃
┃ *PESCA* 🎣
┃ ${prefix}pescar
┃ ${prefix}vara
┃ ${prefix}iscas
┃ ${prefix}peixes
┃ ${prefix}uppescador
┃ ${prefix}skillpescador
┃ ${prefix}locais
┃ ${prefix}equipamentos
┃
┃ *CULINÁRIA* 👨‍🍳
┃ ${prefix}cozinhar
┃ ${prefix}receitas
┃ ${prefix}ingredientes
┃ ${prefix}upcozinheiro
┃ ${prefix}skillcozinheiro
┃ ${prefix}cozinha
┃
┃ *CRAFTING* 🛠️
┃ ${prefix}craft
┃ ${prefix}craftlist
┃ ${prefix}estacoes
┃ ${prefix}comprarestacao
┃ ${prefix}melhorarestacao
┃ ${prefix}craftinfo
┃
┃ *BATALHA* ⚔️
┃ ${prefix}batalhar
┃ ${prefix}skills
┃ ${prefix}usarskill
┃ ${prefix}usaritem
┃ ${prefix}status
┃ ${prefix}classe
┃
┃ *DUNGEON* 🏰
┃ ${prefix}dungeon
┃ ${prefix}dungeonlist
┃ ${prefix}explorar
┃ ${prefix}salaatual
┃
┃ *MISSÕES* 📜
┃ ${prefix}missoes
┃ ${prefix}historia
┃ ${prefix}diarias
┃ ${prefix}semanais
┃
┃ *PETS* 🐾
┃ ${prefix}pet
┃ ${prefix}petinfo
┃ ${prefix}treinar
┃ ${prefix}habilidade
┃
┃ *FACÇÕES* ⚔️
┃ ${prefix}faccao
┃ ${prefix}faccaoinfo
┃ ${prefix}guerra
┃ ${prefix}territorio
┃
┃ *CLÃ* 🛡️
┃ ${prefix}clan
┃ ${prefix}claninfo
┃ ${prefix}banco
┃ ${prefix}construcao
┃
┃ *EVENTOS* 🎉
┃ ${prefix}eventos
┃ ${prefix}eventoinfo
┃ ${prefix}participar
┃
┃ *ECONOMIA* 💰
┃ ${prefix}loja
┃ ${prefix}comprar
┃ ${prefix}vender
┃ ${prefix}mercado
┃ ${prefix}depositar
┃ ${prefix}sacar
┃ ${prefix}transferir
┃
┃ *PROFISSÕES* 🎓
┃ ${prefix}profissao
┃ ${prefix}profissaoinfo
┃ ${prefix}aprenderprof
┃ ${prefix}melhorarprof
┃ ${prefix}abandonarprof
┃
┃ *GERAL* 📋
┃ ${prefix}registrar
┃ ${prefix}perfil
┃ ${prefix}inventario
┃
╰━━━━━━━━━━━━━━━╯
`
}

module.exports = menurpg;
