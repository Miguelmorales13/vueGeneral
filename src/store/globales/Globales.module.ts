import { GlobalState } from "./Globales.state"
import { MutationTree, ActionTree } from 'vuex'
import { TypesGlobales } from './Globales.types'

const namespaced: boolean = true
const state: GlobalState = {
    shopActive: '',
    theme: 'false'
}

const mutations: MutationTree<GlobalState> = {
    [TypesGlobales.mutations.SET_THEME]:(state, theme)=> {
        state.theme = String(theme)
        localStorage.setItem('theme', theme)
    }
}
const actions: ActionTree<GlobalState, any> = {}

export default {
    namespaced,
    state,
    mutations,
    actions
}