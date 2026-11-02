const courses = [
  {type:'business', name:'Business & Management', meta:'Certificates & diplomas', desc:'Build your understanding of leadership, enterprise and the decisions that move organisations forward.', symbol:'↗', items:['Certificate in Business Management','Certificate in Business Administration','Diploma in Business Management','Diploma in Digital Marketing','Diploma in Project Management','Certificate in Entrepreneurship']},
  {type:'technology', name:'Information Technology', meta:'Certificates & diplomas', desc:'Explore the technologies shaping our world, from artificial intelligence to software and cloud computing.', symbol:'</>', items:['Certificate in Artificial Intelligence','Certificate in Data Analytics','Diploma in Full Stack Development','Diploma in Software Development','Certificate in Cybersecurity','Diploma in Cloud Computing']},
  {type:'proposed', name:'Undergraduate & Postgraduate', meta:'Proposed programmes', desc:'Discover our ambition for future degree pathways in business, management and technology.', symbol:'◎', items:['Proposed undergraduate: BBA, BA Business Management, BSc Computer Science, BSc Information Technology','Proposed postgraduate: MBA, MSc International Business, MSc Project Management, MSc Artificial Intelligence, MSc Data Analytics, MSc Information Technology']}
];

const dialog = document.querySelector('#info');

function show(title, html) {
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-content').innerHTML = html;
  dialog.showModal();
  document.body.classList.add('modal-open');
}

function close() {
  dialog.close();
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.close, .close-bottom').forEach((b) => b.onclick = close);
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close();
  }
});

const categories = [
  {type:'business', name:'Business Management', label:'Business Management', pill:'BUSINESS', desc:'Leadership, strategy and business growth.', image:'business.jpg', kicker:'Professional development', items:courses[0].items},
  {type:'technology', name:'Information Technology', label:'Information Technology', pill:'TECHNOLOGY', desc:'Build in-demand technical skills for a digital world.', image:'technology.jpg', kicker:'Professional development', items:courses[1].items},
  {type:'certificate', name:'Certificate Programmes', label:'Certificate Programmes', pill:'CERTIFICATE', desc:'Short-term, practical and industry-focused learning.', image:'certificate.jpg', kicker:'Career readiness', items:courses.slice(0, 2).flatMap(c => c.items).filter(x => x.startsWith('Certificate'))},
  {type:'diploma', name:'Diploma Programmes', label:'Diploma Programmes', pill:'DIPLOMA', desc:'Skill-based programmes with real-world application.', image:'diploma.jpg', kicker:'Career readiness', items:courses.slice(0, 2).flatMap(c => c.items).filter(x => x.startsWith('Diploma'))},
  {type:'proposed', name:'Proposed Degree & PG Programmes', label:'Proposed Degree & PG Programmes', pill:'DEGREE', desc:'Upcoming', image:'degrees.jpg', kicker:'Academic pathways', items:courses[2].items}
];

function render(filter = 'all') {
  document.querySelector('#courses').innerHTML = categories
    .filter((c) => filter === 'all' || c.type === filter)
    .map((c) => `
      <button class="programme-tile ${c.type}" data-course="${c.type}" aria-label="Explore ${c.label}">
        <img src="assets/${c.image}" alt="${c.label}" loading="lazy">
        <span class="tile-shade"></span>
        <span class="tile-pill">${c.pill}</span>
        <span class="tile-copy">
          <strong>${c.name}</strong>
          <span class="tile-description">${c.desc}</span>
        </span>
      </button>
    `)
    .join('');

  document.querySelectorAll('[data-course]').forEach((b) => {
    b.onclick = () => {
      const c = categories.find((item) => item.type === b.dataset.course);
      show(c.label, `<ul>${c.items.map((x) => `<li>${x}</li>`).join('')}</ul><p>${c.type === 'proposed' ? 'These programmes are proposed only. They are subject to formal university partnerships and academic approvals and are not open for applications.' : 'Course availability, duration, entry requirements, fees and awarding institution details will be confirmed before applications open.'}</p>`);
    };
  });
}

render();

document.querySelectorAll('[data-filter]').forEach((b) => {
  b.onclick = () => {
    document.querySelectorAll('[data-filter]').forEach((x) => {
      x.classList.toggle('active', x === b);
      x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
    });
    render(b.dataset.filter);
  };
});

