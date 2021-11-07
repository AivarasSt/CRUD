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
        console.log(this.state.furniture);
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
    console.log(this.state.furniture);
    this.htmlElement = document.createElement('div');
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
    } else {
      this.htmlElement.className = "card-grid row";
      this.htmlElement.innerHTML = "";
      this.state.furniture.forEach((furniture) => {
        const tempCard = new FurnitureCardComponent({
          data: furniture,
          onDelete: this.deleteFurniture,
        });
        this.htmlElement.append(tempCard.htmlElement);
      });
    }
  }
}

