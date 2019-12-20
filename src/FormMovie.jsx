import React from 'react';




class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.postMov = this.postMov.bind(this);
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
  }

  postMov() {
 
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state)
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";

    fetch(url, config)
      .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Movie added with ${res}!`);
          }
        }).catch(e => {
          console.error(e);
          alert("Erreur lors de l'ajout d'un film");
  });

   }

  render() {
    return (
      <div className="FormMovie">
      <h1>Saisi d'un film</h1>

      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="form-data">
            <label htmlFor="title">Film</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <div className="form-data">
            <label htmlFor="poster">Lien du poster</label>
            <input
              type="text"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>

          <div className="form-data">
            <label htmlFor="comment">Commentaire</label>
            <input
              type="textarea"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit"
                   value="Envoyer"
                   onClick={this.postMov} />

          </div>
        </fieldset>
      </form>
    </div>
    )}

}

export default FormMovie;