export default{
    setAuth(state, auth){
        state.auth = auth
    },

    setStatus(state, status){
        state.status = status
    },

    setID(state, id){
        state.id = id
    },

    setIdBoutique(state, idBoutique){
        state.idBoutique = idBoutique
    },

    setPanier(state, panier){
        state.panier.push(panier)
    },

    setUserData(state, userData){
        state.userData = userData
    },


}