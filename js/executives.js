const partnershipgallary = [
    {
        id:1,
        text:"Engr. Lewis Lawrence",
        content:"Executives Director/ CEO/  Lead Strategy Consultant",
        download:`<a href="../img/ex-1.jpeg" download="../img/ex-1.jpeg" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/ex-1.jpeg"
    },
    {
        id:2,
       text:"Engr Ekerema Ekanem",
       content:"Director, projects and programs",
        download:`<a href="../img/ex-2.jpeg" download="../img/ex-2.jpeg" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/ex-2.jpeg"
    },
    {
        id:3,
        text:"Chief Eze  D. Okechukwu",
        content:"Corporate and strategic partnerships Coordinator",
        download:`<a href="../img/ex-3.jpeg" download="../img/ex-3.jpeg" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/ex-3.jpeg"
    },
    {
        id:4,
       text:"PRINCESS DR. UDUAK ASUKWO AKPAN",
       content:" Naturopathic Physician",
        download:`<a href="../img/ex-4.jpeg" download="../img/ex-4.jpeg" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/ex-4.jpeg"
    },
    {
        id:5,
      text:" Princess Dr. Uduak Akpan",
      content:"Coordinator, Women and Youth Matters",
        download:`<a href="../img/ex-5.jpeg" download="../img/ex-5.jpeg" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/ex-5.jpeg"
    },

     {
        id:6,
      text:" ESV.Emmanuel Obot FNIVS, RSV,",
      content:"Executive Volunteer Partner",
        download:`<a href="../img/ex-6.jpeg" download="../img/ex-6.jpeg" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/ex-6.jpeg"
    },
     {
        id:7,
      text:" Mr Ifeanyichukwu Ndubusi Edmond",
      content:"A volunteer coordinator",
        download:`<a href="../img/ex-7.jpeg" download="../img/ex-7.jpeg" class=" btn btn-primary border-secondary rounded-pill py-3 px-5 mt-4">Download</a>`,
        img:"../img/ex-7.jpeg"
    }

]



const displaygallary = (() =>{
    let gallaryElement = document.querySelector(".gallery");

    partnershipgallary.map((gallary) =>{
        const {id, text,content, download, img} = gallary

        gallaryElement.innerHTML +=`
         <div class="col-lg-6 col-xl-4">
                        <div class="gallery-item wow fadeIn" data-wow-delay="0.1s">
                            <div class="overflow-hidden p-4 pb-0">
                                <img src=${img} class="img-fluid w-100 glightbox" alt="img">
                            </div>
                            <div class="p-2">
                                <p class="mb-0 text-center text-uppercase text-primary">${text}</p>
                              <p class="mb-0 text-center text-capitalize">${content}</p>
                            </div>
                        </div>
         </div>
        `

    })
})
displaygallary()