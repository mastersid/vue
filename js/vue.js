'use strict';

var app = new Vue({
	el: '#message',
	data: {
		message: 'vue должен работать!',
		title: 'Страница открыта в ' + new Date().toLocaleString(),
		fill: true
	}
})
var list = new Vue({
	el: '#list',
	data: {
		services: [
			{text: 'Домен', price: '890 Р.'},
			{text: 'Хостинг', price: '1400 Р.'},
			{text: 'SSL', price: '1190 Р.'},
		]
	}
})

Vue.component('cart', {
	data: function () {
    return {
      summa: 0
    }
  },
  template: '<div class="cart" v-on:click="summa += 200"><span class="cart__sum">{{ summa }}</span> руб.</div>'
})

Vue.component('bbb', {
	data: function () {
    return {
      col: 0
    }
  },
  template: '<button v-on:click="col++">Нажата {{ col }} раз!</button>'
})

Vue.component('list-item', {
  props: ['list'],
  template: '<li>{{ list.id }} {{ list.title }} <small>{{ list.price }}</small></li>'
})
var upsales = new Vue({
	el: '#upsales',
	data: {
		list: [
			{id: '1', title: 'Парковка для домена', price: '118 Р.'},
			{id: '2', title: 'Web-переадресация', price: '118 Р.'},
			{id: '6', title: 'Сайт-визитка', price: '118 Р.'},
			{id: '4', title: 'Конструктор сайтов', price: '0 Р.'}
		]
	}
})