import PropTypes from "prop-types";
import api from "../../api";

BoardForm.propTypes = {
  title: PropTypes.string.isRequired,
  board: PropTypes.object.isRequired,
  board_id: PropTypes.number.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default function BoardForm({title, board, board_id, setVisible}) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append('_method', 'PUT');
    api
      .post('/boards/update', data)
      .then((response) => {
        console.log(response);
        alert('Board updated');
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setVisible(false);
      });
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__div div">
        <h1 className="div__h1">{title}</h1>
        <input type="hidden" name="board_id" value={board_id} />
        <label htmlFor="name">Name</label>
        <input
          className="div__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          // pattern="[A-Za-z]+"
          maxLength={50}
          defaultValue={board.name}
        />
        <input className="div__input--submit" type="submit" value="Let's Go" />
      </div>
    </form>
  )
}
