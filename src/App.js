import './App.css';

function App() {
  const luana = {
    client: 'Luana',
    age: 27,
    shopping: [
      {
        name: 'Notebook',
        price: 'R$ 2500',
      },
      {
        name: 'Refrigerator',
        price: 'R$ 3000',
      },
      {
        name: 'Smartfhone',
        price: 'R$ 1500',
      },
    ],
    active: true,
  };

  const kelly = {
    client: 'Kelly',
    age: 29,
    shopping: [
      {
        name: 'Notebook',
        price: 'R$ 2500',
      },
      {
        name: 'Refrigerator',
        price: 'R$ 3000',
      },
      {
        name: 'Smartfhone',
        price: 'R$ 1500',
      },
      {
        name: 'PS5',
        price: 'R$ 5500',
      },
    ],
    active: false,
  };

  const data = kelly;

  const total = data.shopping
    .map((item) => Number(item.price.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div className='App'>
      <p>Nome: {data.client}</p>
      <p>Idade: {data.age}</p>
      <p>Total: R$ {total} </p>
      <p>
        Situação:{' '}
        <span style={{ color: data.active ? 'green' : 'red' }}>
          {data.active ? 'Ativo' : 'Inativo'}
        </span>
      </p>
      {total > 1000 && <p>Você está gastando demais.</p>}
    </div>
  );
}

export default App;
