
    document.addEventListener('DOMContentLoaded', function() {
        initializeDropdowns();
        initializeButtons();
  
        initializeResponsiveBehavior();
    });

    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;
     stars.forEach((star,index)=>{
        star.addEventListener('click',()=>{
            selectedRating=index+1;
            updateStars();
            console.log("selected ratings",selectedRating);
        });
     });

     function updateStars(){
        stars.forEach((star,index)=>{
            star.setAttribute('fill', index < selectedRating ?  '#fbbf24' : '#d1d5db')
        });
     }


      document.getElementById("toggleButton").addEventListener("click", function () {
  document.querySelector(".dashboard__main").classList.toggle("horizontal");
});










    
    function initializeDropdowns() {
        const dropdownToggles = document.querySelectorAll('.status-dropdown__toggle');
        
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                const dropdown = this.closest('.status-dropdown');
                const menu = dropdown.querySelector('.status-dropdown__menu');
                
                document.querySelectorAll('.status-dropdown__menu').forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.style.display = 'none';
                    }
                });
                
                if (menu) {
                    const isVisible = menu.style.display === 'block';
                    menu.style.display = isVisible ? 'none' : 'block';
                }
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.status-dropdown')) {
                document.querySelectorAll('.status-dropdown__menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        });
        
        document.querySelectorAll('.status-dropdown__item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const dropdown = this.closest('.status-dropdown');
                const toggle = dropdown.querySelector('.status-dropdown__toggle');
                const menu = dropdown.querySelector('.status-dropdown__menu');
                
                dropdown.querySelectorAll('.status-dropdown__item').forEach(dropdownItem => {
                    dropdownItem.classList.remove('status-dropdown__item--active');
                });
                this.classList.add('status-dropdown__item--active');
                
                const action = this.textContent.trim();
                if (action === 'Approved') {
                    toggle.className = 'status-dropdown__toggle status-dropdown__toggle--approved';
                    toggle.innerHTML = '<i class="fas fa-check-circle"></i> Approved by Arjun Paniyan <i class="fas fa-chevron-down"></i>';
                } else if (action === 'Deny') {
                    toggle.className = 'status-dropdown__toggle status-dropdown__toggle--denied';
                    toggle.innerHTML = '<i class="fas fa-times-circle"></i> Denied by Anbu <i class="fas fa-chevron-down"></i>';
                }
                
                menu.style.display = 'none';
            });
        });
    }
    function initializeButtons() {
        document.querySelectorAll('.btn--approve').forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.feedback-card');
                const actions = card.querySelector('.feedback-card__actions');
                
                actions.innerHTML = `
                    <div class="feedback-card__status">
                        <div class="status-dropdown">
                            <button class="status-dropdown__toggle status-dropdown__toggle--approved">
                                <i class="fas fa-check-circle"></i>
                                Approved by Arjun Paniyan
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="status-dropdown__menu" style="display: none;">
                                <div class="status-dropdown__item status-dropdown__item--active">Approved</div>
                                <div class="status-dropdown__item">Deny</div>
                            </div>
                        </div>
                    </div>
                `;
                
                initializeDropdowns();
            });
        });
        
        document.querySelectorAll('.btn--deny').forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.feedback-card');
                const actions = card.querySelector('.feedback-card__actions');
                
                actions.innerHTML = `
                    <div class="feedback-card__status">
                        <div class="status-dropdown">
                            <button class="status-dropdown__toggle status-dropdown__toggle--denied">
                                <i class="fas fa-times-circle"></i>
                                Denied by Anbu
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="status-dropdown__menu" style="display: none;">
                                <div class="status-dropdown__item">Approved</div>
                                <div class="status-dropdown__item status-dropdown__item--active">Deny</div>
                            </div>
                        </div>
                    </div>
                `;
                
                initializeDropdowns();
            });
        });
        
     
        const summarizeBtn = document.querySelector('.header__summarize-btn');
        if (summarizeBtn) {
            summarizeBtn.addEventListener('click', function() {
             
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Summarizing...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-chart-bar"></i> Summarize';
                    this.disabled = false;
                    
                    console.log('Summary generated');
                }, 2000);
            });
        }
    }
    
    
    function initializeResponsiveBehavior() {
     
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                handleResize();
            }, 250);
        });
        
        
        handleResize();
    }
    
    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        const sidebar = document.querySelector('.dashboard__sidebar');
        const main = document.querySelector('.dashboard__main');
        
        if (isMobile) {
           
            if (sidebar) {
                sidebar.style.position = 'static';
            }
        } else {
            
            if (sidebar) {
                sidebar.style.position = 'relative';
            }
        }
    }
    