const messages = {
  lms: ['GRO learning platform', 'The official GRO LMS login link has not yet been provided. Direct student access will be available here once the school confirms its learning platform URL.'],
  support: ['Student support', 'GRO student support covers course guidance, admissions, academic enquiries, technical assistance and fee enquiries. Official email and WhatsApp contact details will be added here once confirmed by the school.'],
  admission: ['Your next chapter starts here', 'Explore our programme categories to find your direction. The admissions application service is not connected yet. Application dates, requirements, fees and official contact details will be published once confirmed.'],
  partner: ['Build an academic partnership', 'GRO Business School UK Ltd is actively exploring online degree delivery, academic validation, credit transfer, student recruitment and joint programmes. The partnership enquiry service and official contact details are awaiting confirmation. No existing university partnership is implied.']
};

document.querySelectorAll('[data-info]').forEach((b) => {
  b.onclick = () => {
    const m = messages[b.dataset.info];
    show(m[0], `<p>${m[1]}</p>`);
  };
});

const menu = document.querySelector('.menu');
menu.onclick = () => {
  const open = document.querySelector('#navigation').classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
};

document.querySelectorAll('#navigation a').forEach((a) => {
  a.onclick = () => {
    document.querySelector('#navigation').classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };
});

document.querySelector('#year').textContent = new Date().getFullYear();

const professionalCourses = [
  {name:'Business Management', area:'BUSINESS & MANAGEMENT', label:'Business', image:'business.jpg', description:'Explore the principles behind effective leadership, strategy and business growth.'},
  {name:'Full Stack Development', area:'INFORMATION TECHNOLOGY', label:'Technology', image:'technology.jpg', description:'Explore how front-end and back-end technologies work together to create web applications.'},
  {name:'Project Management', area:'BUSINESS & MANAGEMENT', label:'Business', image:'business.jpg', description:'Discover approaches to planning, organising and delivering projects.'},
  {name:'Artificial Intelligence', area:'INFORMATION TECHNOLOGY', label:'Technology', image:'technology.jpg', description:'Explore artificial intelligence concepts and their applications in a changing digital world.'},
  {name:'Business Administration', area:'BUSINESS & MANAGEMENT', label:'Business', image:'business.jpg', description:'Build your understanding of business operations and organisational practices.'},
  {name:'Data Analytics', area:'INFORMATION TECHNOLOGY', label:'Technology', image:'technology.jpg', description:'Explore how data can be interpreted and used to inform decisions.'},
  {name:'Entrepreneurship', area:'BUSINESS & MANAGEMENT', label:'Business', image:'business.jpg', description:'Discover the thinking behind developing ideas and building a business.'},
  {name:'Cybersecurity Fundamentals', area:'INFORMATION TECHNOLOGY', label:'Technology', image:'technology.jpg', description:'Explore foundational approaches to protecting digital information and systems.'},
  {name:'Human Resource Management', area:'BUSINESS & MANAGEMENT', label:'Business', image:'business.jpg', description:'Explore the role of people, teams and organisational development in the workplace.'},
  {name:'Digital Marketing', area:'BUSINESS & MANAGEMENT', label:'Business', image:'business.jpg', description:'Discover how digital channels connect brands with their audiences.'}
];

const professionalList = document.querySelector('#professional-list');
if (professionalList) {
  const renderProfessionalCards = (count) => {
    professionalList.innerHTML = professionalCourses
      .slice(0, count)
      .map((item) => `
        <article class="professional-course" tabindex="0">
          <div class="professional-photo">
            <img src="assets/${item.image}" alt="" loading="lazy">
            <span class="professional-badge">${item.label}</span>
            <span class="professional-photo-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <rect x="5" y="10" width="22" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/>
                <path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M13 16v3h6v-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <div class="professional-card-content">
            <span class="professional-card-label">PROFESSIONAL DEVELOPMENT</span>
            <h3 class="professional-card-title">${item.name}</h3>
            <p class="professional-card-description">${item.description}</p>
            <div class="professional-card-link">
              <span>Explore course</span>
              <span class="professional-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M7 25 25 7M11 7h14v14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </article>
      `)
      .join('');
  };

  renderProfessionalCards(8);

  const viewMore = document.querySelector('#view-more-courses');
  if (viewMore) {
    let expanded = false;
    viewMore.addEventListener('click', () => {
      expanded = !expanded;
      renderProfessionalCards(expanded ? professionalCourses.length : 8);
      viewMore.setAttribute('aria-expanded', String(expanded));
      viewMore.innerHTML = expanded ? 'Show less <span aria-hidden="true">−</span>' : 'View more courses <span aria-hidden="true">＋</span>';
    });
  }
}
