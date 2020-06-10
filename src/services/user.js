import axios from 'axios'
import * as constant from '../utils/constant'
import { handler } from './handler'

/**
 * 
 * @param {nemail: string, password: string } data 
 */
export async function login (data) {
  try {
    // Si le header est set la requete va echoué alors on le dégage
    if (axios.defaults.headers.common["Authorization"]) { delete axios.defaults.headers.common["Authorization"] }
    const res = await axios.post(constant.LOGIN, data)
    // On enregistre le token reçu dans le header pour les autres requetes à venir
    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`

    // on renvoie le body de la reponse qu'on a recu
    return res.data
  } catch (e) {
    // Si à un moment dans tout le try il y a une erreur on entre ici dans le catch
    console.log('Catch login() :' + e)
    throw handler(e)
  }
}

export async function getMe() {
  try {
    const res = await axios.get(constant.MY_PROFIL)
    console.log('getMe :', res.data)
    return res.data
  } catch (e) {
    console.log('Catch getMe() User: ' + e)
    throw handler(e)
  }
}
