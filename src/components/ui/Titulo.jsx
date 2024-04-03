import PropTypes from "prop-types"

export default function Titulo({ children }) {
  return (
    <h2 className="text-sm sm:text-xl text-green-500 font-bold">{children}</h2>
  )
}

Titulo.propTypes = {
  children: PropTypes.string.isRequired,
}