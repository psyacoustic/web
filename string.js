var phrase = `мастер-канал уходил в фидбек из за тупорылой комутации и никак не реализованной системы защиты ушей и мониторов от перегрузки на выходе`;
var s = `и`;

function counter(str) {
  var counter = 0;
  for (var i = 0; i <= str.length; i++) {
    if (str[i] == s) counter++;
  }
  console.log(`${counter} letters in phrase.`);
}


counter(phrase);
