function Dialog({ closeFunc, className }) {

  function closeDialog() {
    closeFunc();
  }

  return (
    <div className={className}>
      <p> Imagine there's content here, wow </p>
      <button onClick={closeDialog}>Close Dialog</button>
    </div>
  );
}

export default Dialog;