export interface Question {
  id: string
  question: string
  answers: string[]
  correct: string
}

export const QUESTIONS: Record<string, Question> = {
  'RO-AB': {
    id: 'RO-AB',
    question: 'Care este capitala județului Alba?',
    answers: ['Alba Iulia', 'Cluj-Napoca', 'Sibiu', 'Timișoara'],
    correct: 'Alba Iulia'
  },
  'RO-B': {
    id: 'RO-B',
    question: 'București este capitala...?',
    answers: ['României', 'Bulgariei', 'Serbiei', 'Ungariei'],
    correct: 'României'
  },
  'RO-CJ': {
    id: 'RO-CJ',
    question: 'Ce universitate este în Cluj?',
    answers: ['Politehnica București', 'UBB', 'ASE', 'UTM'],
    correct: 'UBB'
  }
}
