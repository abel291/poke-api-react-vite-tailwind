export const fecthApi = async (path) => {
    const response = await fetch(path)
    let json = await response.json();

    return json
}
export const fechPokemon = async (id) => {
    let dataFormat = {}
    await fecthApi(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => {
        dataFormat = fomartData(data)
    })
    return dataFormat
}
export const formatStast = (stats) => {
    let newStats={}
    stats.forEach((item) => {
        newStats[item.stat.name]=item.base_stat
        
    })
    
    return newStats
}
export const fomartData = (data) => {
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites.other.dream_world.front_default,
        type: data.types[0].type.name,
        types: data.types,
        abilities: data.abilities,
        species: data.species,
        exp: data.base_experience,
        stats: formatStast(data.stats)
    }
}

export const fecthAbilities = async (rawAbilities) => {
    let abilities = []
    for (let i = 0; i < rawAbilities.length; i++) {
        await fecthApi(rawAbilities[i].ability.url).then((data) => {

            let desc_min = data.flavor_text_entries.find((item) => {
                return item.language.name == "es"
            })

            let name = data.names.find((item) => {
                return item.language.name == "es"
            })

            abilities[i] = {
                name: name.name,
                //desc_max: data.effect_entries[0].effect,
                desc_min: desc_min.flavor_text
            }
        })
    }
    return abilities
}

export const fecthSpecies = async (rawSpecies) => {
    let species = ""
    await fecthApi(rawSpecies.url).then((data) => {
        let newSpecies = data.flavor_text_entries.find((item) => {
            return item.language.name == "es"
        })
        species = newSpecies.flavor_text
    })
    return species
}