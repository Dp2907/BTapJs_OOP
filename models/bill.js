function Bill(id, name, price) {
  this._id = id;
  this._name = name;
  this._quantity = 0;
  this._price = price;

  this._total = () => {
    return this._quantity * this._price;
  };
}
