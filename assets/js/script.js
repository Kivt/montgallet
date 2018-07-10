var activeIndex = 3;
var shops = [
  {
    name: 'test shop', description: '-  Lorem ipsum dolor sit amet, consectetur adipisicing <br> elit.' +
    ' Minima laborum illum sint tenetur'
  },
  {
    name: 'test shop2', description: '-  Ipsum dolor sit amet, consectetur <br> lorem elit.' +
    ' Minima laborum illum sint tenetur magni perferendis sunt porro'
  },
  {
    name: 'test shop3', description: '-  Ipsum dolor sit amet, consectetur <br> lorem elit.' +
    ' Minima laborum illum sint tenetur magni perferendis sunt porro consequatur'
  },
  {
    name: 'Easy Multimedia', description: '- 30, rue Montgallet - 75012 <br> Paris' +
  'Spécialistes cartes mères et réparation express, un savoir faire à toutes épreuve'
  },
  {
    name: 'test shop5', description: '-  Lorem dolor sit amet <br> consectetur lorem elit.' +
    ' Minima laborum illum sint tenetur'
  },
  {
    name: 'test shop6', description: '-  consectetur dolor sit <br> amet, consectetur lorem elit.' +
    ' Minima laborum illum sint tenetur magni perferendis sunt'
  },
  {
    name: 'test shop7', description: '-  possimus dolor sit amet, consectetur <br> lorem elit.' +
    ' Minima laborum illum sint tenetur magni perferendis '
  }
];

$(function() {
  $('.carousel').slick({
    slidesToShow: 1,
    mobileFirst: true,
    arrows: true,
    nextArrow: '<img src="./assets/img/angle-right.svg" class="next-arrow">',
    prevArrow: '<img src="./assets/img/angle-right.svg" class="prev-arrow">',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
        variableWidth: true,
      }
    }]
  });

	$('.open-side-menu').on('click', function(e) {
    $('.side-menu').css('width', '70%');
    $('.main-content').css('margin-right', '70%');
  });

  $('.closebtn').on('click', function(e) {
    $('.side-menu').css('width', '0');
    $('.main-content').css('margin-right', '0');
  });

  $('.show-more-btn').on('click', function(e) {
    $('.hidden-details').css('display', 'flex');
    $(this).css('display', 'none');
  });

  $('.main-link').on('click', function(e) {
    var classToFind = $(this).attr('data-target');
    $('.' + classToFind).addClass('opened');
    $('.side-menu').css('transform', 'translateX(-15%)');
    $('.shadow').css('display', 'block');
  });

  $('.btn-back, .shadow').on('click', function(e) {
    $('.opened').removeClass('opened');
    $('.side-menu').css('transform', 'translateX(0)');
    $('.shadow').css('display', 'none');
  });

  $('.next-arrow').on('click', function(e) {
    activeIndex++;
    if (activeIndex > 6) {
      activeIndex = 0;
    }

    $('#paste-name').text(shops[activeIndex].name);
    $('#paste-desc').html(shops[activeIndex].description);
  });

  $('.drop-menu').on('click', function(e) {
    $(this).find('.list').toggleClass('d-none');
    $(this).toggleClass('arrow-turned');
  });

  $('.checkbox').change(function(e) {
    if (this.checked) {
      $('.item-to-remove').addClass('d-none');
    } else {
      $('.item-to-remove').removeClass('d-none');
    }

  });

  $('.prev-arrow').on('click', function(e) {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = 6;
    }

    $('#paste-name').text(shops[activeIndex].name);
    $('#paste-desc').html(shops[activeIndex].description);
  });
});
