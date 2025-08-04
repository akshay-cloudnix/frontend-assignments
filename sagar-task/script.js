$(document).ready(function () {
  const feedbackData = [
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "In todays rapidly evolving software landscape, modern applications are built with scalability, maintainability, and performance at their core. Most contemporary systems adopt a microservices-based architecture, which allows developers to decouple functionalities into independent services",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "This not only simplifies deployment but also makes scaling and debugging more manageable. Each microservice can be written in a language or framework best suited for its task—commonly Node.js, Python, Go, or Java.",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "Version control systems like Git, paired with platforms such as GitHub or GitLab, are central to team collaboration. Developers push code changes to feature branches, which are then merged through pull requests after code reviews. Continuous integration and continuous deployment (CI/CD) pipelines automate testing, linting, and deployment processes. Tools like Jenkins, GitHub Actions, and CircleCI are commonly used to automate these workflows",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "On the frontend, developers frequently use component-based frameworks like React, Vue, or Angular, which enable modular development and efficient rendering",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "CSS frameworks such as Tailwind CSS or Bootstrap provide pre-defined utility classes to accelerate UI development. On the backend, REST APIs or GraphQL are used to communicate with the frontend, often secured via JWT or OAuth authentication mechanisms",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "Databases vary depending on the use case—PostgreSQL and MongoDB are popular choices for structured and unstructured data respectivel",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "Cloud platforms such as AWS, Azure, or Google Cloud offer managed services, making infrastructure management more accessible",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "Automated testing using Jest, Mocha, or Selenium ensures that code behaves as expected. Logging, monitoring, and alerting are integrated using tools like Prometheus, Grafana, and ELK stack. Altogether, modern software development is a harmonious blend of architecture, automation, coding practices, and constant feedback.",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
    {
      app: "TaskMaster",
      tags: ["#TO01", "UI/UX"],
      text: "Navigation bar is confusing...",
      user: "Steward Ice",
      profile: "https://i.pravatar.cc/30?img=1",
    },
  ];

  feedbackData.forEach((fb, i) => {
    const cardId = `card-${i}`;
    const tagHtml = fb.tags
      .map((tag, index) => {
        let extraClass = "";
        if (index === 0) extraClass = "First_tag";
        else if (index === 1) extraClass = "badge tag-gap second_tag";

        let html = `<span class="me-1 ${extraClass}">${tag}</span>`;
        if (index === 1) {
          html += `<span style="color:gold; font-size: 18px; margin-left: 93px;">★★★★☆</span>`;
        }
        return html;
      })
      .join("");

    const html = `
      <div class="col-md-4 mb-4">
        <div class="card h-100" id="${cardId}">
          <div class="card-header bg-white border-0 pb-0">
            <h6 class="fw-bold mb-1">${fb.app}</h6>
            <div class="tags mb-2">${tagHtml}</div>
          </div>
          <div class="card-body pt-0">
            <p class="mt-2 mb-0 text">${fb.text}</p>
          </div>
          <div class="card-footer bg-white border-0 pt-0">
            <div class="d-flex align-items-center mb-2 border-bottom pb-2" style="border-color: #F2F5FA;">
              <img src="${fb.profile}" alt="profile" class="rounded-circle me-2" style="width: 34px; height: 34px;">
              <div>
                <small class="text-muted d-block Name">${fb.user}</small>
                <small class="text-muted d-block Title">${fb.app} Testing</small>
              </div>
            </div>
            <div class="button-group">
              <button class="btn deny-btn">Deny</button>
              <button class="btn approve-btn">Approve</button>
            </div>
          </div>
        </div>
      </div>
    `;
    $("#feedback-list").append(html);
  });

  function generateStatusDropdown(type) {
    const isApproved = type === "approved";
    return `
      <div class="d-flex justify-content-between align-items-center w-100">
        <div class="Approved_text">${isApproved ? "Approved" : "Denied"} by Ambu</div>
        <div class="dropdown">
          <button class="btn btn-outline-${isApproved ? "success" : "danger"} btn-sm d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-${isApproved ? "check" : "x"}-circle-fill me-1"></i>
            ${isApproved ? "Approved" : "Denied"}
            <i class="bi bi-caret-down-fill ms-1"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item approved-item dropdown_approved_text" href="#">Approved</a></li>
            <li><a class="dropdown-item denied-item" href="#">Denied</a></li>
          </ul>
        </div>
      </div>
    `;
  }

  // Approve button click
  $("#feedback-list").on("click", ".approve-btn", function () {
    const cardFooter = $(this).closest(".card-footer");
    cardFooter.find(".button-group").replaceWith(generateStatusDropdown("approved"));
  });

  // Deny button click
  $("#feedback-list").on("click", ".deny-btn", function () {
    const cardFooter = $(this).closest(".card-footer");
    cardFooter.find(".button-group").replaceWith(generateStatusDropdown("denied"));
  });

  // Dropdown > Approved selected
  $(document).on("click", ".dropdown-menu .approved-item", function () {
    const dropdownWrapper = $(this).closest(".dropdown").parent();
    dropdownWrapper.replaceWith(generateStatusDropdown("approved"));
  });

  // Dropdown > Denied selected
  $(document).on("click", ".dropdown-menu .denied-item", function () {
    const dropdownWrapper = $(this).closest(".dropdown").parent();
    dropdownWrapper.replaceWith(generateStatusDropdown("denied"));
  });
});
