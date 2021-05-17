import Vue from 'vue'

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}.${month + 1}.
  ${day}`;
}

Vue.filter('date', dateFilter)
