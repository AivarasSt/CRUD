class FurnitureCardComponent {
  constructor(props) {
    this.props = props;
    this.initialize();
  };

 

  createCard = () => {
    const { id, title, type, price, location, owner } = this.props.data;
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card-body">
        <div class="d-flex align-items-center justify-content-end">
              <button class="btn btn-sm btn-secondary btn-card">✕</button>
            </div>
          <h4 class="card-title text-center">${title}</h4>
          <h5 class="text-center">${type}</h5> 
          <div class="d-flex flex-column justify-content-around py-4">
            <div>
              <h5 class="text-left">Lokacija</h5>
              <p class="m-0">Gatvė: ${location.street}</p>
              <p class="m-0">Miestas: ${location.city}</p>
              <p class="m-0">Šalis: ${location.country}</p>
            </div>
            <div>
              <h5 class="text-left mt-2">Pardavėjas</h5>
                <p class="m-0">${owner.fullname}</p>
                <p class="m-0">Tel. numeris: ${owner.mobile}</p>
                <p class="m-0">Adresas: ${owner.address}</p>
                <p class="m-0">El. paštas: ${owner.email}</p>
            </div>
         </div>
         <div class="card-top d-flex justify-content-center">
              <h5>Price: ${price} Euro</h5>
          </div>
    `;

    const btnDelete = card.querySelector(".btn-card");
    btnDelete.addEventListener("click", () => this.props.onDelete(id));

    return card;
  };

  initialize = () => {
    this.createCard();
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "card col-lg-4";

    this.render();
  };

  render = () => {
    this.htmlElement.appendChild(this.createCard());
  };

}

