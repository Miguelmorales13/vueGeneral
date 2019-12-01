import { MutationTree, ActionTree } from 'vuex'
import { StateUsers, User } from './User.state'
import { TypesUser } from './Users.type'
import { AXIOS } from '@/plugins/axios'

const namespaced: boolean = true
const state: StateUsers = {
    users: [],
    loader: true,
    selectedUser: {}
}

const mutations: MutationTree<StateUsers> = {
    [TypesUser.mutations.LIST]: (state, users) => {
        state.users = [...users]
    },
    [TypesUser.mutations.ADD]: (state, user) => {
        state.users = [...state.users, user]
    },
    [TypesUser.mutations.LOADER]: (state, loader) => {
        state.loader = loader
    },
    [TypesUser.mutations.UPDATE]: (state, user) => {
        const newUsers = state.users.filter(s => s._id !== user._id)
        state.users = [...newUsers, user]
    },
    [TypesUser.mutations.REMOVE]: (state, user) => {
        state.users = state.users.filter(s => s._id !== user._id)
    },
    [TypesUser.mutations.SET]: (state, user) => {
        state.selectedUser = Object.assign({}, user ? user : {})
    }
}
const actions: ActionTree<StateUsers, any> = {
    async [TypesUser.actions.GETALL]({ state, commit }) {
        if (state.users.length <= 0) {
            commit(TypesUser.mutations.LOADER, true)
            try {
                const res = await AXIOS.get('users')
                commit('LIST', res.data)
                commit('SET')
            } finally {
                commit(TypesUser.mutations.LOADER, false)
            }

        }
    },
    async [TypesUser.actions.GETFORCE]({ state, commit }) {
        commit(TypesUser.mutations.LOADER, true)
        try {
            const res = await AXIOS.get('users')
            commit(TypesUser.mutations.LIST, res.data)
            commit(TypesUser.mutations.SET)
        } finally {
            commit(TypesUser.mutations.LOADER, false)
        }
    }
}
export default {
    namespaced,
    state,
    mutations,
    actions
}