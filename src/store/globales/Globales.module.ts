import { GlobalState } from "./Globales.state"
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { TypesGlobales } from './Globales.types'

const namespaced: boolean = true
const state: GlobalState = {
    theme: 'false'
}

const mutations: MutationTree<GlobalState> = {
    [TypesGlobales.mutations.SET_THEME]:(state, theme)=> {
        state.theme = String(theme)
        localStorage.setItem('theme', theme)
    },
}
const actions: ActionTree<GlobalState, any> = {
    [TypesGlobales.actions.GET_THEME]:({state,commit})=> {
        const theme =localStorage.getItem('theme')
        
        if (theme === null || theme ===undefined){
            commit(TypesGlobales.mutations.SET_THEME,String(false))
        }
        commit(TypesGlobales.mutations.SET_THEME,String(theme))
    }
}
const getters: GetterTree<GlobalState, any> = {
    // [TypesGlobales.getters.GET_THEME]: (state:GlobalState)=>{
    //     return state.theme
    // }
}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}