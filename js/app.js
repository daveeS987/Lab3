'use strict';

function HornedAnimal(animal) {
    this.title = animal.title;
    this.image_url = animal.image_url;
    this.description = animal.description;
    this.keyword = animal.keyword;
    this.horns = animal.horns;
  }

//code referenced from Class-02 demo folder
  HornedAnimal.prototype.render = function(){
      let $animalClone = $('.photo-template').clone();
      $('main').append($animalClone);
      $animalClone.find('h2').text(this.title);
      $animalClone.find('img').attr('src', this.image_url);
      $animalClone.find('alt').attr('alt', this.title);
      $animalClone.find('p').text(this.description);
      $animalClone.removeClass('photo-template');
      $animalClone.attr('class', this.keyword);      
    }
    
    
    let animalKeywordArr = [];
    
    HornedAnimal.readJson = () => {  
      $.ajax('./data/page-1.json')
      .then(data => {
        let keywordsArr = new Set(animalKeywordArr);
        data.forEach(item => {
          let animal= new HornedAnimal(item);
          //console.log(animal);
          keywordsArr.add(animal.keyword);
          animal.render();
        });
        $('.photo-template').remove();
        
        generateDropDown(keywordsArr);
      });
    };
    
    $(() => HornedAnimal.readJson());
    

  function generateDropDown (array){
    array.forEach( item =>{
    $('select').append(`<option value ="${item}">${item}</option>`);
    });
  }

  let $dropdown = $('.dropdown');
  $dropdown.on('change', filterKeywords);

  function filterKeywords(){
    let choice = $(this).val();
    if (choice){
      $('section').hide();
      $(`.${choice}`).fadeIn();
    }

  }



// console.log(animalKeywordArr);
//console.log(keywordsArr);


//render menu options based off the keywordarray.  We are using 
//the duplicate array until we can debug our Set method.
//
//create an option tag in the dropdown select



  
  