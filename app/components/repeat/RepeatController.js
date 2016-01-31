var app = angular.module('angularPlayground');

app.controller('RepeatController', RepeatController);

function RepeatController(){
  
  this.repeatStatus = 'Working';

	this.data = [{"title":"Incredible Hulk (1962) #187","date":"1975-05-10T04:00:00.000Z","url":"http://i.annihil.us/u/prod/marvel/i/mg/6/90/529369cfa41c4.jpg","link":"http://marvel.com/comics/issue/8998/incredible_hulk_1962_187?utm_campaign=apiRef&utm_source=fe877c0bf61f995fc8540d9eac4704f1"},{"title":"Thor (1966) #277","date":"1978-11-10T05:00:00.000Z","url":"http://i.annihil.us/u/prod/marvel/i/mg/c/30/50ad91a385bef.jpg","link":"http://marvel.com/comics/issue/11605/thor_1966_277?utm_campaign=apiRef&utm_source=fe877c0bf61f995fc8540d9eac4704f1"},{"title":"Fantastic Four (1961) #22","date":"1964-01-10T05:00:00.000Z","url":"http://i.annihil.us/u/prod/marvel/i/mg/3/00/536d623d2811b.jpg","link":"http://marvel.com/comics/issue/13028/fantastic_four_1961_22?utm_campaign=apiRef&utm_source=fe877c0bf61f995fc8540d9eac4704f1"},{"title":"Howard the Duck (1976) #11","date":"1977-04-10T05:00:00.000Z","url":"http://i.annihil.us/u/prod/marvel/i/mg/1/d0/4bb5ea62edcd1.jpg","link":"http://marvel.com/comics/issue/21098/howard_the_duck_1976_11?utm_campaign=apiRef&utm_source=fe877c0bf61f995fc8540d9eac4704f1"},{"title":"Captain America (1968) #411","date":"1993-01-10T05:00:00.000Z","url":"http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5294ece51400b.jpg","link":"http://marvel.com/comics/issue/7792/captain_america_1968_411?utm_campaign=apiRef&utm_source=fe877c0bf61f995fc8540d9eac4704f1"},{"title":"Amazing Spider-Man (1963) #213","date":"1981-02-10T05:00:00.000Z","url":"http://i.annihil.us/u/prod/marvel/i/mg/c/03/525c42e720969.jpg","link":"http://marvel.com/comics/issue/6609/amazing_spider-man_1963_213?utm_campaign=apiRef&utm_source=fe877c0bf61f995fc8540d9eac4704f1"}]
  
}