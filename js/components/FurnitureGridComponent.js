class FurnitureGridComponent {
  constructor() {
    this.state = {
      furniture: [],
      loading: false
    };
    this.initialize();
  }

  fetchFurniture = () => {
    this.state.loading = true;
    API.getFurniture(
      (furniture) => {
        this.state.furniture = furniture;
        this.state.loading = false;
        this.render();
      },
      (err) => console.error(err)
    );
  }

  deleteFurniture = (id) => {
    this.state.loading = true;
    this.render();
    API.deleteFurniture(
      () =>
        API.getFurniture(
          (furniture) => {
            this.state.furniture = furniture;
            this.state.loading = false;
            this.render();
          },
          (error) => console.error(error)
        ),
      (error) => console.error(error),
      id
    );
  };


  initialize = () => {
    this.fetchFurniture();
    this.htmlElement = document.createElement('div');

    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"></div>`;
    } else {
      this.htmlElement.innerHTML = "";
      this.htmlElement.className = "card-grid row g-3";
      this.state.furniture.forEach((furniture) => {
        const cardComponent = new FurnitureCardComponent({
          data: furniture,
          onDelete: this.deleteFurniture,
        });
        this.htmlElement.append(cardComponent.htmlElement);
      });
    }
  }
}

