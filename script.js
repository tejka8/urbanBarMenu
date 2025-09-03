
const dictionary={
    mk:{
        titleCoffee:"Кафе",
        titleAlcoholic:"Алкохолни",
        titleNonAlcoholic:"Без алкохолни",
        titleIceCream:"Сладолед"
    },
    en:{
        titleCoffee:"Coffee",
        titleAlcoholic:"Alcoholic",
        titleNonAlcoholic:"Non Alcoholic",
        titleIceCream:"Ice Cream"
    }
}
const products={
    coffee:[
        {
            title:{mk:"Американо", en:"Americano"},
            image:"photos/coffee/americano1.jpg",
            price:"100"
        },
        {
            title:{mk:"Еспресо", en:"Espresso"},
            image:"photos/coffee/espresso.png",
            price:"100"
        },
        {
            title:{mk:"Ладно еспресо", en:"Iced Espresso"},
            image:"photos/coffee/icedEspresso.jpg",
            price:"100"
        },
        {
            title:{mk:"Безкофеинско еспресо", en:"Decaf Espresso"},
            image:"photos/coffee/espresso.png",
            price:"110"
        },
        {
            title:{mk:"Мало макијато", en:"Small Macchiato"},
            image:"photos/coffee/espressoMacchiato.jpg",
            price:"110"
        },
        {
            title:{mk:"Безкофеинско мало макијато", en:"Small Decaf Macchiato"},
            image:"photos/coffee/espressoMacchiato.jpg",
            price:"120"
        },
        {
            title:{mk:"Ладно макијато", en:"Iced Macchiato"},
            image:"photos/coffee/icedMachiato.jpg",
            price:"120"
        },
        {
            title:{mk:"Големо Макијато", en:"Large Macchiato"},
            image:"photos/coffee/machiato.jpg",
            price:"120"
        },
        {
            title:{mk:"Безкофеинско макијато", en:"Decaf Macchiato"},
            image:"photos/coffee/machiato.jpg",
            price:"130"
        },
        {
            title:{mk:"Капучино", en:"Cappuccino"},
            image:"photos/coffee/cappucino.jpg",
            price:"130"
        },
        {
            title:{mk:"Нескафе", en:"Nescafe"},
            image:"photos/coffee/nescafe.jpg",
            price:"140"
        },
        {
            title:{mk:"Нескафе со вкус", en:"Flavored Nescafe"},
            image:"photos/coffee/nescafe.jpg",
            price:"160"
        },
        {
            title:{mk:"Афогато", en:"Affogato"},
            image:"photos/coffee/affogato.jpg",
            price:"150"
        },
        {
            title:{mk:"Дуло еспресо", en:"Double Espresso"},
            image:"photos/coffee/doubleEspresso.jpg",
            price:"150"
        },
        {
            title:{mk:"Лате макијато", en:"Latte Macchiato"},
            image:"photos/coffee/latte.jpg",
            price:"150"
        },
        {
            title:{mk:"Дупло макијато", en:"Double Macchiato"},
            image:"photos/coffee/machiato.jpg",
            price:"160"
        },
        {
            title:{mk:"Фредо еспресо", en:"Fredo Espresso"},
            image:"photos/coffee/freddoEspresso.jpg",
            price:"160"
        },
        {
            title:{mk:"Фредо капучино", en:"Fredo Cappuccino"},
            image:"photos/coffee/freddoCappucino.jpg",
            price:"180"
        },
        {
            title:{mk:"Ирско кафе", en:"Irish Coffee"},
            image:"photos/coffee/irish.jpg",
            price:"240"
        },
        {
            title:{mk:"Лате макијато со вкус", en:"Flavored Latte Macchiato"},
            image:"photos/coffee/latte.jpg",
            price:"180"
        },
        {
            title:{mk:"Какао", en:"Hot Cocoa"},
            image:"photos/coffee/hotCocoa.jpg",
            price:"90"
        },
        {
            title:{mk:"Топло чоколадо", en:"Hot Chocolate"},
            image:"photos/coffee/hotChocolate.jpg",
            price:"150"
        },
        {
            title:{mk:"Чај", en:"Tea"},
            image:"photos/coffee/tea.jpg",
            price:"90"
        },
        {
            title:{mk:"Салеп", en:"Salep"},
            image:"photos/coffee/salep.jpg",
            price:"130"
        },
        {
            title:{mk:"Еспресо за носење", en:"Espresso To Go"},
            image:"photos/coffee/toGo.jpg",
            price:"80"
        },
        {
            title:{mk:"Безкофеинско еспресо за носење ", en:"Decaf Espresso To Go"},
            image:"photos/coffee/toGo.jpg",
            price:"90"
        },
        {
            title:{mk:"Макијато за носење", en:"Macchiato To Go"},
            image:"photos/coffee/toGo.jpg",
            price:"100"
        },
        {
            title:{mk:"Безкофеинско макијато за носење ", en:"Decaf Macchiato To Go"},
            image:"photos/coffee/toGo.jpg",
            price:"100"
        },
        {
            title:{mk:"Нескафе за носење", en:"Nescafe To Go"},
            image:"photos/coffee/toGo.jpg",
            price:"110"
        },
        {
            title:{mk:"Фредо еспресо за носење", en:"Fredo Espresso To Go"},
            image:"photos/coffee/toGo.jpg",
            price:"130"
        },
        {
            title:{mk:"Фредо капучино за носење", en:"Fredo Cappuccino To Go"},
            image:"photos/coffee/toGo.jpg",
            price:"140"
        },
    ],
    alcoholic: {
        cocktails: [
            {
                title: { mk: "Black Russian", en: "Black Russian" },
                description: { mk: "Вотка, ликер од кафе", en: "Vodka, coffee liqueur" },
                image: "photos/alcoholic/cocktails/blackRussian.jpg",
                price: "220"
            },
            {
                title: { mk: "Безалкохолен коктел", en: "Non-Alcoholic Cocktail" },
                description: { mk: "Безалкохолен коктел", en: "Non-alcoholic cocktail" },
                image: "img/alcoholicDrinks/coctails/nonAlcoholic.png",
                price: "220"
            },
            {
                title: { mk: "Bahama Mama", en: "Bahama Mama" },
                description: { mk: "Бел рум, златен рум, Малибу, ликер од кафе, сок од ананас, сок од портокал, лимон", en: "White rum, gold rum, Malibu, coffee liqueur, pineapple juice, orange juice, lemon" },
                image: "photos/alcoholic/cocktails/bahamaMama.jpg",
                price: "230"
            },
            {
                title: { mk: "Blue Lagoon", en: "Blue Lagoon" },
                description: { mk: "Вотка, Блу Куракао, Спрајт", en: "Vodka, Blue Curaçao, Sprite" },
                image:"photos/alcoholic/cocktails/blueLagoon.jpg",
                price: "240"
            },
            {
                title: { mk: "Gill", en: "Gill" },
                description: { mk: "Џин, лимон, шеќерен сируп, газирана вода", en: "Gin, lemon juice, sugar syrup, soda water" },
                image: "photos/alcoholic/cocktails/gill.jpg",
                price: "240"
            },
            {
                title: { mk: "Cosmopolitan", en: "Cosmopolitan" },
                description: { mk: "Вотка, Трипл Сек, сок од боровница, лимон", en: "Vodka, Triple Sec, cranberry juice, lemon" },
                image: "photos/alcoholic/cocktails/cosmopolitan.jpg",
                price: "250"
            },
            {
                title: { mk: "Cuba Libre", en: "Cuba Libre" },
                description: { mk: "Бел рум, кока кола, лимон, шербет", en: "White rum, Coca-Cola, lemon, syrup" },
                image: "photos/alcoholic/cocktails/cubaLibre.jpg",
                price: "250"
            },
            {
                title: { mk: "Pink Angel", en: "Pink Angel" },
                description: { mk: "Вотка, лимон, шербет, кокосово млеко", en: "Vodka, lemon, syrup, coconut milk" },
                image: "photos/alcoholic/cocktails/pinkAngel.jpg",
                price: "250"
            },
            {
                title: { mk: "Sex on the Beach", en: "Sex on the Beach" },
                description: { mk: "Вотка, портокал сок, гренадин", en: "Vodka, orange juice, grenadine" },
                image: "photos/alcoholic/cocktails/SOB.jpg",
                price: "250"
            },
            {
                title: { mk: "Tequila Sunrise", en: "Tequila Sunrise" },
                description: { mk: "Текила, сок од портокал, гренадин", en: "Tequila, orange juice, grenadine" },
                image: "photos/alcoholic/cocktails/tequilaSunrise.jpg",
                price: "250"
            },
            {
                title: { mk: "Amaretto Sour", en: "Amaretto Sour" },
                description: { mk: "Амарето, шербет, лимон", en: "Amaretto, syrup, lemon" },
                image: "photos/alcoholic/cocktails/amaretoSour.jpg",
                price: "250"
            },
            {
                title: { mk: "Bramble", en: "Bramble" },
                description: { mk: "Џин, ликер од боровница, шербет, лимон", en: "Gin, blueberry liqueur, syrup, lemon" },
                image: "photos/alcoholic/cocktails/bramble.jpg",
                price: "250"
            },
            {
                title: { mk: "Daiquiri", en: "Daiquiri" },
                description: { mk: "Бел рум, лимон, шербет", en: "White rum, lemon, syrup" },
                image: "photos/alcoholic/cocktails/daiquiri.jpg",
                price: "250"
            },
            {
                title: { mk: "Margarita", en: "Margarita" },
                description: { mk: "Текила, Трипл Сек, лимон", en: "Tequila, Triple Sec, lemon" },
                image: "photos/alcoholic/cocktails/margarita.jpg",
                price: "250"
            },
            {
                title: { mk: "Clover Club", en: "Clover Club" },
                description: { mk: "Џин, малини, белка од јајце, лимон", en: "Gin, raspberries, egg white, lemon" },
                image: "photos/alcoholic/cocktails/cloverClub.jpg",
                price: "250"
            },
            {
                title: { mk: "Gin Sour", en: "Gin Sour" },
                description: { mk: "Џин, лимон, шербет", en: "Gin, lemon, syrup" },
                image: "photos/alcoholic/cocktails/ginSour.jpg",
                price: "250"
            },
            {
                title: { mk: "Espresso Martini", en: "Espresso Martini" },
                description: { mk: "Вотка, ликер од кафе, еспресо, шербет", en: "Vodka, coffee liqueur, espresso, syrup" },
                image: "photos/alcoholic/cocktails/espMartini.jpg",
                price: "280"
            },
            {
                title: { mk: "Pina Colada", en: "Pina Colada" },
                description: { mk: "Бел рум, кокосово млеко, сок од ананас", en: "White rum, coconut milk, pineapple juice" },
                image: "photos/alcoholic/cocktails/pinaColada.jpg",
                price: "280"
            },
            {
                title: { mk: "French Kiss", en: "French Kiss" },
                description: { mk: "Пенливо вино, ликер од малина, свежи малини", en: "Sparkling wine, raspberry liqueur, fresh raspberries" },
                image: "photos/alcoholic/cocktails/frenchKiss.jpg",
                price: "260"
            },
            {
                title: { mk: "Mexicana", en: "Mexicana" },
                description: { mk: "Текила, доматен сок, лимета, табаско, сол, пиперче", en: "Tequila, tomato juice, lime, Tabasco, salt & pepper" },
                image: "photos/alcoholic/cocktails/mexicana.jpg",
                price: "280"
            },
            {
                title: { mk: "Aperol Sour", en: "Aperol Sour" },
                description: { mk: "Аперол, шербет, лимон", en: "Aperol, syrup, lemon" },
                image: "photos/alcoholic/cocktails/aperol.jpg",
                price: "280"
            },
            {
                title: { mk: "Baby Blue", en: "Baby Blue" },
                description: { mk: "Џин, шербет, лимон, сино куракао, тоник", en: "Gin, syrup, lemon, blue curaçao, tonic" },
                image: "photos/alcoholic/cocktails/babyBlue.jpg",
                price: "280"
            },
            {
                title: { mk: "White Russian", en: "White Russian" },
                description: { mk: "Вотка, ликер од кафе, млеко/крема", en: "Vodka, coffee liqueur, milk/cream" },
                image: "photos/alcoholic/cocktails/whiteRussian.jpg",
                price: "280"
            },
            {
                title: { mk: "Whiskey Sour", en: "Whiskey Sour" },
                description: { mk: "Виски, лимон, шербет, ангостура", en: "Whiskey, lemon, syrup, Angostura" },
                image: "photos/alcoholic/cocktails/whiskeySour.jpg",
                price: "280"
            },
            {
                title: { mk: "Vodka Sour", en: "Vodka Sour" },
                description: { mk: "Вотка, лимон, шербет", en: "Vodka, lemon, syrup" },
                image: "photos/alcoholic/cocktails/amaretoSour.jpg",
                price: "280"
            },
            {
                title: { mk: "God Father", en: "God Father" },
                description: { mk: "Скоч виски, амарето", en: "Scotch whiskey, amaretto" },
                image: "photos/alcoholic/cocktails/godFather.jpg",
                price: "280"
            },
            {
                title: { mk: "Caipiroska", en: "Caipiroska" },
                description: { mk: "Вотка, лајм, кафеав шеќер", en: "Vodka, lime, brown sugar" },
                image: "photos/alcoholic/cocktails/caipiroska.jpg",
                price: "300"
            },
            {
                title: { mk: "Mojito", en: "Mojito" },
                description: { mk: "Бел рум, нане, лајм, кафеав шеќер, газирана вода", en: "White rum, mint, lime, brown sugar, soda water" },
                image: "photos/alcoholic/cocktails/mojito.jpg",
                price: "300"
            },
            {
                title: { mk: "Negroni", en: "Negroni" },
                description: { mk: "Џин, вермут, кампари", en: "Gin, vermouth, Campari" },
                image: "photos/alcoholic/cocktails/negroni.jpg",
                price: "300"
            },
            {
                title: { mk: "Passion Spritz", en: "Passion Spritz" },
                description: {
                    mk: "Просеко, сируп од маракуја, газирана вода",
                    en: "Prosecco, passion fruit syrup, soda water"
                },
                image: "photos/alcoholic/cocktails/passionSpritz.jpg",
                price: "280"
            },
            {
                title: { mk: "Pornstar Martini", en: "Pornstar Martini" },
                description: { mk: "Вотка, сируп од маракуја, ванила сируп, просеко", en: "Vodka, passion fruit syrup, vanilla syrup, Prosecco" },
                image: "photos/alcoholic/cocktails/pornstarMartini.jpg",
                price: "300"
            },
            {
                title: { mk: "Hugo", en: "Hugo" },
                description: { mk: "Просеко, елдерфловер, газирана вода, нане, лајм", en: "Prosecco, elderflower, soda water, mint, lime" },
                image: "photos/alcoholic/cocktails/hugo.jpg",
                price: "300"
            },
            {
                title: { mk: "Aperol Spritz", en: "Aperol Spritz" },
                description: { mk: "Аперол, просеко, газирана вода", en: "Aperol, Prosecco, soda water" },
                image: "photos/alcoholic/cocktails/aperol.jpg",
                price: "300"
            },
            {
                title: { mk: "Strawberry Mojito", en: "Strawberry Mojito" },
                description: { mk: "Бел рум, нане, лајм, кафеав шеќер, газирана вода, јагода сируп", en: "White rum, mint, lime, brown sugar, soda water, strawberry syrup" },
                image: "photos/alcoholic/cocktails/strawberryMojito.jpg",
                price: "300"
            },
            {
                title: { mk: "Paloma", en: "Paloma" },
                description: { mk: "Текила, сируп од боровница, газирана вода, сол", en: "Tequila, blueberry syrup, soda water, salt" },
                image: "photos/alcoholic/cocktails/paloma.jpg",
                price: "300"
            },
            {
                title: { mk: "Lemonita", en: "Lemonita" },
                description: { mk: "Вотка, шербет, лимон, Швепс лимон", en: "Vodka, syrup, lemon, Schweppes lemon" },
                image: "photos/alcoholic/cocktails/lemonita.jpg",
                price: "280"
            },
            {
                title: { mk: "Long Island", en: "Long Island" },
                description: { mk: "Џин, Трипл сек, Текила, Рум, Вотка, Лајм, кока кола", en: "Gin, Triple sec, Tequila, Rum, Vodka, lime, Coca-Cola" },
                image: "photos/alcoholic/cocktails/longIsland.jpg",
                price: "300"
            }
        ],
        wines: [
            {
                title: { mk: "Наливно вино", en: "Draft Wine" },
                description: { mk: "0.187", en: "0.187" },
                price: "150"
            },
            {
                title: { mk: "Александрија Бело", en: "Alexandria White" },
                description: { mk: "0.2", en: "0.2" },
                price: "250"
            },
            {
                title: { mk: "Александрија Црвено", en: "Alexandria Red" },
                description: { mk: "0.2", en: "0.2" },
                price: "250"
            },
            {
                title: { mk: "Куве Бело", en: "Cuve White" },
                description: { mk: "0.75", en: "0.75" },
                price: "1400"
            },
            {
                title: { mk: "Куве Розе", en: "Cuve Rose" },
                description: { mk: "0.75", en: "0.75" },
                price: "1400"
            },
            {
                title: { mk: "Куве Црвено", en: "Cuve Red" },
                description: { mk: "0.75", en: "0.75" },
                price: "1400"
            },
            {
                title: { mk: "Александрија Белo", en: "Alexandria White" },
                description: { mk: "0.75", en: "0.75" },
                price: "2000"
            },
            {
                title: { mk: "Бела Вода Бело", en: "Bela Voda White" },
                description: { mk: "0.75", en: "0.75" },
                price: "2600"
            },
            {
                title: { mk: "Бела Вода Црвено", en: "Bela Voda Red" },
                description: { mk: "0.75", en: "0.75" },
                price: "2600"
            }
        ],
        beers: [
            {
                title: { mk: "Скопско", en: "Skopsko" },
                description: { mk: "0.33", en: "0.33" },
                price: "170"
            },
            {
                title: { mk: "Скопско Смут", en: "Skopsko Smooth" },
                description: { mk: "0.33", en: "0.33" },
                price: "170"
            },
            {
                title: { mk: "Хајникен", en: "Heineken" },
                description: { mk: "0.33", en: "0.33" },
                price: "180"
            },
            {
                title: { mk: "Амстел", en: "Amstel" },
                description: { mk: "0.33", en: "0.33" },
                price: "180"
            },
            {
                title: { mk: "Корона", en: "Corona" },
                description: { mk: "0.33", en: "0.33" },
                price: "250"
            }
        ],

        whiskey: [
            {
                title: { mk: "Балентајнс", en: "Ballantine's" },
                price: "200"
            },
            {
                title: { mk: "Џи Би", en: "J&B" },
                price: "220"
            },
            {
                title: { mk: "Џемисон", en: "Jameson" },
                price: "250"
            },
            {
                title: { mk: "Фоур Розес", en: "Four Roses" },
                price: "250"
            },
            {
                title: { mk: "Џони Вокер Ред", en: "Johnnie Walker Red" },
                price: "250"
            },
            {
                title: { mk: "Џони Вокер Блек", en: "Johnnie Walker Black" },
                price: "350"
            },
            {
                title: { mk: "Хани Џек Даниелс", en: "Jack Daniels Honey" },
                price: "300"
            },
            {
                title: { mk: "Џек Даниелс", en: "Jack Daniels" },
                price: "300"
            },
            {
                title: { mk: "Џентлмен Џек", en: "Gentleman Jack" },
                price: "330"
            },
            {
                title: { mk: "Нејкед Малт", en: "Naked Malt" },
                price: "350"
            },
            {
                title: { mk: "Чивас Регал 12", en: "Chivas Regal 12" },
                price: "350"
            },
            {
                title: { mk: "Макалан", en: "Macallan" },
                price: "700"
            }
        ],

        vodka: [
            {
                title: { mk: "Смирноф", en: "Smirnoff" },
                price: "200"
            },
            {
                title: { mk: "Абсолут", en: "Absolut" },
                price: "200"
            },
            {
                title: { mk: "Белведере", en: "Belvedere" },
                price: "400"
            },
            {
                title: { mk: "Греј Гус", en: "Grey Goose" },
                price: "400"
            }
        ],

        gin:[
            {
                title: { mk: "Бикенс", en: "Beefeater Beekens" },
                price: "180"
            },
            {
                title: { mk: "Росев Бикенс", en: "Rosev Beekens" },
                price: "180"
            },
            {
                title: { mk: "Сах", en: "Sah" },
                price: "180"
            },
            {
                title: { mk: "Бифитер", en: "Beefeater" },
                price: "220"
            },
            {
                title: { mk: "Гордонс", en: "Gordons" },
                price: "220"
            },
            {
                title: { mk: "Гордонс Јагода", en: "Gordons Strawberry" },
                price: "220"
            },
            {
                title: { mk: "Танкерај", en: "Tanqueray" },
                price: "250"
            },
            {
                title: { mk: "Бомбај", en: "Bombay" },
                price: "300"
            },
            {
                title: { mk: "Хендрикс", en: "Hendrick's" },
                price: "350"
            }
        ],

        rum: [
            {
                title: { mk: "Captain Morgan", en: "Captain Morgan" },
                price: "200"
            },
            {
                title: { mk: "Captain Morgan Gold", en: "Captain Morgan Gold" },
                price: "200"
            },
            {
                title: { mk: "Bacardi", en: "Bacardi" },
                price: "220"
            },
            {
                title: { mk: "Brugal Rum 1888", en: "Brugal Rum 1888" },
                price: "550"
            }
        ],
        liquor: [
            {
                title: { mk: "Jeger", en: "Jeger" },
                price: "200"
            },
            {
                title: { mk: "Pelinkovac", en: "Pelinkovac" },
                price: "190"
            },
            {
                title: { mk: "Martini Belo", en: "Martini Belo" },
                price: "190"
            },
            {
                title: { mk: "Martini Roze", en: "Martini Roze" },
                price: "190"
            },
            {
                title: { mk: "Amareto", en: "Amareto" },
                price: "200"
            },
            {
                title: { mk: "Baileys", en: "Baileys" },
                price: "220"
            },
            {
                title: { mk: "Aperol", en: "Aperol" },
                price: "250"
            },
            {
                title: { mk: "Campari", en: "Campari" },
                price: "220"
            },
            {
                title: { mk: "Malibu", en: "Malibu" },
                price: "220"
            }
        ],
        brandy:[
            {
                title: { mk: "Badel", en: "Badel" },
                price: "170"
            },
            {
                title: { mk: "Hennessy", en: "Hennessy" },
                price: "400"
            },
            {
                title: { mk: "Stock", en: "Stock" },
                price: "190"
            }
        ],
    },
    nonAlcoholic: {
        softDrinks: [
            {
                title: { mk: "Нектар портокал", en: "Orange nectar" },
                price: "150"
            },
            {
                title: { mk: "Нектар јаболко", en: "Apple nectar" },
                price: "150"
            },
            {
                title: { mk: "Нектар праска", en: "Peach nectar" },
                price: "150"
            },
            {
                title: { mk: "Нектар шумско", en: "Forest fruit nectar" },
                price: "150"
            },
            {
                title: { mk: "Цеден портокал", en: "Orange juice" },
                price: "180"
            },
            {
                title: { mk: "Цеден лимон", en: "Lemon juice" },
                price: "160"
            },
            {
                title: { mk: "Цеден цитрон", en: "Citron juice" },
                price: "170"
            },
            {
                title: { mk: "Цеден микс", en: "Juice mix" },
                price: "190"
            },
            {
                title: { mk: "Монін скок", en: "Monin shock" },
                price: "150"
            },
            {
                title: { mk: "Розева лимонада", en: "Pink lemonade" },
                price: "160"
            },
            {
                title: { mk: "Роса негазирана", en: "Rosa still water" },
                price: "90"
            },
        ],

        fizzyDrinks: [
            { title: { mk: "Кока кола", en: "Coca Cola" }, price: "130" },
            { title: { mk: "Кока кола зеро", en: "Coca Cola Zero" }, price: "130" },
            { title: { mk: "Швепс лимон", en: "Schweppes Lemon" }, price: "130" },
            { title: { mk: "Швепс лимон зеро", en: "Schweppes Lemon Zero" }, price: "130" },
            { title: { mk: "Швепс мандарина", en: "Schweppes Mandarin" }, price: "130" },
            { title: { mk: "Швепс тоник", en: "Schweppes Tonic" }, price: "130" },
            { title: { mk: "Швепс тоник зеро", en: "Schweppes Tonic Zero" }, price: "130" },
            { title: { mk: "Швепс пинк", en: "Schweppes Pink" }, price: "130" },
            { title: { mk: "Фанта", en: "Fanta" }, price: "130" },
            { title: { mk: "Спрајт", en: "Sprite" }, price: "130" },
            { title: { mk: "Ред Бул", en: "Red Bull" }, price: "250" },
            { title: { mk: "Цедевита", en: "Cedevita" }, price: "100" },
            {
                title: { mk: "Роса газирана", en: "Rosa sparkling water" },
                price: "100"
            },
            {
                title: { mk: "Књаз Милош негазирана", en: "Knjaz Milos sparkling water" },
                price: "100"
            },
        ]
    },
   iceCream :[
        {
            title: { mk: "Карамела", en: "Caramel" },
            price: "80"
        },
        {
            title: { mk: "Ванила", en: "Vanilla" },
            price: "80"
        },
        {
            title: { mk: "Чоколадо", en: "Chocolate" },
            price: "80"
        },
        {
            title: { mk: "Јагода", en: "Strawberry" },
            price: "80"
        },
        {
            title: { mk: "Шумско", en: "Forest Fruit" },
            price: "80"
        },
        {
            title: { mk: "Мед и бадем", en: "Honey & Almond" },
            price: "80"
        },
        {
            title: { mk: "Корнет", en: "Cone" },
            price: "20"
        },
        {
            title: { mk: "Чашка", en: "Cup" },
            price: "10"
        }
    ]
}
let currentCategory = null;
let currentSubcategory = null;
let currentView = "main";

