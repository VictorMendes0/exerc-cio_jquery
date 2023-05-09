
$(document).ready(function() {
    $('#form-tarefas').submit(function(event) {
      event.preventDefault(); // previne o comportamento padrão do formulário
  
      var nomeTarefa = $('#nome-tarefa').val();
      $('#nome-tarefa').val(''); // limpa o campo de texto
  
      var novaTarefa = '<li>' + nomeTarefa + '</li>';
      $('#lista-tarefas').append(novaTarefa); // adiciona a nova tarefa na lista
    });
  
    $('#lista-tarefas').on('click', 'li', function() {
      $(this).toggleClass('concluida'); 
    });
  });