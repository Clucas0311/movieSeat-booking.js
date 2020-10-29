const container = document.querySelector('.container');
const seats = document.querySelector('.row.seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

const ticketPrice = +movieSelect.value;
