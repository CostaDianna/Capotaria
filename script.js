$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");

});

$('.toggle').on('click', function() {
  $('.menu').toggleClass('expanded');
  $('span').toggleClass('hidden');
  $('.container , .toggle').toggleClass('close');
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop: true, // Ativa o loop do carrossel
      margin: 10, // Margem entre os itens
      nav: true, // Botões de navegação
      dots: true, // Bolinhas de navegação inferiores
      responsive: {
          0: { items: 1 }, // 1 item para telas pequenas
          600: { items: 2 }, // 2 itens para telas médias
          1000: { items: 3 } // 3 itens para telas grandes
      }
  });
});
