const questions = [
  {
    question: 'Quais são meus direitos?',
    answer: 'Direito 1, Direito 2, e Direito 3',
  },
  {
    question: 'Qual é o salário mínimo?',
    answer: 'R$1.000,00 (mil)',
  },
  {
    question: 'Quanto tempo de almoço eu tenho por dia?',
    answer: '1h',
  },
  {
    question: 'Quantos dias de férias tenho direito?',
    answer: '30 dias por ano',
  }
]

exports.handler = async event => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    statusCode: 200,
    body: JSON.stringify(questions),
  }
}
