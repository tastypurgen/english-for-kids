import renderCategories from './renderCategories';
import burgerHandler from './burgerHandler';
import gameMode from './gameMode';

// TODO:
// ссылка на текущую страницу внешне отличается от остальных
// скрывать лишние звездочки
// сделать предзагрузку mp3: wrong card/right card
// Dependency cycle via ./renderWordsSet:3 at runGame.js

gameMode();
burgerHandler();
renderCategories();
