const getAlert = (status) => {
  return status === 0
    ? "alert-primary"
    : status === 1
    ? "alert-danger"
    : status === 2
    ? "alert-success"
    : "";
};

const TodoComponent = (props) => {
  const { item } = props;
  const alertClass = getAlert(item.status);

  return (
    <div className={`row alert ${alertClass}`}>
      <div className="col-sm-1">
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
          </div>
        </div>
      </div>
      <div className="col-sm-3">{item.status}</div>
      <div className="col-sm-3">{item.name}</div>
      <div className="col-sm-3">{item.description}</div>
    </div>
  );
};

export default TodoComponent;
