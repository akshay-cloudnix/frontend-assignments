$(document).ready(function () {
  $('.list-group-item').click(function () {
    $('.list-group-item').removeClass('active');
    $(this).addClass('active');
    // Filtering logic can go here
  });

  $('.approve-action').click(function(e) {
    e.preventDefault();
    const card = $(this).closest('.card');
    const userName = card.find('strong').text();
    const approvalStatus = card.find('.approval-status');
    
    approvalStatus.html(`
      <span class="text-success fw-bold">Approved by <br/> ${userName}</span>
    `);
  });

  $('.deny-action').click(function(e) {
    e.preventDefault();
    const card = $(this).closest('.card');
    const userName = card.find('strong').text();
    const approvalStatus = card.find('.approval-status');
    
    approvalStatus.html(`
      <span class="text-danger fw-bold">Denied by <br/> ${userName}</span>
    `);
  });
});