let language = localStorage.getItem("language") || "mk";

function i18n(key) {
    return dictionary[language][key];
}
function showMain() {
    currentCategory = null;
    currentSubcategory = null;
    currentView = "main";

    document.getElementById("mainDiv").classList.remove("d-none");
    document.getElementById("categoryView").classList.add("d-none");
}

function changeLanguage(lang) {
    language = lang;
    localStorage.setItem("language", lang);

    document.getElementById("currLang").textContent = lang.toUpperCase();

    document.getElementById("titleCoffee").textContent = i18n("titleCoffee").toUpperCase();
    document.getElementById("titleAlcoholic").textContent = i18n("titleAlcoholic").toUpperCase();
    document.getElementById("titleNonAlcoholic").textContent = i18n("titleNonAlcoholic").toUpperCase();
    document.getElementById("titleIceCream").textContent = i18n("titleIceCream").toUpperCase();

    if (currentView === "category" && currentCategory) {
        showCategory(currentCategory);
    } else if (currentView === "subcategory" && currentSubcategory) {
        showProductsOfSubcategory(currentSubcategory);
    }
}

function showCategory(category) {
    currentCategory = category;
    currentSubcategory = null;
    currentView = "category";

    const mainDiv = document.getElementById("mainDiv");
    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    mainDiv.classList.add("d-none");
    categoryView.classList.remove("d-none");

    if (category === "alcoholic" ) {
        showSubcategories(["cocktails", "wines", "beers","vodka","whiskey","gin","rum","liquor","brandy"],"alcoholic");
        return;
    }
    if (category === "nonAlcoholic" ) {
        showSubcategories(["softDrinks", "fizzyDrinks"],"nonAlcoholic");
        return;
    }

    if (category === "iceCream") {
        const items = products["iceCream"];
        showSimpleList("iceCream");
        return;
    }
    const items = products[category];
    renderProducts(items);
}
function getSubcategoryTitle(sub) {
    const translations = {
        mk: {
            cocktails: "Коктели",
            wines: "Вино",
            beers: "Пиво",
            vodka:"Вотка",
            whiskey:"Виски",
            gin:"Џин",
            rum:"Рум",
            liquor:"Ликер",
            brandy: "Коњак",
            softDrinks: "Негазирани пијалоци",
            fizzyDrinks: "Газирани пијалоци",
            iceCream: "Сладолед"
        },
        en: {
            cocktails: "Cocktails",
            wines: "Wines",
            beers: "Beers",
            vodka:"Vodka",
            whiskey:"Whiskey",
            gin:"Gin",
            rum:"Rum",
            liquor:"liquor",
            brandy:"brandy",
            softDrinks: "Soft Drinks",
            fizzyDrinks: "Fizzy Drinks",
            iceCream: "Ice Cream"
        }
    };

    return translations[language]?.[sub] || sub;
}

