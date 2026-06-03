document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('[data-action]').forEach(el=>{
    el.addEventListener('click',()=>{
      const action = el.getAttribute('data-action');
      if(action === 'call'){ window.location.href = 'tel:9059090091'; }
      if(action === 'mail'){ window.location.href = 'mailto:droneography.india@gmail.com'; }
      if(action === 'book'){ window.location.href = '#contact'; }
    });
  });
});
