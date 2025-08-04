  function handleApprove(btn) {
    const approver = "Supriya Sarode"; // Or dynamically get username
    const card = btn.closest(".card");
    const status = card.querySelector(".approval-status");
    const buttons = card.querySelector(".approval-buttons");

    // Hide buttons
    buttons.classList.add("d-none");

    // Show approved status
    status.innerHTML = `
    <div class="d-flex justify-content-between align-items-center w-100">
    <div class="app-data">
    <h6> <em> Approved by </em> </h6>
    <span class="name">${approver}</span>
    </div>
    <div class="approval-area position-relative">
    <span class="approval-text">
    <i class="bi bi-check-circle-fill"></i> Approved
    </span>
    <div class="dropdown-actions">
    <button onclick="handleDeny(this)">Deny</button>
    </div>
    </div>
    </div>
    `;

  }

  function handleDeny(btn) {
    const approver = "Supriya Sarode"; // Or dynamically get username
    const card = btn.closest(".card");
    const status = card.querySelector(".approval-status");
    const buttons = card.querySelector(".approval-buttons");

    // Show denied status
    status.innerHTML = `
    <div class="d-flex justify-content-between align-items-center w-100">
    
    <div class="app-data">
    <h6><em>Denied By</em></h6>
    <span class="name">${approver}</span>
    </div>
    <div class="approval-area position-relative">
    <span class="approval-text">
    <i class="bi bi-x-circle-fill"></i> Denied
    </span>
    <div class="dropdown-actions">
    <button onclick="handleApprove(this)">Approved </button>
    </div>
    </div>
    </div>
    `;


    // Show buttons again
    buttons.classList.add("d-none"); // Keep buttons hidden
  }