function showSubcategories(subcategories, parentCategory) {
    currentSubcategory = null;
    currentCategory = parentCategory;
    currentView = "category";

    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const subcategoryImages = {
        cocktails: "photos/alcoholic/cocktailsCover.jpg",
        wines: "photos/alcoholic/winesCover.jpg",
        beers: "photos/alcoholic/beersCover.jpg",
        vodka:"photos/alcoholic/vodkaCover.jpg",
        whiskey:"photos/alcoholic/whiskeyCover.jpg",
        rum:"photos/alcoholic/rumCover.jpg",
        liquor:"photos/alcoholic/liquorCpver.jpg",
        gin:"photos/alcoholic/ginCover.jpg",
        brandy:"photos/alcoholic/brandyCover.jpg",
        fizzyDrinks: "img/fz.jpg",
        softDrinks: "img/juices.jpg"
    };

    subcategories.forEach(sub => {
        const card = document.createElement("div");
        card.className = "card mb-3 card-small"; // користи CSS класа, не style

        const titleText = getSubcategoryTitle(sub).toUpperCase(); // сите букви големи

        card.innerHTML = `
            <img class="card-img-top" src="${subcategoryImages[sub]}" alt="${titleText}" loading="lazy" />
            <div class="card-body d-flex justify-content-center align-items-center" style="height: 5rem;">
                <h5 class="card-title fw-bold text-center">${titleText}</h5>
            </div>
        `

        card.onclick = () => {
            currentSubcategory = sub;
            currentView = "subcategory";
            showProductsOfSubcategory(sub);
        };

        categoryView.appendChild(card);
    });
}

