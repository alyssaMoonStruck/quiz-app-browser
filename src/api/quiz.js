import apiUrl from '../apiConfig'
import axios from 'axios'

export const quiz = (user, numberOfQuestions) => {
  return axios({
    url: apiUrl + '/questions/quiz/' + numberOfQuestions,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
