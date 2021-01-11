import './App.css';

function App() {
  // const luana = {
  //   client: 'Luana',
  //   age: 27,
  //   shopping: [
  //     {
  //       name: 'Notebook',
  //       price: 'R$ 2500',
  //     },
  //     {
  //       name: 'Refrigerator',
  //       price: 'R$ 3000',
  //     },
  //     {
  //       name: 'Smartfhone',
  //       price: 'R$ 1500',
  //     },
  //   ],
  //   active: true,
  // };

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

  const { client, age, active, shopping } = kelly;

  const total = shopping
    .map((item) => Number(item.price.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  const products = [
    {
      id: 1,
      name: 'Smartfhone',
      price: 'R$ 3000',
      colors: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      name: 'Notebook',
      price: 'R$ 4000',
      colors: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      name: 'PS5',
      price: 'R$ 5000',
      colors: ['#365069', '#47c1c8', '#f95768'],
    },
  ];

  const data = products.filter(
    ({ price }) => Number(price.replace('R$ ', '')) > 3000
  );
  return (
    <div className='App'>
      {data.map(({ id, name, price, colors }) => (
        <div key={id}>
          <h1>Nome: {name}</h1>
          <p>Preço: {price}</p>
          <ul>
            {colors.map((colors) => (
              <li
                style={{ backgroundColor: colors, color: 'white' }}
                key={colors}
              >
                {colors}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p>Nome: {client}</p>
      <p>Idade: {age}</p>
      <p>Total: R$ {total} </p>
      <p>
        Situação:{' '}
        <span style={{ color: active ? 'green' : 'red' }}>
          {active ? 'Ativo' : 'Inativo'}
        </span>
      </p>
      {total > 1000 && <p>Você está gastando demais.</p>}
    </div>
  );
}

export default App;
