function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-30 d-flex justify-between">
            Кошик
            <img src="/img/btn-remove.svg" alt="Remove" />
          </h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center mb-20">

              <div style={{ backgroundImage: 'url(/img/sneackers/1.jpg)' }} className="cartItemImg">

              </div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>1200 грн.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">

              <div style={{ backgroundImage: 'url(/img/sneackers/2.jpg)' }} className="cartItemImg">

              </div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>1400 грн.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>

          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Всього:</span>
                <div></div>
                <b>3 000 грн.</b>
              </li>
              <li>
                <span>Податок 5%</span>
                <div></div>
                <b>150 грн.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформити замовлення
              <img width={16} height={14} src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 грн</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/favorite.svg" alt="" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі кросовки</h1>
          <div className="search-block d-flex">

            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." type="text" />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="favorite" />
            </div>
            <img width={133} height={112} src="/img/sneackers/1.jpg" alt="sneackers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Ціна</span>
                <b>1200 грн.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneackers/2.jpg" alt="sneackers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Ціна</span>
                <b>1200 грн.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneackers/3.jpg" alt="sneackers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Ціна</span>
                <b>1200 грн.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneackers/4.jpg" alt="sneackers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Ціна</span>
                <b>1200 грн.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
