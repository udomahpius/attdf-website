const partnershipItem = [
  {
    id: 1,
    download: `<a href="../img/attdf-1.jpg" download="../img/attdf-1.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-1.jpg",
  },
  // {
  //     id:2,
  //     download:`<a href="../img/attdf-1.jpg" download="../img/attdf-1.jpg" class="text-white">Download</a>`,
  //     img:"../img/attdf-2.jpg"
  // },
  {
    id: 3,
    download: `<a href="../img/attdf-3.jpg" download="../img/attdf-3.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-3.jpg",
  },
  {
    id: 4,
    download: `<a href="../img/attdf-4.jpg" download="../img/attdf-4.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-4.jpg",
  },
  {
    id: 5,
    download: `<a href="../img/attdf-5.jpg" download="../img/attdf-5.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-5.jpg",
  },
  {
    id: 6,
    download: `<a href="../img/attdf-6.jpg" download="../img/attdf-6.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-6.jpg",
  },
  {
    id: 7,
    download: `<a href="../img/attdf-7.jpg" download="../img/attdf-7.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-7.jpg",
  },
  {
    id: 8,
    download: `<a href="../img/attdf-12.jpg" download="../img/attdf-8.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-12.jpg",
  },
  {
    id: 9,
    download: `<a href="../img/attdf-9.jpg" download="../img/attdf-9.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-9.jpg",
  },
  {
    id: 10,
    download: `<a href="../img/attdf-10.jpg" download="../img/attdf-10.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-10.jpg",
  },
  {
    id: 11,
    download: `<a href="../img/attdf-11.jpg" download="../img/attdf-11.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-11.jpg",
  },
  {
    id: 12,
    download: `<a href="../img/attdf-8.jpg" download="../img/attdf-12.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-8.jpg",
  },
  {
    id: 13,
    download: `<a href="../img/attdf-13.jpg" download="../img/attdf-13.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-13.jpg",
  },
  {
    id: 14,
    download: `<a href="../img/attdf-14.jpg" download="../img/attdf-14.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-14.jpg",
  },
  {
    id: 15,
    download: `<a href="../img/attdf-15.jpg" download="../img/attdf-15.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-15.jpg",
  },
  {
    id: 16,
    download: `<a href="../img/attdf-16.jpg" download="../img/attdf-16.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-16.jpg",
  },
  {
    id: 17,
    download: `<a href="../img/attdf-17.jpg" download="../img/attdf-17.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-17.jpg",
  },
  {
    id: 18,
    download: `<a href="../img/attdf-18.jpg" download="../img/attdf-18.jpg" class="text-white">Download</a>`,
    img: "../img/attdf-18.jpg",
  },
];

const displayItem = () => {
  let itemElement = document.querySelector(".partnershipCard");

  partnershipItem.map((item) => {
    const { id, download, img } = item;

    itemElement.innerHTML += `
         <div class="col-lg-6 col-xl-4">
                        <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
                            <div class="blog-img position-relative overflow-hidden">
                                <img src=${img} class="img-fluid w-100 glightbox " alt="img">
                                <div class="bg-primary d-inline px-3 py-2 text-center text-white position-absolute top-0 end-0"></div>
                            </div>
                        </div>
                    </div>
        `;
  });
};
displayItem();
