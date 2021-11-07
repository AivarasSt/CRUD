class FurnitureGridComponent {
  constructor() {
    this.state = {
      furniture:[],
      loading: false
    };
    this.initialize();
  }

  fetchFurniture = () => {
    this.state.loading = true;
    setTimeout(() => {
      API.getFurniture(
        (furniture) => {
          this.state.furniture = furniture;
          this.state.loading = false;
          this.render();
          console.log(furniture);
        },
        (err) => console.error(err)
      );
    }, 1000)
  }

  initialize = () => {
    this.fetchFurniture();
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row';

    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
    } else {
      this.htmlElement.innerHTML = '';
    }
  }
}

