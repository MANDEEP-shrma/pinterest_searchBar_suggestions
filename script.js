let array = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1585768750637-ada36319a484?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals of Town",
    image:
      "https://images.unsplash.com/photo-1441749074938-1c6782303919?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "The crowd of city",
    image:
      "https://images.unsplash.com/photo-1503179579247-e6946936f17b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fruits of planets",
    image:
      "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Oranged peeled",
    image:
      "https://plus.unsplash.com/premium_photo-1693266290145-44e340b8a920?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Web design",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Apple Juice",
    image:
      "https://images.unsplash.com/photo-1602093675596-19cee418220b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let showCards = () => {
  let clutter = "";
  for (let arr of array) {
    clutter += `<div class="box">
              <img src="${arr.image}" class="cursor-pointer" />
              <div class="caption">lorem ipsum</div>
            </div>`;
  }
  let conatiner = document.querySelector(".container");
  conatiner.innerHTML = clutter;
};
showCards();

let handleSearchFunctionality = () => {
  let input = document.querySelector("#searchinput");
  let overlay = document.querySelector(".overlay");
  input.addEventListener("focus", () => {
    overlay.style.display = "block";
  });

  input.addEventListener("blur", () => {
    overlay.style.display = "none";
  });

  input.addEventListener("input", () => {
    const filteredArray = array.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    let clutter = "";
    filteredArray.forEach((obj) => {
      clutter += ` <div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
              </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
};

handleSearchFunctionality();
