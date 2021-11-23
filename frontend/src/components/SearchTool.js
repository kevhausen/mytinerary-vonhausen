import Container from "react-bootstrap/esm/Container";

function SearchTool() {
  return (
    <Container className="d-flex search-tool-container align-items-center justify-content-end p-5 flex-column">
      <h2 className="text-light display-2 search-title text-center">
        Search for your next destination
      </h2>
      <div className="d-flex">
        <div class="input-group mb-3 input-group-lg">
          <input
            type="text"
            size="50"
            className="form-control search-input"
            placeholder="Ex: Santiago"
            aria-label="Recipient's for city search"
            aria-describedby="button-addon2"
          />
          <button className="btn" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
    </Container>
  );
}

export default SearchTool;
