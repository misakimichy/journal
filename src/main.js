import { Entry } from './journal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();

    let title = $('#title').val();
    let inputBody = $('#body').val();
    let body = inputBody.split(' '); // split by words
    let letters = inputBody.split(''); // split by letters
    const currentEntry = new Entry (body, letters, inputBody);

    $(".title").text(title);
    $("#vowel").text(currentEntry.checkVowels());
    $("#consonant").text(currentEntry.checkConsonants());
    $('#first-sentence').text(currentEntry.getTeaser());
    $("#result").show();
  });
});
