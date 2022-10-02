import UnionNo from "../img/UnionNo.svg";
import UnionOk from "../img/UnionOk.svg";

function InfoTooltip({ isOpen, onClose, status }) {
  return (
    <section className={`popup ${isOpen && "popup_is-open"}`}>
      <div className="popup__content_infotooltip">
        <button
          className="button popup__button-close"
          type="button"
          onClick={onClose}
          aria-label="close"
        />
        {status ? (
          <>
            <img
              src={`${UnionOk}`}
              alt="Successful registration"
              className="popup__image-infotooltip"
            />
            <p className="popup__message">You have successfully registered!</p>
          </>
        ) : (
          <>
            <img
              src={`${UnionNo}`}
              alt="Something went wrong"
              className="popup__tooltip-img"
            />
            <p className="popup__message">
              Something went wrong! Try again.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default InfoTooltip;
