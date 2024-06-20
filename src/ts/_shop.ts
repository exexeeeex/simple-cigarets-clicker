const ShopItems = [
    {
        id: 1,
        name: 'Автокликер',
        image: '../assets/img/coin.png',
        price: 10,
        has: false
    },
    {
        id: 2,
        name: 'Лекарство от рака',
        image: '../assets/img/heal.jpg',
        price: 20,
        has: false
    }
];

const buyedItems = [];

const perksData = ShopItems.filter(item => item.has == false);
    let shopItem = perksData.map(item => 
        `<div id="${item.id}" class="shop__place__item">
            <img class="shop__place__item__img" src="${item.image}" alt="shop image">
            <div  class="shop__place__item__info">
                <h1 class="shop__place__item__info__name">${item.name}</h1>
                <p class="shop__place__item__info__price">Цена: ${item.price.toString()}</p>
                <button onclick="buyItem(${item.id})" class="shop__place__item__info__button">Купить</button>
            </div>
        </div>`).join('');
document.querySelector(`.shop_place`).innerHTML += shopItem;

const buyItem = (id: number) => {
    const userPoints = Number(localStorage.getItem('_points'));
    const item = ShopItems.find(item => item.id === id);
    if (userPoints >= item.price) {
      localStorage.removeItem('_points');
      const price = userPoints - item.price;
      points = price; 
      counter.innerHTML = `Количество умерших клеток: ${price.toString()}`;
      localStorage.setItem('_points', JSON.stringify(price))
      buyedItems.push(item)
    } else {
      alert('Недостаточно денег');
    }
}