import { Entry } from './journal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();

    let title = $('#title').val();
    let body = $('#body').val().split('');
    const currentEntry = new Entry (title, body);

    $(".title").text(title);
    $("#vowel").text(currentEntry.checkVowels());
    $("#consonant").text(currentEntry.checkConsonants());
    $("#result").show();
  });
});
