function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="bi bi-star${i <= rating ? '-fill text-warning' : ' text-muted'}"></i>`;
  }
  return stars;
}

$(document).ready(function () {
  const $container = $('#feedback-cards');
  feedbackData.forEach((item, index) => {
    const isLastCard = index === feedbackData.length - 1;
    const denyClass = isLastCard ? 'btn btn-outline-primary btn-sm btn-deny' : 'btn btn-outline-primary btn-sm';
    const approveClass = isLastCard ? 'btn btn-primary btn-sm btn-aproveal' : 'btn btn-primary btn-sm';

    let actionsHtml = '';
    if (item.actions.length > 0) {
      actionsHtml = `
        <div class="d-flex justify-content-end gap-2 mt-3">
          <button class="${denyClass}">${item.actions[0]}</button>
          <button class="${approveClass}">${item.actions[1]}</button>
        </div>
      `;
    }

    const cardHtml = `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card p-4 h-100">
          <div class="d-flex justify-content-between align-items-start">
            <h6 class="mb-1 task-text">${item.title}</h6>
            ${item.rating > 0 ? `<div class="start-text">${generateStars(item.rating)}</div>` : ''}
          </div>
          <div class="mb-2">
            <span class="badge me-1 tags">${item.tag}</span>
            <span class="badge me-1 skills">${item.skill}</span>
          </div>
          <div class="feedback-content mb-2 text-muted small">
            ${item.description}
          </div>
          <div class="d-flex align-items-center gap-2 mb-3 mt-3 userDetails">
            <img src="${item.avatar}" class="rounded-circle" width="32" height="32" alt="user">
            <div>
              <div class="small fw-semibold">${item.user}</div>
              <div class="small text-muted">${item.role}</div>
            </div>
          </div>
          <div class="pt-1 mt-1 border-top">
            ${actionsHtml}
          </div>
        </div>
      </div>
    `;
    $container.append(cardHtml);
  });
});
