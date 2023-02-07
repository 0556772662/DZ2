var starbucks = {
    coffee: {
        espresso:'эспрессо - это итальянский ответ на вашу сиютинутную потребность в кофеине',
        americano: {
            americanoHot: 'американо - это идальный горячий напиток для тех, кто хотел бы насладится эспрессо, но он слишком крейпкий. Ведь американо этоне что иное, как эспрессо с добавление горячей воды',
            americanoIce: 'айс американо - тоже самое что американо только холодный. Так что пейте его когда хотите прохладиться'
        },
        latte: 'латте - напиток на основе кофе и молока (но молока больше))',
        cappuccino: {
            cappuccinoHot: 'капучино - эспрессо с добавлением в него подогретого вспенного молока',
            cappuccinoIce: 'айс капучино - это тоже самое что просто капучино, только холодный'
        }
    },
    tea: {
        black: 'черный чай - это вид чай, подвергающийся полной ферментации в течение от двух недель до месяца',
        green: 'зеленый чай - это чай, подвергнутый минимальной ферментации',
        seaBuckthorn: 'облепиховый чвй - это вкусный напиток, который содержит большое количество полезный элементов, хорошо уталает жажду и повышает иммунитет',
        berry: 'ягодный чай - это необычный купаж черного и зеленого чай с яркими нотами ягод и мяты'
    },
}
var menu = prompt('введите название кофе или чая')
var espresso = 'эспрессо'
var americano = 'американо'
var latte = 'латте'
var cappuccino = 'капучино'
var black = 'черный'
var green = 'зеленый'
var seaBuckthorn = 'облепиховый'
var berry = 'ягодный'
var americanoHot = 'горячий'

if (menu === espresso){
    console.log(starbucks.coffee.espresso)
    alert('Ваш заказ принят')
}else if (menu ===americano){
    console.log(starbucks.coffee.americano)
    alert('Ваш заказ принятп')
} else if (menu === latte){
    console.log(starbucks.coffee.latte)
    alert('Ваш заказ принят')
}else if (menu === cappuccino){
        console.log(starbucks.coffee.cappuccino)
        alert('Ваш заказ принят')
}else if (menu === black){
    console.log(starbucks.tea.black)
    alert('Ваш заказ принят')
}else if (menu === green){
    console.log(starbucks.tea.green)
    alert('Ваш заказ принят')
}else if (menu === seaBuckthorn){
    console.log(starbucks.tea.seaBuckthorn)
    alert('Ваш заказ принят')
}else if (menu === berry){
    console.log(starbucks.tea.berry)
    alert('Ваш заказ принят')
}else {
    console.log('Такого кофе или чая нет в наличии')
    alert('Такого кофе или чая нет в наличии. Выберите что-то другое')
}

/*switch (americanoHot){
    case 'americanoHot':
        console.log(starbucks.coffee.americano.americanoHot)
        break
    case 'americanoIce':
        console.log(starbucks.coffee.americano.americanoIce)
        break
}*/


