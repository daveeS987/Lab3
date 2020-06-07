'use strict';

let page = 'Page1';
let sortType = 'horns';
let dataSource = './data/page-2.json';
let animalKeywordArr = [];

function HornedAnimal(animal) {
  this.title = animal.title;
  this.image_url = animal.image_url;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
}

//code referenced from Class-02 demo folder
// HornedAnimal.prototype.render = function () {
//   let $animalClone = $('.photo-template').clone();
//   $('section').append($animalClone);
//   $animalClone.find('h2').text(this.title);
//   $animalClone.find('img').attr('src', this.image_url);
//   $animalClone.find('alt').attr('alt', this.title);
//   $animalClone.find('p').text(this.description);
//   $animalClone.removeClass('photo-template');
//   $animalClone.attr('class', this.keyword);
//   console.log($('section'));
//   console.log('$animalClone :', $animalClone.html());
// }

//new function for Feature 2 Templating

let animalArr = [];

HornedAnimal.readJson = () => {
  if (page === 'Page1') {
    dataSource = './data/page-1.json';
  } else {
    dataSource = './data/page-2.json';
  }
  
  $.ajax(dataSource)
    .then(data => {
      let keywordsArr = new Set();
      data.forEach(item => {
        let animal = new HornedAnimal(item);
        keywordsArr.add(animal.keyword);
        animalArr.push(animal);
      });
      render(animalArr);
      generateDropDown(keywordsArr);
    });
  };
  console.log(animalArr);

function render (array){
  array.forEach(animal =>{
  let $template = $('#template').html();
  let rendered = Mustache.render($template, animal);
  $('section').append(rendered);
  });
};

function generateDropDown(array) {
  console.log('array inside generatedropdown', array);
  array.forEach(item => {
    $('.dropdown').append(`<option value ="${item}">${item}</option>`);
  });
}

let $dropdown = $('.dropdown');
$dropdown.on('change', filterKeywords);


function filterKeywords() {
  let choice = $(this).val();
  if (choice) {
    $('div').hide();
    $(`.${choice}`).fadeIn();
  }
}


let $pageDropDown = $('.pageOption');
$pageDropDown.on('change', pageHandler);

function pageHandler() {
  page = $(this).val();
  $('section').empty();
  $('.dropdown').empty();
  animalArr = [];
  $(() => HornedAnimal.readJson());

}

let $pageSort = $('.sortOption');
$pageSort.on('change', sortHandler);

function sortHandler() {
  sortType = $(this).val();
  $('section').empty();
    if(sortType === 'horns'){
      sortHorns(animalArr); 
    }
    else if (sortType === 'title'){
      sortTitle(animalArr);
    } 
  render(animalArr);
}

function sortHorns(array){
  array.sort((a,b) => {
    return a.horns - b.horns
  });

}

function sortTitle(array){
  array.sort((a,b) =>{
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    if (titleA < titleB){
      return -1;
    }
    if (titleA > titleB){
      return 1;
    }
    return 0;
  });
console.log(animalArr);
}


$(() => HornedAnimal.readJson());
