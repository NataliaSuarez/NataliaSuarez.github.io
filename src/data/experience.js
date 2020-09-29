const experience = [
  {
    "id":"10",
    "date": "Sept 2020",
    "position": "FULL STACK DEVELOPER",
    "name": "Consultoría de Sist. Ingresos, Municipalidad Alte. Brown",
    "tech": ["Symfony5","Mysql","Docker"],
    "data": "Aún no tiene descripción."
  },
  {
    "id":"9",
    "date": "Aug 2020",
    "position": "FULL STACK JAVASCRIPT DEVELOPER",
    "name": "Análisis Comercial BI, Cambá Cooperativa",
    "tech": ["ReactJs","Feathers","MongoDB"],
    "data": "The application is an administration and management platform with the purpose of centralizing information on workers' occupation, project receipts and monthly expenses, to quickly offer a summary to those who require this information through a dashboard with the corresponding graphics. During development I’ve taken tasks to improve data loading through forms and list display with more information on the frontend side, many times modifying or adding API endpoints."
  },
  {
    "id":"8",
    "date": "Jul 2020 - Ago 2020",
    "position": "BACKEND JAVASCRIPT DEVELOPER",
    "name": "Seguimos Educando, educ.ar",
    "tech": ["ReactJs","Feathers","MongoDB", "Docker"],
    "data":"Seguimos Educando is a project consisting of a mobile application, an admin site and an REST-API for requests about classes, booklets and events. The project was finished in 2 weeks with a ReactJs and it provides 7 services with CRUD, I developed it using Node and Feathers Js library. The applications main goal is the students and families are able to access the education content of educ.ar program using the app. The information fetched by the application is uploaded and updated with an admin site. The admin has 2 different ways to upload data, using forms for each model or usign a csv files, that allows to add multiple entries on a single step. The site also provides different roles: Admin and Editor. Each one can make CRUD actions in the models entities. The Admin permissions include the ability to change users information. The application is available in Google Play for users in Argentina." 
  },
  {
    "id":"7",
    "date": "Jun 2020",
    "position": "BACKEND DEVELOPER",
    "name": "Agencia Virtual, INTA",
    "tech": ["Symfony","Javascript"],
    "data": "Agencia Virtual is a management system for user requests that made from Mobile Application. From the system you can view and answer to queries having the possibility of carrying out different actions based on the permissions, also counting with filters and a search engine. The system was developed in Symfony 3 with the incorporation of javascript libraries to improve the visualization of tables and maps. The main changes made in this stage were the incorporation of pagination to improve the performance of the administration site along with the modification of the queries model to redefine filters made from the backend. The paging along with the new filters was done by defining new queries in the main symfony system repositories and controllers. The changes made were tested in the staging and production environments."
  },
  {
    "id":"6",
    "date": "Jun 2019 - Jul 2020",
    "position": "Equipo Proyectos Llave en Mano",
    "name": "Proyectos Llave en Mano, Cambá Coop de Software",
    "tech": [],
    "data": "Management of a new development area which offers software solutions to client needs. The projects involved usually require to build software from scratch.The client presents requirements that are analised for a vague estimation. If the estimation is accepted requirements are estimated in detail before negotiations start, until a pre-kickoff agreement is reached. I’m responsible for creating and solving tasks, give technical counsel to team members, keep track of sprints and deadlines and attend to client meetings."
  },
  {
    "id":"5",
    "date": "Ene 2020",
    "position": "FULL STACK DEVELOPER",
    "name": "Radio App Mobile, La Minga",
    "tech": ["Vue Native Script","Firebase","Django"],
    "data": "Radios App is a collective financing project that proposes the implementation of mobile applications for radios, configured through an administrator and based on a generic application released by Cambá. The application has different sections: live transmission, programming according to the day and time, list of podcasts, communication with the radio (via email or WhatsApp) and a section to share on social networks; It has the ability to send push notifications through Firebase and was developed in Vue Native Script. On the other hand, the administrator has different user levels. As an administrator, there is the possibility of configuring the application, both UI elements and necessary requirements for uploading to stores such as the Play Store, while the publisher users carry out the ABM of programs and podcasts on their radio. This manager was developed with Django and has an API-Rest which is consumed by the application. At this stage, the implementation was carried out for Radio La Minga (Córdoba, Argentina), which included tasks of surveying the necessary information and configuration through the administrator, and also backend tasks related to the incorporation of necessary data, such as the palette of colors to be used according to the brand identity of the radio or modification of restrictions according to sizes of graphic pieces. In addition, the handling of errors related to intermittence in the live transmission, typical of the service used by La Minga, was incorporated. Finally, the publication was made in the Play Store."
  },
  {
    "id":"4",
    "date": "Dic 2019",
    "position": "FULL STACK DEVELOPER",
    "name": "A church near you, The Developer Society",
    "tech": ["Django","Javascript","CSS"],
    "data": "A Church Near You is a Django based platform where people would find churches and events in England. This is one of three platforms (The Archbishop of Canterbury, The Archbishop of York). This platform was intended to be used by users with different roles. A church would create a homepage and start uploading news to their feed, where users would leave messages or propose themselves as editors or mainteiners of that page. Other users would have privileges to setup events and program notifications, where others would just validate the content to make it visible.This platform had around 20 custom django modules (apps). The job involved implementing styles for new content in the modules."
  },
  {
    "id":"3",
    "date": "Aug 2019 - Nov 2019",
    "position": "BACKEND DEVELOPER",
    "name": "Admin Radios App, Cambá Coop",
    "tech": ["Django","Django REST"],
    "data": "Project to manage the mobile applications of Radios carried out under the Radios App project. These applications have different sections, including live streaming, viewing of programming and the possibility of listening to podcasts on demand. The administrator, together with the App, are part of a collective financing project that aims to facilitate and provide customizable generic applications to radios, promoting cultural diffusion and local development. The Manager was developed in Django and includes ABM and API-REST of 3 main models: Radio, Shows, Podcasts and others of less complexity. It also has different levels of users capable of performing actions based on their permissions. The project included management tasks and manuals for proper use by users."
  },
  {
    "id":"2",
    "date": "Jul 2019",
    "position": "FRONTEND DEVELOPER",
    "name": "Landing Accesibilidad Digital, ADC",
    "tech": ["Javascript","CSS","HTML"],
    "data": "Web Development of a Landing-page on Web Accessibility for ADC (Association for Civil Rights). The project was carried out inter-cooperatively (designed by El Maizal Coop) and was tested using different tools to verify accessibility according to WCAG AAA standards. ZoomIn-ZoomOut layout, layout implementation and functionality tasks were performed using html, css and javascript. Prior to the layout, an investigation was carried out on digital accessibility in terms of programming."
  },
  {
    "id": "1",
    "date": "Jun 2019",
    "position": "FULLSTACK DEVELOPER",
    "name": "Web Site, Cambá Coop",
    "tech": ["Vue.js", "PHP"],
    "data": "Company presentation website custom designed using javascript libraries and developed using Vue.js. The work consisted of repairing PHP script for sending emails and implementing new sections within the page oriented to search for partners and collective financing projects. The work carried out involved custom design, element creation and code refactoring."
  },
  {
    "id":"0",
    "date": "Oct 2018 - May 2019",
    "position": "BACKEND DEVELOPER",
    "name": "Sistema de solicitudes y documentos, Municipalidad Alte. Brown",
    "tech": ["Symfony","Javascript"],
    "data": "The system started from the implementation of Request forms for different types of Subsidies, to which different stages were added to cover functionalities such as the incorporation and selection of generic templates according to the area involved, incorporation of steps and areas for the selection of requests, loading and download of attachments in different formats according to type of request, different flows for selection and completion of requests.The development was carried out in sprits through the analysis of functionalities, with implementation, testing and quality analysis. In addition, the model was documented according to UML and flow of functionalities. The project was developed using Symfony 4 with its Twig template engine and adding specific Javascript libraries such as Datatable, Datepicker, among others."
  }
]

export default experience;