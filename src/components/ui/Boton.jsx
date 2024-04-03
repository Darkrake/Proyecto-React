import { PropTypes } from "prop-types";
import IndicadorCarga from "./IndicadorCarga";

export default function Boton({
  type = "button", disabled, children, onClick, isLoading,}) {
  return (
    <button
      type={type}
      className="bg-gradient-to-r from-green-600 to bg-green-400 py-3 px-3 
      rounded-lg text-sky-100 font-semibold text-center 
      hover:bg-green-300 hover:text-green-100 hover:font-normal 
       disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center justify-center">
        {isLoading && <IndicadorCarga className="h-2 w-2" />}
        {children}
      </span>
    </button>
  );
}

Boton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Boton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
}