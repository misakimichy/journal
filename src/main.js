import { journal } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $('#jounal-form').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = journal(goal);
    output.forEach(function(element) {
    $('#solution').append("<li>" + element + "</li>");
    });
  });
});