const noImageSubcategories = [
    "vodka", "whiskey", "gin",
    "brandy", "liquor", "beers", "wines","rum","iceCream"
];

function showProductsOfSubcategory(subcategory) {
    currentSubcategory = subcategory;
    currentView = "subcategory";

    const sourceCategory = ["cocktails", "wines", "beers","vodka","whiskey","gin","rum","liquor","brandy"].includes(subcategory)
        ? "alcoholic"
        : "nonAlcoholic";


    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const items = products[sourceCategory][subcategory];


    if (noImageSubcategories.includes(subcategory)) {
        showSimpleList(subcategory);
    } else {
        renderProducts(items);
    }
}

function showSimpleList(subcategory) {
    currentSubcategory = subcategory;
    currentView = "subcategory";

    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let items;

     if(subcategory==="iceCream"){
        items=products.iceCream
    } else {
        items = products.alcoholic[subcategory];
    }

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "wine-item";

        div.innerHTML = `
            <div class="wine-title">${item.title[language]}</div>
            ${item.description ? `<div class="wine-description">${item.description[language]}</div>` : ""}
            <div class="wine-price">${item.price}</div>
        `;

        categoryView.appendChild(div);
    });
}
function renderProducts(items) {
    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card mb-3";

        card.innerHTML = `
            <img class="card-img-top" src="${item.image}" alt="${item.title[language]}" loading="lazy" />
            <div class="card-body">
                <h5 class="card-title fw-bold">${item.title[language]}</h5>
                ${item.description ? `<p class="card-text">${item.description[language]}</p>` : ""}
                <p class="price card-text">${item.price}</p>
            </div>
        `;
        categoryView.appendChild(card);
    });
}
document.getElementById("backBtn").onclick = () => {
    if (currentView === "subcategory" && currentSubcategory) {
        let subs = [];

        if (["cocktails", "wines", "beers","vodka","whiskey","gin","rum","liquor","brandy"].includes(currentSubcategory)) {
            currentCategory = "alcoholic";
            subs = ["cocktails", "wines", "beers","vodka","whiskey","gin","rum","liquor","brandy"];
        } else if (["softDrinks", "fizzyDrinks"].includes(currentSubcategory)) {
            currentCategory = "nonAlcoholic";
            subs = ["softDrinks", "fizzyDrinks"];
        }
        else if (currentSubcategory==="iceCream") {
            currentSubcategory = null;
            currentCategory = null;
            currentView = "main";
            showMain();
            return;
        }

        currentSubcategory = null;
        currentView = "category";
        showSubcategories(subs, currentCategory);
    } else if (currentView === "category") {
        showMain();
    }
};

changeLanguage(language);
